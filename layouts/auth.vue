<script setup lang="ts">
const appStore = useAppStore();

setTimeout(() => {
  appStore.hiddenPageLoading();
}, 500);
</script>

<template>
  <v-layout>
    <v-main>
      <NuxtPage />
    </v-main>
    <!-- Page Loading -->
    <BasePageLoading />
  </v-layout>
</template>
