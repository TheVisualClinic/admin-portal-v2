export default defineNuxtRouteMiddleware(async (to) => {
  const appStore = useAppStore();
  const { $idpApi } = useNuxtApp();

  const refreshToken = useCookie('_app_session');
  const accessToken = useCookie('_client_session');

  const publicPaths = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/forgot-password',
  ];

  if (refreshToken.value) {
    await handleCheckRefreshToken(refreshToken.value);
    if (publicPaths.includes(to.path)) {
      return navigateTo('/dashboard');
    }
  }

  if (!refreshToken.value && !publicPaths.includes(to.path)) {
    return navigateTo('/auth/sign-in');
  }

  if (to.path === '' || to.path === '/') {
    return navigateTo('/dashboard');
  }

  setTimeout(() => {
    appStore.hiddenPageLoading();
  }, 1000);

  async function handleCheckRefreshToken(token: string) {
    try {
      const res: any = await $idpApi('/api/auth/tokens/refresh', {
        method: 'POST',
        body: {
          token: token,
        },
      });
      if (res.status === 'success') {
        accessToken.value = res.data.accessToken;
        if (res.data.refreshToken) {
          refreshToken.value = res.data.refreshToken;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
});
