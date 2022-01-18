<script setup lang="ts">
import MenuComponent from './admin/menu.vue';
import Navbar from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
</script>

<template>
  <div class="admin h-screen w-screen flex">
    <menu-component />
    <div class="content bg-gray-100 flex-1">
      <navbar />
      <history-link />
      <div class="m-3 p-5">
        <router-view />
      </div>
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
