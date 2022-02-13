<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu -->
    <div class="left-container">
      <dl v-for="(menu, index) of menus" :key="index">
        <dt @click="handleClick(menu)">
          <section class="flex items-center">
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu.isClick }"
            ></i>
          </section>
        </dt>
        <dd
          v-for="(cMenu, key) of menu.children"
          v-show="menu.isClick"
          :key="key"
          :class="{ active: cMenu.isClick }"
          @click="handleClick(menu, cMenu)"
        >
          {{ cMenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMenu } from '#/menu';
import menuStore from '@/store/menuStore';
import router from '@/router';

const menus = menuStore().menus;

const resetMenus = () => {
  menus.forEach((pMenu) => {
    pMenu.isClick = false;
    pMenu.children?.forEach((cMenu) => {
      cMenu.isClick = false;
    });
  });
};

const handleClick = (pMenu: IMenu, cMenu?: IMenu) => {
  resetMenus();
  pMenu.isClick = true;
  if (cMenu) {
    cMenu.isClick = true;
    router.push({
      name: cMenu.route,
    });
  }
};
</script>

<style scoped lang="scss">
.menu {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-base mt-4 flex justify-between items-center cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-lg;
          }
        }
      }
      dd {
        @apply py-2 pl-4 my-2 rounded-md cursor-pointer hover:bg-violet-500 duration-300 bg-gray-700;
        &.active {
          @apply bg-violet-700 text-white;
        }
      }
    }
  }
}
</style>
