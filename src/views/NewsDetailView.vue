<template>
  <div class="news-info">
    <div class="news-info__container">
      <div class="news-info__title">
        <h1>{{ news.title }}</h1>
      </div>
      <div class="news-info__date">{{ news.date }}</div>
      <div class="news-info__des">
        {{ news.description }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      news: {}
    };
  },
  mounted() {
    axios.get('http://clean-city/public/api/news/' + this.$route.params.id).then(response => (this.news = response.data));
  }
};
</script>

<style lang="scss">
.news-info {
  margin-top: 5rem;
  min-height: 70rem;
  &__title {
    h1 {
      margin: 0 auto;
      font-size: 3.8rem;
      font-weight: bold;
      text-align: center;
      width: 100rem;
    }
  }
  &__date {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    color: #707f8d;
    text-transform: uppercase;
  }
  &__des {
    font-size: 2rem;
  }

}
</style>