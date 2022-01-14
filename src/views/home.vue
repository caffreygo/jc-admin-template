<template>
  <div
    class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center"
  >
    <img
      src="/images/home.jpg"
      class="w-52 h-52 object-cover rounded-full border-8 border-white mb-4"
    />
    <div>
      <router-link :to="{ name: 'admin.jc' }" class="jc-button"
        >后台管理</router-link
      >
      <router-link :to="{ name: 'login' }" class="jc-button jc-danger ml-3"
        >用户登录</router-link
      >
    </div>
    <div class="text-gray-200 text-sm font-mono drop-shadow-md mt-3 px-10">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: {
    name: 'home',
  },
};
</script>

<style scoped></style>
