<script setup lang="ts">
import articleApi from '@/api/articleApi';
const articles = ref();
articleApi.getArticle().then(({ data }) => (articles.value = data));
</script>

<template>
  <div class="article">
    <AnimateList tag="ul" :duration="1" :delay="0.5">
      <li
        v-for="(article, index) of articles"
        :key="article.id"
        :data-index="index"
      >
        {{ article.title }}
      </li>
    </AnimateList>
  </div>
</template>

<style lang="scss" scoped>
.article {
  padding: 30px;
  position: relative;
  background-color: #34495e;
  ul {
    li {
      padding: 10px;
      margin-bottom: 20px;
      background: #f1c40f;
      color: #333;
      border-radius: 5px;
    }
  }
}
</style>
