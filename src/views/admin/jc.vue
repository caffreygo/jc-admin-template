<template>
  <div>
    <input type="text" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border p-2 rounded-md border-violet-500 outline-none;
  }
}
</style>
