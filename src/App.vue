<template>
  <router-view />
</template>

<script setup lang="ts">
import { env } from './types/helper';
// response: any
const response = await fetch('http://localhost:3000/api/user/get').then((res) =>
  res.json()
);
console.log(response);
console.log(env);
</script>
