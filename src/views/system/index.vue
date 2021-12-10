<template>
  <div class="m-20">
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('Hello, this is system page!');
</script>
