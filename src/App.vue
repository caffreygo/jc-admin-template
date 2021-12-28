<template>
  <router-view />
</template>

<script setup lang="ts">
import { env } from './types/helper';

console.log(env);
</script>
