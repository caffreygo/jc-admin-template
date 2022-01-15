<script setup lang="ts">
import MenuComponent from './admin/menu.vue';
import Navbar from './admin/navbar.vue';
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <menu-component />
    <div class="content bg-gray-200 flex-1">
      <navbar />
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

<style lang="scss"></style>
