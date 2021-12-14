<template>
  <div class="m-20">
    <h2>{{ text }}</h2>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('Hello, this is dashboard page!');
</script>
