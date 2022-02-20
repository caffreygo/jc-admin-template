<script setup lang="ts">
import MenuComponent from './admin/menu.vue';
import Navbar from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
import menuService from '@/composables/menu';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

menuService.init();
const route = useRoute();

watch(
  route,
  () => {
    menuService.addHistoryMenu(route);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <menu-component />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <navbar />
        <history-link />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition
            appear
            class="animate__animated"
            :enter-active-class="
              route.meta.enterClass ?? 'animate__fadeInRight'
            "
            :leave-active-class="
              route.meta.leaveClass ?? 'animate__fadeOutLeft'
            "
          >
            <component :is="Component" class="absolute w-full" />
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

<style lang="scss" scoped>
.animate__fadeInRight {
  animation-duration: 0.5s;
}
.animate__fadeOutLeft {
  animation-duration: 0.3s;
}
</style>
