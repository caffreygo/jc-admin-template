<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu -->
    <div class="left-container">
      <dl v-for="(menu, index) of menus" :key="index">
        <dt @click="handle(menu)">
          <section class="flex items-center">
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu.active }"
            ></i>
          </section>
        </dt>
        <dd
          v-for="(cmenu, key) of menu.children"
          v-show="menu.active"
          :key="key"
          :class="{ active: cmenu.active }"
        >
          {{ cmenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface IMenuItem {
  title: string;
  icon?: string;
  active?: boolean;
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}

const menus = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-algolia',
    active: true,
    children: [
      { title: '404页面', active: true },
      { title: '403页面' },
      { title: '500页面' },
    ],
  },
  {
    title: '编辑器',
    icon: 'fab fa-app-store-ios',
    children: [{ title: 'Markdown编辑器' }, { title: '富文本编辑器' }],
  },
]);

const resetMenus = () => {
  menus.value.forEach((pmenu) => {
    pmenu.active = false;
    pmenu.children?.forEach((m) => (m.active = false));
  });
};
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenus();
  pmenu.active = true;
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
