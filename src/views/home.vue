<template>
  <div
    class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center"
  >
    <img
      src="/images/avatar.jpeg"
      class="w-52 h-52 object-cover rounded-full border-8 border-white mb-4"
    />
    <div class="mt-3">
      <router-link :to="{ name: 'admin.home' }" class="jc-button"
        >后台管理</router-link
      >
      <router-link :to="{ name: 'login' }" class="jc-button jc-danger ml-3"
        >用户登录</router-link
      >
    </div>
    <div class="text-gray-200 text-sm font-mono drop-shadow-md mt-4 px-10">
      Impropriety is the soul of wit.
    </div>
  </div>
</template>
