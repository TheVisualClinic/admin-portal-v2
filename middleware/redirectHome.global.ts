export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '' || to.path === '/') {
    return navigateTo('/dashboard');
  }
});
