<template>
  <div class="auth">
    <div class="auth__container">
      <LoginForm v-if="this.$route.name === 'login'" />
      <RegisterForm v-if="this.$route.name === 'register'" />
    </div>
  </div>
</template>

<style lang="scss">
.error {
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  background-color: #f8d7da;
  border: 0.1rem solid #f5c6cb;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  color: #721c24;
}
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 25rem;
  &__body {
    width: 42.6rem;
    padding: 2rem 4rem 4rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
  }
  &__title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 3.2rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    input {
      width: 100%;
      height: 5rem;
      text-indent: 1rem;
      font-size: 1.6rem;
      border: 0.1rem solid rgb(175, 175, 175);
      border-radius: 0.5rem;
      transition: 0.2s;
    }
    input:hover {
      border: 0.2rem solid #87c879;
      transition: .2s;
    }
    input:focus {
      border: 0.2rem solid #87c879;
    }
    &__item {
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
    button {
      width: 100%;
      background-color: #87c879;
      height: 4.8rem;
      border-radius: 1rem;
      text-align: center;
      font-size: 1.6rem;
      color: white;
      font-weight: bold;
      transition: 0.2s;
    }
    button:hover {
      background-color: #7ab46c;
    }
    &__link {
      text-align: center;
      a {
        color: #6195ee;
        font-size: 1.6rem;
      }
    }
    label {
      position: absolute;
      pointer-events: none;
      left: 1.5rem;
      right: 1.5rem;
      top: 0;
      white-space: nowrap;
      overflow: hidden;
      line-height: 5rem;
      font-size: 1.6rem;
      transition: 0.3s;
      color: gray;
    }
    input:focus~label,
    input:not(:focus):valid~label {
      top: -1.5rem;
      font-size: 1rem;
    }
  }
}
</style>
<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import router from "@/router";

export default {
  components: { RegisterForm, LoginForm },
  mounted() {
    if (localStorage.getItem("token")) {
      router.push('/profile');
    }
  }
};
</script>