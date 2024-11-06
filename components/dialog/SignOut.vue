<script setup lang="ts">
const router = useRouter();
const userStore = useUserStore();
const { $idpApi } = useNuxtApp();

const refreshToken = useCookie('_app_session');
const accessToken = useCookie('_client_session');

const apiLoading: Ref<boolean> = ref(false);

async function handleSignOut(token: string) {
  apiLoading.value = true;
  try {
    const res: any = await $idpApi('/api/auth/tokens/revoke', {
      method: 'POST',
      body: {
        token: refreshToken.value,
      },
    });
    if (res.status === 'success') {
      userStore.clearUser();
      refreshToken.value = null;
      accessToken.value = null;
      router.replace('/auth/sign-in');
    }
    apiLoading.value = false;
  } catch (error) {
    console.log(error);
    apiLoading.value = false;
  }
}
</script>

<template>
  <v-dialog :persistent="apiLoading" max-width="400">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="sign out"
        variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Confirm Sign Out">
        <v-card-text> Are you sure you want to sign out?</v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="apiLoading"
            text="Close"
            @click="isActive.value = false"
          ></v-btn>
          <v-spacer />
          <v-btn
            :loading="apiLoading"
            text="Confirm"
            color="primary"
            variant="tonal"
            @click="handleSignOut"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
