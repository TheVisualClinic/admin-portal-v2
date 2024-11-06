<script setup lang="ts">
const appStore = useAppStore();

const toggleNavigationDrawer = () => {
  appStore.toggleNavigationDrawer();
};
</script>

<template>
  <v-app-bar app flat>
    <div
      class="c-flex c-items-center c-justify-between c-w-full c-h-full c-px-4 c-border-b"
    >
      <div class="c-flex c-items-center c-gap-6">
        <div class="">
          <v-btn icon @click="toggleNavigationDrawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
        <div class="c-text-lg c-font-medium">Admin Protal</div>
      </div>

      <div class="c-flex c-items-center c-gap-6">
        <div>Icon</div>
        <div>
          <dialog-sign-out />
        </div>
      </div>
    </div>
  </v-app-bar>
</template>
