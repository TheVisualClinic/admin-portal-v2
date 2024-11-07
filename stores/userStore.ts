import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user_id: '',
    username: '',
    user_status: '',
    profile: {
      first_name: '',
      last_name: '',
      nick_name: '',
      gender: '',
      date_of_birth: '',
      avatar_url: '',
    },
    contact: {
      email: '',
      mobile_phone: '',
    },
    role: {
      role_id: 0,
      name: '',
    },
    permissions: [] as string[],
  }),

  actions: {
    setUserId(id: string) {
      this.user_id = id;
    },
    setUsername(name: string) {
      this.username = name;
    },
    setUserStatus(status: string) {
      this.user_status = status;
    },
    setProfile(profile: {
      first_name?: string;
      last_name?: string;
      nick_name?: string;
      gender?: string;
      date_of_birth?: string;
      profile_picture?: string;
    }) {
      this.profile = { ...this.profile, ...profile };
    },
    setContact(contact: { email?: string; mobile_phone?: string }) {
      this.contact = { ...this.contact, ...contact };
    },
    setRole(role: { role_id: number; name: string }) {
      this.role = { ...this.role, ...role };
    },
    setPermissions(permissions: string[]) {
      // แก้ชนิดข้อมูลให้ตรงกัน
      this.permissions = permissions;
    },
    clearUser() {
      this.user_id = '';
      this.username = '';
      this.user_status = '';
      this.profile = {
        first_name: '',
        last_name: '',
        nick_name: '',
        gender: '',
        date_of_birth: '',
        avatar_url: '',
      };
      this.contact = {
        email: '',
        mobile_phone: '',
      };
      this.role = {
        role_id: 0,
        name: '',
      };
      this.permissions = [];
    },
  },
});
