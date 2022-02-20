import { IMenu } from '#/menu';
import { ref } from 'vue';
import router from '@/router';
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';
import {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';

class Menu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);
  public close = ref(false);

  constructor() {}

  init() {
    this.menus.value = this.getMenuByRoute();
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENUS) ?? [];
  }

  toggleParentMenu(menu: IMenu) {
    this.menus.value.forEach((m) => {
      m.isClick = false;
      if (m === menu) m.isClick = true;
    });
  }

  toggleState() {
    this.close.value = !this.close.value;
  }

  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((m) => {
      m.isClick = false;
      m.children?.forEach((c) => {
        c.isClick = false;
        if (c.route === route.name) {
          m.isClick = true;
          c.isClick = true;
        }
      });
    });
  }

  removeHistoryMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu);
    this.history.value.splice(index, 1);
  }

  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return;

    const menu: IMenu = { ...route.meta.menu, route: route.name as string };
    const isHas = this.history.value.some((menu) => menu.route === route.name);
    if (!isHas) this.history.value.unshift(menu);
    if (this.history.value.length > 10) {
      this.history.value.pop();
    }

    utils.store.set(CacheEnum.HISTORY_MENUS, this.history.value);
  }

  private getMenuByRoute() {
    return router
      .getRoutes()
      .filter((route) => route.children.length && route.meta.menu)
      .map((route) => {
        const menu: IMenu = { ...route.meta.menu };
        menu.children = route.children
          .filter((route) => route.meta?.menu)
          .map((route) => {
            return {
              ...route.meta?.menu,
              route: route.name,
            } as IMenu;
          });
        return menu;
      })
      .filter((menu) => menu.children?.length);
  }
}
export default new Menu();
