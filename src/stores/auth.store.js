import { defineStore } from "pinia";


import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user"))
  }),
  actions: {
    async login(username, password) {
      // const user = await axios
      //   .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      //   .then((response) => (this.info = response));
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      // router.push('/');
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      // router.push('/login');
    }
  }
});