<script setup lang="ts">
import menuService from '@/composables/menu';
</script>

<template>
  <div
    v-show="menuService.history.value.length"
    class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm"
  >
    <div class="grid grid-flow-col gap-2 justify-start">
      <div
        v-for="(menu, index) of menuService.history.value"
        :key="index"
        :to="{ name: menu.route }"
        class="hover:bg-violet-600 hover:text-white bg-white rounded-sm duration-300 border py-2 px-3 text-sm text-gray-600"
        :class="{ 'bg-violet-600 text-white': $route.name === menu.route }"
      >
        <router-link :to="{ name: menu.route }">
          {{ menu.title }}
        </router-link>
        <i
          class="fas fa-times ml-1 cursor-pointer hover:text-gray-300"
          @click="menuService.removeHistoryMenu(menu)"
        ></i>
      </div>
    </div>
  </div>
</template>
