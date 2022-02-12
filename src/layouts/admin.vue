<script setup lang="ts">
import MenuComponent from './admin/menu.vue';
import Navbar from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
import menuStore from '@/store/menuStore';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
const menu = menuStore();
menu.init();

onBeforeRouteUpdate(() => {
  menu.addHistoryMenu(route);
});
</script>

<template>
  <div class="admin min-h-screen w-screen flex">
    <menu-component class="hidden md:block" />
    <div class="content bg-gray-100 flex-1">
      <navbar />
      <history-link />
      <div class="m-4">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="animate__animated animate__bounceInRight"
          >
            <component :is="Component" />
          </transition>
        </router-view>
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
