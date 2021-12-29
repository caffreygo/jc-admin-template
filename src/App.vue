<template>
  <router-view />
</template>

<script setup lang="ts">
import * as userApi from './api/userApi';
await userApi.info();
</script>
