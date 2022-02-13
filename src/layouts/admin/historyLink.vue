<template>
  <div
    v-show="historyMenus.length"
    class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm"
  >
    <div class="grid grid-flow-col gap-2 justify-start">
      <div
        v-for="(menu, index) of historyMenus"
        :key="index"
        :to="{ name: menu.route }"
        class="hover:bg-violet-600 hover:text-white bg-white rounded-sm duration-300 border py-2 px-3 text-sm text-gray-600"
        :class="{ 'bg-violet-600 text-white': $route.name === menu.route }"
      >
        <router-link :to="{ name: menu.route }">
          {{ menu.title }}
        </router-link>
        <i
          class="fas fa-times ml-1 cursor-pointer hover:text-gray-300"
          @click="removeHistoryMenu(menu)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore';
// import { ref } from 'vue';

const { historyMenus, removeHistoryMenu } = menuStore();

// const links = ref<{ title: string }[]>([
//   { title: '编辑器' },
//   { title: '订单列表' },
//   { title: '用户管理' },
//   { title: '销售总额' },
// ]);
</script>
