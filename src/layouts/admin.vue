<template>
  <router-view />
</template>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>

<style scoped></style>
