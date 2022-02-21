<script lang="ts" setup>
import { ref, nextTick } from 'vue';

const activeName = ref('site');
const show = ref(false);

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    show.value = false;
  });
});
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show"></i>
    <el-tabs v-show="show" v-model="activeName" class="lists" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a
          >Nostrud enim consectetur Lorem irure veniam ullamco sunt proident
          dolor officia cillum quis est sit.</a
        >
        <a
          >Nostrud enim consectetur Lorem irure veniam ullamco sunt proident
          dolor officia cillum quis est sit.</a
        >
        <a
          >Nostrud enim consectetur Lorem irure veniam ullamco sunt proident
          dolor officia cillum quis est sit.</a
        >
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">
        <a
          >Nostrud enim consectetur Lorem irure veniam ullamco sunt proident
          dolor officia cillum quis est sit.</a
        >
        <a
          >Nostrud enim consectetur Lorem irure veniam ullamco sunt proident
          dolor officia cillum quis est sit.</a
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 py-2 border text-xs rounded-md shadow-md right-[-60px] z-10 w-[300px];
    a {
      @apply truncate block border-b pb-2 my-2 hover:text-fuchsia-700;
    }
  }
}
</style>
