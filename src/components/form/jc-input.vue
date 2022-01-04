<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="jc-input" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.jc-input {
  @apply border border-gray-200 w-full rounded-sm py-1 px-2 outline-none placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-400 duration-300 focus:border-white;
}
</style>
