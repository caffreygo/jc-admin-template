<template>
  <router-view />
</template>

<script setup lang="ts">
import userApi from './api/userApi';
const response = await userApi.info();
console.log(response.data);
</script>
