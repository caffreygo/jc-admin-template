<script setup lang="ts">
import menuService from '@/composables/menu';

const route = useRoute();
watch(route, () => menuService.setCurrentMenu(route), {
  immediate: true,
});
</script>

<template>
  <!-- menu -->
  <div
    class="menu w-[200px] bg-gray-800"
    :class="{ close: menuService.close.value }"
  >
    <!-- logo -->
    <div class="logo">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">Hello world ~</span>
    </div>
    <!-- menu items -->
    <div class="container">
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menuService.toggleParentMenu(menu)">
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
          :class="menu.isClick && !menuService.close.value ? 'block' : 'hidden'"
        >
          <div
            v-for="(cMenu, key) of menu.children"
            :key="key"
            :class="{ active: cMenu.isClick }"
            @click="$router.push({ name: cMenu.route })"
          >
            {{ cMenu.title }}
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <!-- mask under mobile -->
  <div
    class="bg block md:hidden"
    :class="{ close: menuService.close.value }"
    @click="menuService.toggleState"
  ></div>
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
        @apply px-2;
        div {
          @apply py-2 pl-4 my-2 rounded-md cursor-pointer hover:bg-violet-500 duration-300 bg-gray-700;
          &.active {
            @apply bg-violet-700 text-white;
          }
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
        @apply relative z-10;
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
        &:hover {
          dd {
            display: block !important;
            @apply absolute left-full top-0 w-[200px] bg-gray-700;
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
      @apply hidden;
    }
  }
  .bg {
    @apply bg-gray-100 opacity-75 w-screen h-screen absolute left-0 top-0 z-40;
    &.close {
      @apply hidden;
    }
  }
}
</style>
