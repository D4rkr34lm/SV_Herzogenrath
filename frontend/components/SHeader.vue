<template>
  <header>
    <PCard>
      <template #content>
        <div class="flex flex-row justify-between">
          <img class="header-image" src="~/assets/Burg.gif" />
          <div class="flex flex-col">
            <h1>Schachverein 1949 Herzogenrath</h1>
            <PDivider />
            <h2>{{ age }} Jahre Schach in Herzogenrath</h2>
          </div>
          <div>
            <p>Jeden Donnerstag ab 19:30 Schach (17:30 Jugend)</p>
            <p>Pfarrheim St. Marien (hinter der Kirche)</p>
            <a href="https://maps.app.goo.gl/8Ppi4ehdHXHRwR2q8"
              >Kleikstraße 56 52134 Herzogenrath</a
            >
          </div>
        </div>
      </template>
    </PCard>
  </header>
</template>

<script setup lang="ts">
const foundingDate = new Date("1949-01-01");
const currentDate = new Date(Date.now());

const age = currentDate.getFullYear() - foundingDate.getFullYear();
</script>

<style scoped>
.header-image {
  max-width: 250px;
}
</style>
