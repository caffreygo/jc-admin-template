import { IMenu } from '#/menu';
import { defineStore } from 'pinia';
import { RouteLocationNormalized, useRouter } from 'vue-router';
import router from '@/router';
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';

export default defineStore('menu', {
  state: () => ({
    menus: [] as IMenu[],
    historyMenus: [] as IMenu[],
  }),
  actions: {
    init() {
      this.getMenuByRoute();
      this.historyMenus = utils.store.get(CacheEnum.HISTORY_MENUS) ?? [];
    },
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenus.indexOf(menu);
      this.historyMenus.splice(index, 1);
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return;

      const menu: IMenu = { ...route.meta.menu, route: route.name as string };
      const isHas = this.historyMenus.some((menu) => menu.route === route.name);
      if (!isHas) this.historyMenus.unshift(menu);
      if (this.historyMenus.length > 10) {
        this.historyMenus.pop();
      }

      utils.store.set(CacheEnum.HISTORY_MENUS, this.historyMenus);
    },
    getMenuByRoute() {
      //根据路由生成菜单数据
      this.menus = router
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
    },
  },
});
