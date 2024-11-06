<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/appStore';

const appStore = useAppStore();

const navigationDrawer = computed({
  get: () => appStore.navigationDrawer,
  set: (value) => {
    if (value) {
      appStore.openNavigationDrawer();
    } else {
      appStore.closeNavigationDrawer();
    }
  },
});

const checkScreenWidth = () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    appStore.openNavigationDrawer();
  } else {
    appStore.closeNavigationDrawer();
  }
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>

<template>
  <v-navigation-drawer v-model="navigationDrawer" app>
    <div class="c-py-4 c-px-2">
      <v-img src="@/assets/logo/logo-text.png" width="100%" />
    </div>

    <BaseCDivider />

    <v-list density="compact" nav>
      <v-list-item
        to="/dashboard"
        prepend-icon="mdi-folder"
        title="Dashboard"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Storage"
        value="shared"
      ></v-list-item>
      <v-list-item
        to="/member"
        prepend-icon="mdi-account-multiple"
        title="Member"
        value="starred"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
