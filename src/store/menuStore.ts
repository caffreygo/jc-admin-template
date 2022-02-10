import { IMenu } from '#/menu';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import router from '@/router';

export default defineStore('menu', {
  state: () => ({
    menus: [] as IMenu[],
  }),
  actions: {
    init() {
      this.getMenuByRoute();
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
