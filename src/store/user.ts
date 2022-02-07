import userApi, { User } from '@/api/userApi';
import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => ({
    info: {} as null | User,
  }),
  actions: {
    async getUserInfo() {
      const res = await userApi.info();
      this.info = res.data;
    },
  },
});
