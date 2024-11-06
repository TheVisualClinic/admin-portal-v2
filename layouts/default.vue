<template>
  <v-layout>
    <!-- Side Bar -->
    <LayoutNavigationDrawer />
    <!-- App Bar -->
    <LayoutAppBar />
    <!-- Main App Body -->
    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
    <!-- Page Loading -->
    <BasePageLoading />
  </v-layout>
</template>
