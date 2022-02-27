<script setup lang="ts">
const content = ref('markdown content');
</script>

<template>
  <div>
    <MarkdownEditor
      v-model="content"
      :height="300"
      placeholder="请输入markdown内容"
    />
    {{ content }}
  </div>
</template>
