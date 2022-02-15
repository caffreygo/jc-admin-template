<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import menuService from '@/composables/menu';

const route = useRoute();
watch(route, () => menuService.setCurrentMenu(route), {
  immediate: true,
});
</script>

<template>
  <div
    class="menu w-[200px] bg-gray-800"
    :class="{ close: menuService.close.value }"
  >
    <div class="logo">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu -->
    <div class="container">
      <dl>
        <dt
          :class="{
            'bg-violet-600 text-white': $route.name === 'admin.home',
          }"
          @click="$router.push('/admin')"
        >
          <section class="flex items-center">
            <i class="fas fa-home"></i>
            <span>dashboard</span>
          </section>
        </dt>
      </dl>
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menu.isClick = true">
          <section class="flex items-center">
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu.isClick }"
            ></i>
          </section>
        </dt>
        <dd
          v-for="(cMenu, key) of menu.children"
          v-show="menu.isClick"
          :key="key"
          :class="{ active: cMenu.isClick }"
          @click="$router.push({ name: cMenu.route })"
        >
          {{ cMenu.title }}
        </dd>
      </dl>
    </div>
  </div>
  <div class="bg block md:hidden"></div>
</template>

<style scoped lang="scss">
.menu {
  .logo {
    @apply text-gray-300 flex items-center p-4;
  }
  .container {
    dl {
      @apply text-gray-300 text-sm;
      dt {
        @apply text-base p-2 flex justify-between items-center cursor-pointer;
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
  &.close {
    width: auto;
    .logo {
      i {
        @apply mr-0;
      }
      span {
        @apply hidden;
      }
    }
    .container {
      dl {
        dt {
          @apply flex items-center justify-center;
          section {
            i {
              @apply mr-0;
            }
            span {
              @apply hidden;
            }
            &:nth-of-type(2) {
              @apply hidden;
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width: 768px) {
  .menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    &.close {
    }
  }
  .bg {
    @apply bg-gray-100 opacity-75 w-screen h-screen absolute left-0 top-0 z-40;
  }
}
</style>
