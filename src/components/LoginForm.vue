<template>
  <div class="auth__body">
    <div class="auth__title">Вход</div>
    <div v-if="error" class="error">
      Данные введены не верно!
    </div>
    <form onsubmit="return false;" class="auth__form form">
      <div class="form__item">
        <input v-model="login" type="text" required>
        <label>Логин</label>
      </div>
      <div class="form__item">
        <input v-model="password" type="password" required>
        <label>Пароль</label>
      </div>
      <div class="form__item">
        <button @click="signIn">Войти в личный кабинет</button>
      </div>
      <RouterLink to="/register">
        <div class="form__link"><a href="#">Регистрация</a></div>
      </RouterLink>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      password: "",
      error: false
    };
  },
  methods: {
    signIn() {
      axios.post("http://clean-city/public/api/login", {
        username: this.login,
        password: this.password
      })
        .then(function(response) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.name);
          location.reload();
        })
        .catch(() => {
          this.error = true;
        });

    }
  }
};
</script>

<style>

</style>