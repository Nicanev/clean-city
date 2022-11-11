<template>
  <div class="profile">
    <div v-if="isOpenPopUp" class="profile__pop-up pop-up">
      <div class="pop-up__cover" @click="closePopUp"></div>
      <div class="pop-up__body">
        <div class="pop-up__title">Оставить жалобу</div>
        <div class="pop-up__subtitle">
          Выберите причину и введите ниже адрес, по которому хотите оставить жалобу. Мы вышлем вам ответ на почту.
        </div>
        <form onsubmit="return false;" class="pop-up__form">
          <select name="reason" id="reason" v-model="reason" required>
            <option value="" disabled>Выберите причину</option>
            <option value="Вынос мусора" >Вынос мусора</option>
            <option value="Переработка мусора">Переработка мусора</option>
          </select>
          <input type="text" v-model="address" placeholder="Введите адрес (необязательно)">
          <input type="text" v-model="title" placeholder="Заголовок" required>
          <textarea name="complaint" id="complaint" v-model="text" cols="30" rows="5" maxlength="255" placeholder="Ваша жалоба"
                    required></textarea>
          <div class="pop-up__buttons">
            <button class="pop-up__ok" @click="sendComplaint">Отправить</button>
            <button class="pop-up__cancel" @click="closePopUp">Отменить</button>
          </div>
        </form>

      </div>
    </div>
    <div class="profile__container">
      <div class="profile__title">Личный кабинет</div>
      <div class="profile__body">
        <div class="profile__left-side">
          <div class="profile__avatar">
            <img src="@/assets/img/icons/user.svg" alt="avatar">
          </div>
          <div class="profile__info">
            <div class="profile__name">{{ name }}</div>
            <div class="profile__status">Клиент</div>
          </div>
        </div>
        <div class="profile__right-side">
          <button class="profile__exit" @click="logout">Выйти</button>
        </div>
      </div>
      <div class="profile__subtitle">Заявки</div>
      <ul class="profile__services">
        <li @click="openPopUp">
          <img src="@/assets/img/icons/pencil.svg" alt="">
          <div>
            <h1>Оставить жалобу</h1>
            <p>
              Вы можете оставить жалобу на работу наших служб (вывоз мусора,
              переработка и т.д.)
            </p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">
.pop-up {
  &__buttons {
    display: flex;
    justify-content: space-between;

    button {
      font-size: 1.6rem;
      border-radius: 0.6rem;

      padding: 0.9rem 2.5rem;
    }
  }

  &__ok {
    color: white;
    background-color: #499bfc;
  }

  &__cover {
    position: absolute;
    z-index: 99;
    height: 200vh;
    opacity: 60%;
    background-color: gray;
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  position: fixed;
  z-index: 2;
  //top: 50%;
  &__body {
    position: relative;
    z-index: 100;
    padding: 1.5rem 2rem;
    background-color: white;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    width: 50rem
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    textarea {
      padding-top: 1rem;
      resize: none;
      border: 0.1rem solid rgb(175, 175, 175);
      text-indent: 1rem;
      outline: none;
      font-size: 1.6rem;
      border-radius: 0.5rem;
    }

    select {
      height: 5rem;
      border: 0.1rem solid rgb(175, 175, 175);
      border-radius: 0.5rem;
      min-width: 30rem;
      font-size: 1.6rem;
      text-indent: 1rem;
      outline: none;
    }

    input {
      height: 5rem;
      border: 0.1rem solid rgb(175, 175, 175);
      text-indent: 1rem;
      font-size: 1.6rem;
      border-radius: 0.5rem;
      min-width: 30rem;

    }

  }

  &__title {
    font-size: 2rem;
    font-weight: bold;
  }

  &__subtitle {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: gray;
  }
}

.profile {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 30rem;

  &__services {
    li {
      padding: 1.5rem 1rem;
      width: max-content;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      border: 0.1rem solid #b0aeae;
      cursor: pointer;
    }

    li:hover {
      background-color: #f6f6f6;
      transition: 0.2s;
    }

    img {
      width: 2rem;
      height: 2rem;
    }

    h1 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    p {
      width: 25rem;
    }
  }

  &__title {
    font-size: 3.2rem;
    font-weight: bold;

  }

  &__body {
    margin-top: 2rem;
    padding: 2.5rem 3rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__avatar {
    img {
      height: 16rem;
      width: 16rem;
    }
  }

  &__left-side {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  &__name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &__status {
    font-size: 1.6rem;
    color: gray;
  }

  &__exit {
    background-color: #499bfc;
    color: white;
    padding: 1.1rem 3.5rem;
    border-radius: 0.6rem;
    font-size: 1.6rem;
  }

  &__subtitle {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}

</style>

<script>
import router from "@/router";
import axios from "axios";

export default {
  data() {
    return {
      name: "User",
      isOpenPopUp: false,
      reason: "",
      text: "",
      title: "",
      address: ""
    };
  },
  methods: {
    openPopUp() {
      this.isOpenPopUp = true;
    },
    closePopUp() {
      this.isOpenPopUp = false;
    },
    logout() {
      localStorage.clear();
      location.reload();
    },
    sendComplaint() {
      let token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const data = {
        complaint: {
          reason: this.reason,
          text: this.text,
          title: this.title,
          address: this.address
        }
      }

      axios.post("http://clean-city/public/api/createComplaint", data, config)
        .then(response => console.log(response));
    }
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    if (localStorage.getItem("user")) {
      this.name = localStorage.getItem("user");
    }
  }
};
</script>