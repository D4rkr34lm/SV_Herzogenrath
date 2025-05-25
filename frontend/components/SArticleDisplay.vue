<template>
  <PCard>
    <template #header>
      <h2>{{ article.title }}</h2>
    </template>
    <template #content>
      <ContentRenderer :value="props.article" />
    </template>
  </PCard>
</template>

<script setup lang="ts">
import type { NewsCollectionItem } from "@nuxt/content";

interface Props {
  article: NewsCollectionItem;
}

const props = defineProps<Props>();
</script>
