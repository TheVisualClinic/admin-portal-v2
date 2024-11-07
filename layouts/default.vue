<script setup lang="ts">
const { $idpApi } = useNuxtApp();
const appStore = useAppStore();
const userStore = useUserStore();

setTimeout(() => {
  appStore.hiddenPageLoading();
}, 500);

onMounted(async () => {
  await handleGetUserInfomation();
  console.log(userStore);
});

async function handleGetUserInfomation() {
  try {
    const res: any = await $idpApi('/api/users/my-profile');
    if (res.status === 'success') {
      userStore.setUserId(res.data.user_id);
      userStore.setUsername(res.data.username);
      userStore.setUserStatus(res.data.user_status);
      userStore.setProfile(res.data.profile);
      userStore.setContact(res.data.contact);
      userStore.setRole(res.data.role);
      userStore.setPermissions(res.data.permissions);
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <v-layout>
    <!-- Side Bar -->
    <LayoutNavigationDrawer />
    <!-- App Bar -->
    <LayoutAppBar />
    <!-- Main App Body -->
    <v-main>
      <v-container fluid>
        <div class="c-whitespace-pre-line"></div>
        <NuxtPage />
      </v-container>
    </v-main>
    <!-- Page Loading -->
    <BasePageLoading />
  </v-layout>
</template>
