<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const { $idpApi } = useNuxtApp();
const router = useRouter();

const formRef = ref<InstanceType<typeof HTMLFormElement> | null>(null);
const email: Ref<string> = ref('');
const emailRules = [(v: string) => !!v || 'Email is required'];

const password: Ref<string> = ref('');
const showPassword: Ref<boolean> = ref(false);
const passwordRules = [(v: string) => !!v || 'Password is required'];

const apiLoading: Ref<boolean> = ref(false);

const snackbar: Ref<boolean> = ref(false);

const handleValidateForm = async (): Promise<void> => {
  if (formRef.value) {
    const checkForm = await formRef.value.validate();
    if (checkForm.valid) {
      apiLoading.value = true;
      handleSignIn();
    }
  }
};

async function handleSignIn() {
  try {
    const res: any = await $idpApi('/api/auth/login', {
      method: 'POST',
      body: {
        username: email.value,
        password: password.value,
        remember_me: true,
      },
    });
    if (res.status === 'success') {
      const refreshToken = useCookie('_app_session');
      const accessToken = useCookie('_client_session');
      refreshToken.value = res.data.refreshToken;
      accessToken.value = res.data.accessToken;
      router.replace('/dashboard');
    }
    apiLoading.value = false;
  } catch (error) {
    console.log(error);
    apiLoading.value = false;
    snackbar.value = true;
  }
}
</script>

<template>
  <v-container
    fluid
    class="c-min-h-screen c-flex c-items-center c-justify-center c-bg-gray-100"
  >
    <v-row class="c-justify-center">
      <v-col cols="12">
        <div flat class="c-max-w-[400px] c-mx-auto c-shadow-xl c-rounded-lg">
          <div class="c-p-6">
            <v-img
              src="@/assets/logo/logo-text.png"
              width="200"
              class="c-mx-auto"
            />
            <div class="c-my-6 c-text-center">
              <h1 class="c-text-2xl c-text-slate-800">Sign In</h1>
              <p class="c-text-slate-500">
                Please sign in to your account to continue
              </p>
            </div>
            <v-form
              @submit.prevent="handleValidateForm"
              ref="formRef"
              :disabled="apiLoading"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
                variant="outlined"
                density="comfortable"
                class="c-mb-4"
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                density="comfortable"
                class="c-mb-4"
                required
                @click:append-inner="showPassword = !showPassword"
              />
              <v-btn
                :loading="apiLoading"
                :disabled="apiLoading"
                size="large"
                type="submit"
                color="primary"
                class="c-w-full c-font-semibold"
              >
                Sign In
              </v-btn>
            </v-form>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" color="error" variant="tonal" vertical>
      <div class="text-subtitle-1 pb-2">Sign In Failed</div>
      <p>Your Email or Password is incorrect</p>
      <template v-slot:actions>
        <v-btn variant="tonal" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
