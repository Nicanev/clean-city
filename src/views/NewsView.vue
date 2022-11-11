<template>
  <div class="news">
    <div class="news__container">
      <div class="news__title">Новости компании</div>
      <ul class="news__items">
        <li class="news__item" v-for="item in news" :key="item.id">
          <router-link :to="'/news/' + item.id">
            <img :src="item.url" alt="" />
            <div class="news__date"><p>{{ item.date }}</p></div>
            <h1>
              {{ item.title }}
            </h1>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.news {
  min-height: 80rem;

  &__title {
    font-size: 6.2rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5rem;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
  }

  &__item:hover {
    img {
      filter: brightness(90%);
      transition: 1s;
      transform: scale(1.2);
    }
  }


  &__item {
    cursor: pointer;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 3rem;

    img {
      transition: 1s;
      display: block;
      width: 38rem;
      height: 25.5rem;
      filter: brightness(70%);

    }

    h1 {
      position: absolute;
      bottom: 3rem;
      color: white;
      font-size: 2rem;
      left: 2rem;
      font-weight: bold;
      width: 33rem;

    }
  }

  &__date {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 2rem;
    left: 2rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.6rem;
    background-color: white;

    p {
      font-size: 1.4rem;
      font-weight: bold;
      color: #001a34;
    }
  }
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      news: []
    };
  },
  mounted() {
    axios.get('http://clean-city/public/api/news').then(response => (this.news = response.data));
  }
};
</script>