<template>
  <div class="m-20">
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('Hello, this is dashboard page!');
</script>

<style scoped lang="scss">
h2 {
  padding: 20px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}
</style>
