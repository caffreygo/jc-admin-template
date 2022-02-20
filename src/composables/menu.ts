import { IMenu } from '#/menu';
import { ref } from 'vue';
import router from '@/router';
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';
import { RouteLocationNormalizedLoaded } from 'vue-router';

class Menu {
  public menus = ref<IMenu[]>([]);
  public history = ref<IMenu[]>([]);

  constructor() {}

  init() {
    this.menus.value = this.getMenuByRoute();
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENUS) ?? [];
  }

  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((m) => {
      m.isClick = false;
      m.children?.forEach((c) => {
        if (c.route === route.name) {
          m.isClick = true;
          c.isClick = true;
        } else {
          c.isClick = false;
        }
      });
    });
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
