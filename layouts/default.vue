<template>
  <v-app>
    <!-- Navigation Drawer (Sidebar) -->
    <LayoutNavigationDrawer />

    <!-- App Bar (Top Bar) -->
    <LayoutAppBar />

    <!-- Main Content Area -->
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
