<template>
  <div>
    <Editor v-model="content" :height="300" placeholder="请输入markdown内容" />
    {{ content }}
  </div>
</template>

<script setup lang="ts">
import Editor from '@/components/markdown/editor.vue';
import { ref } from 'vue';

const content = ref('markdown content');
</script>
