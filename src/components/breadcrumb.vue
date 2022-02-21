<script lang="ts" setup>
import menu from '@/composables/menu';

const route = menu.route.value;
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item
        v-for="r of route.matched"
        :key="r.name"
        :to="{ path: r.path }"
        >{{ r.meta.menu?.title }}</el-breadcrumb-item
      >
    </template>
  </el-breadcrumb>
</template>
