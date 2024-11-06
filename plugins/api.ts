export default defineNuxtPlugin((nuxtApp) => {
  const userStore = useUserStore();
  const config = useRuntimeConfig();
  const refreshToken = useCookie('_app_session');
  const accessToken = useCookie('_client_session');

  const createApi = (baseURL: string) => {
    return $fetch.create({
      baseURL,
      onRequest({ options }) {
        if (accessToken.value) {
          options.headers.set('Authorization', `Bearer ${accessToken.value}`);
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          userStore.clearUser();
          refreshToken.value = null;
          accessToken.value = null;
          await nuxtApp.runWithContext(() => navigateTo('/auth/sign-in'));
        }
      },
    });
  };

  const mainApi = createApi(config.public.apiMainUrl);
  const idpApi = createApi(config.public.apiIdpUrl);
  const storageApi = createApi(config.public.apiStorageUrl);

  return {
    provide: {
      mainApi,
      idpApi,
      storageApi,
    },
  };
});
