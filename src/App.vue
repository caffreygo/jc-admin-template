<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
// import userApi from './api/userApi';
// import utils from '@/utils';

// console.log(utils.env);
// onMounted(async () => {
//   const response = await userApi.login();
//   console.log(response.data.token);
// });
</script>
