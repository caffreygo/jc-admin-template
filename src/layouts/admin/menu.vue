<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu -->
    <div class="left-container">
      <dl v-for="(route, index) of routerStore.routes" :key="index">
        <dt @click="handleClick(route)">
          <section class="flex items-center">
            <i :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': route.meta.isClick }"
            ></i>
          </section>
        </dt>
        <dd
          v-for="(childRoute, key) of route.children"
          v-show="route.meta.isClick"
          :key="key"
          :class="{ active: childRoute.meta?.isClick }"
          @click="handleClick(route, childRoute)"
        >
          {{ childRoute.meta?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/routerStore';
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';

const routerStore = useStore();
const routeService = useRouter();

const resetMenus = () => {
  routerStore.routes.forEach((pRoute) => {
    pRoute.meta.isClick = false;
    pRoute.children?.forEach((route) => {
      if (route.meta) {
        route.meta.isClick = false;
      }
    });
  });
};

const handleClick = (
  pRoute: RouteRecordNormalized,
  cRoute?: RouteRecordRaw
) => {
  resetMenus();
  pRoute.meta.isClick = true;
  if (cRoute && cRoute.meta) {
    console.log(cRoute.meta);
    cRoute.meta.isClick = true;
    routeService.push(cRoute);
  }
};
</script>

<style scoped lang="scss">
.menu {
  .left-container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-base mt-4 flex justify-between items-center cursor-pointer;
        section {
          @apply flex items-center;
          i {
            @apply mr-2 text-lg;
          }
        }
      }
      dd {
        @apply py-2 pl-4 my-2 rounded-md cursor-pointer hover:bg-violet-500 duration-300 bg-gray-700;
        &.active {
          @apply bg-violet-700 text-white;
        }
      }
    }
  }
}
</style>
