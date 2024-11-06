import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    userId: '',
    username: '',
    userStatus: '',
    profile: {
      firstName: '',
      lastName: '',
      nickName: '',
      gender: '',
      dateOfBirth: '',
      profilePicture: '',
    },
    contact: {
      email: '',
      mobilePhone: '',
    },
    role: {
      role_id: 0,
      name: '',
    },
    permissions: [],
  }),

  actions: {
    setUserId(id: string) {
      this.userId = id;
    },
    setUsername(name: string) {
      this.username = name;
    },
    setUserStatus(status: string) {
      this.userStatus = status;
    },
    setProfile(profile: {
      firstName: string;
      lastName: string;
      nickName: string;
      gender: string;
      dateOfBirth: string;
      profilePicture: string;
    }) {
      this.profile = { ...this.profile, ...profile };
    },
    setContact(contact: { email: string; mobilePhone: string }) {
      this.contact = { ...this.contact, ...contact };
    },
    setRole(role: { role_id: number; name: string }) {
      this.role = { ...this.role, ...role };
    },
    setPermissions(permissions: never[]) {
      this.permissions = permissions;
    },
    clearUser() {
      this.userId = '';
      this.username = '';
      this.userStatus = '';
      this.profile = {
        firstName: '',
        lastName: '',
        nickName: '',
        gender: '',
        dateOfBirth: '',
        profilePicture: '',
      };
      this.contact = {
        email: '',
        mobilePhone: '',
      };
      this.role = {
        role_id: 0,
        name: '',
      };
      this.permissions = [];
    },
  },
});
