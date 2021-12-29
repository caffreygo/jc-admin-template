<template>
  <router-view />
</template>

<script setup lang="ts">
import { info } from './api/userApi';
await info();
</script>
