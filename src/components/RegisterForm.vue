<template>
  <div class="auth__body">
    <div class="auth__title">Регистрация</div>
    <div v-if="error" class="error">
      Данные введены не верно!
    </div>
    <form onsubmit="return false;" class="auth__form form">
      <div class="form__item">
        <input type="text" v-model="email" required>
        <label>Почта</label>
      </div>
      <div class="form__item">
        <input type="text" v-model="login" required>
        <label>Логин</label>
      </div>
      <div class="form__item">
        <input type="text" v-model="first_name" required>
        <label>Имя</label>
      </div>
      <div class="form__item">
        <input type="text" v-model="last_name" required>
        <label>Фамилия</label>
      </div>
      <div class="form__item">
        <input type="password" v-model="password" required>
        <label>Пароль</label>
      </div>
      <div class="form__item">
        <button @click="register">Зарегистрироваться</button>
      </div>
      <RouterLink to="/login">
        <div class="form__link"><a href="#">Войти</a></div>
      </RouterLink>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "RegisterForm",
  data() {
    return {
      login: "",
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      error: false
    };
  },
  methods: {
    register() {
      axios.post("http://clean-city/public/api/register", {
        login: this.login,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        email: this.email
      })
        .then(function() {
          router.push("/login");
        }).catch(() => {
          this.error = true;
      });
    }
  }
};
</script>

<style scoped>

</style>