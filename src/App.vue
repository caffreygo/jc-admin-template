<template>
  <router-view />
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
// import userApi from './api/userApi';
import { env } from '@/utils';

console.log(env);
// onMounted(async () => {
//   const response = await userApi.login();
//   console.log(response.data.token);
// });
</script>
