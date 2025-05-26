<template>
  <PCard>
    <template #header>
      <h3>Mannschaftsführer:</h3>
      <p>{{ props.leader.name }}</p>
      <p>{{ props.leader.address }}</p>
      <p>{{ props.leader.mobileNumber }}</p>
      <p>{{ props.leader.email }}</p>
    </template>
  </PCard>
</template>

<script setup lang="ts">
import type { TeamsCollectionItem } from "@nuxt/content";

interface Props {
  leader: TeamsCollectionItem["leader"];
}

const props = defineProps<Props>();
</script>
