<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div
      class="w-[720px] bg-white -translate-y-16 grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div class="mt-8">
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="jc-input"
          />
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="jc-input mt-4"
          />
        </div>
        <button class="jc-button mt-3">登录</button>
      </div>
      <div>
        <img src="/images/login.jpg" class="h-80 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.jc-input {
  @apply border border-gray-200 w-full rounded-sm py-1 px-2 outline-none placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-400 duration-300 focus:border-white;
}
.jc-button {
  @apply bg-violet-700 text-white w-full py-2 rounded-md hover:bg-violet-500 duration-300;
}
</style>
