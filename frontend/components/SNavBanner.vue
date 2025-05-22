<template>
  <nav>
    <PMenu :model="navItems">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </PMenu>
  </nav>
</template>
<script setup lang="ts">
import type { MenuItem } from "primevue/menuitem";

const navItems = ref<MenuItem[]>([
  {
    label: "Allgemein",
    items: [{ label: "Neuigkeiten", route: "news" }],
  },
]);
</script>
