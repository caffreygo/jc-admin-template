<template>
  <router-view />
</template>

<script setup lang="ts">
import helper from './types/helper';

console.log(helper.env);
console.log(typeof import.meta.env.VITE_SOME_KEY);
</script>
