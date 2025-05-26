<template>
  <PCard v-if="teamData">
    <template #title>
      <h2>{{ teamData.name }}</h2>
    </template>
    <template #subtitle>
      <p>Saison: {{ teamData.season }}</p>
      <p>Klasse: {{ teamData.class }}</p>
    </template>
    <template #content>
      <PDataTable :value="teamData.members">
        <PColumn field="num" header="Nummer" />
        <PColumn field="name" header="Name" />
      </PDataTable>
      <STeamLeaderDisplay :leader="teamData.leader" />
    </template>
  </PCard>
</template>

<script setup lang="ts">
const route = useRoute();

const teamName = computed(() => route.params.teamName.toString());

const { data: teamData } = await useAsyncData(() =>
  queryCollection("teams").where("name", "=", teamName.value).first(),
);
</script>
