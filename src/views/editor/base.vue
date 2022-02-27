<script setup lang="ts">
import Editor from '@/components/wangEditor/editor.vue';
import { ref } from 'vue';

const content = ref('wang wditor');
</script>

<template>
  <div>
    <Editor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>
