<template>
  <router-link :to="{ name: 'Dashboard' }">Dasboard</router-link>
  <router-link :to="{ name: 'System' }">System</router-link>
  <RouterView />
</template>

<script setup lang="ts"></script>
