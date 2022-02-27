<script setup lang="ts">
const content = ref('wang wditor');
</script>

<template>
  <div>
    <WangEditorEditor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>
