<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800">
      <div class="logo">
        <i class="fas fa-robot text-white"></i>
      </div>
    </div>
    <div class="menu bg-gray-200 flex-1">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>

<style scoped></style>
