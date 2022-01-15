<template>
  <div class="m-3 grid grid-flow-col gap-2 justify-start">
    <a
      v-for="(link, index) of links"
      :key="index"
      href=""
      class="bg-white rounded-md py-2 px-3"
      >{{ link.title }} <i class="fas fa-times ml-1"></i
    ></a>
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
