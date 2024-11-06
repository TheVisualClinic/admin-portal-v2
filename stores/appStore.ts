import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    navigationDrawer: false,
    pageLoading: true,
  }),

  actions: {
    toggleNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    openNavigationDrawer() {
      this.navigationDrawer = true;
    },
    closeNavigationDrawer() {
      this.navigationDrawer = false;
    },
    showPageLoading() {
      this.pageLoading = true;
    },
    hiddenPageLoading() {
      this.pageLoading = false;
    },
  },
});
