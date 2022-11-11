<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left-side">
        <RouterLink to="/"><a href="#">
          <img src="@/assets/img/logo.svg" alt="logo" class="header__logo" />
        </a></RouterLink>
        <ul class="header__menu">
          <li>
            <RouterLink to="/about"><a href="#">О нас</a></RouterLink>
          </li>
          <li>
            <RouterLink to="/services"><a href="#">Услуги</a></RouterLink>
          </li>
          <li>
            <RouterLink to="/news"><a href="#">Новости</a></RouterLink>
          </li>
          <li>
            <RouterLink to="/contact"><a href="#">Контакты</a></RouterLink>
          </li>
        </ul>
      </div>
      <div class="header__right-side">
        <a href="#">
          <RouterLink to="login">
            <div class="header__profile">
              <img src="@/assets/img/icons/user.png" alt="avatar">
              {{ name }}
            </div>
          </RouterLink>
        </a>
      </div>
    </div>
  </header>
</template>

<script>


import axios from "axios";

export default {
  name: "TheHeader",
  data() {
    return {
      name: "Войти"
    };
  },
  methods: {
    getName() {
      let token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      axios.get(
        "http://clean-city/public/api/getName",
        config
      ).then(response => {
        this.name = response.data;
        localStorage.setItem("user", response.data);
      })
        .catch(function(error) {
          console.log(error);
        });

    }
  },
  mounted() {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("user")) {
        this.name = localStorage.getItem("user");
      }
    }

  }
};
</script>

<style scoped lang="scss">
.header {
  &__container {
    display: flex;
    justify-content: space-between;
    height: 9rem;
    align-items: center;
  }

  &__left-side {
    display: flex;
    gap: 4.4rem;
  }

  &__menu {
    display: flex;
    gap: 2.3rem;
    font-size: 1.6rem;
    align-items: center;
    a:hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  &__logo {
    width: 11.5rem;
    height: 4rem;
  }

  &__profile {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.6rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  &__profile:hover {
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
