<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import userApi from './api/userApi';

onMounted(async () => {
  const response = await userApi.info();
  console.log(response.data);
});
</script>
