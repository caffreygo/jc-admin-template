<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="menuService.toggleState">
        <i
          v-if="menuService.close.value"
          class="fa fa-align-right mr-2 text-gray-600 cursor-pointer"
        ></i>
        <i
          v-else
          class="fa fa-align-left mr-2 text-gray-600 cursor-pointer"
        ></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="flex justify-center items-center relative group cursor-pointer">
      <img :src="user.info?.avatar" class="w-8 h-8 rounded-full object-cover" />
      <span class="ml-1 text-sm text-gray-600">{{ user.info?.name }}</span>
      <section
        class="group-hover:block absolute top-full bg-white shadow-sm px-5 whitespace-nowrap rounded-md hidden z-10"
      >
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-file"></a>
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center cursor-pointer border-b py-3">
          <a class="fas fa-user-astronaut"></a>
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div
          class="flex items-center cursor-pointer border-b py-3"
          @click="utils.user.logout"
        >
          <a class="fas fa-sign-out-alt"></a>
          <span class="text-xs text-gray-600 ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import userStore from '@/store/userStore';
import menuService from '@/composables/menu';
import utils from '@/utils';

const user = userStore();
</script>
