<script setup lang="ts">
const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>Dashboard Page</h1>
    <div v-if="userStore" class="c-whitespace-pre-line">
      <!-- {{ userStore }} -->
    </div>
  </div>
</template>
