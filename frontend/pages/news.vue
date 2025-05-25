<template>
  <div v-if="articles">
    <SArticleDisplay
      v-for="article of articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>
<script setup lang="ts">
const { data: articles } = await useAsyncData(() =>
  queryCollection("news").limit(10).all(),
);
</script>
