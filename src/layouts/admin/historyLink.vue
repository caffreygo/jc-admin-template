<template>
  <div class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm">
    <div class="grid grid-flow-col gap-2 justify-start">
      <a
        v-for="(link, index) of links"
        :key="index"
        href=""
        class="hover:bg-violet-600 hover:text-white bg-white rounded-sm duration-300 border py-2 px-3 text-sm text-gray-600"
        >{{ link.title }} <i class="fas fa-times ml-1"></i
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
]);
</script>
