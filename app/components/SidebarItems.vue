<script setup lang="ts">
import type { SidebarItemEntry } from "#shared/types/entries";
import {
  ContactForm,
  ContactInfo,
  EmploymentHistory,
  Headshot,
} from "#components";

defineProps<{ items: SidebarItemEntry[] }>();

// keys mirror the `component` options of the Contentful "sidebarItem" type
const components = { ContactForm, ContactInfo, EmploymentHistory, Headshot };
</script>

<template>
  <template v-for="item in items" :key="item.sys.id">
    <component
      :is="components[item.fields.component]"
      v-if="item.fields.component"
      :item="item"
    />
  </template>
</template>
