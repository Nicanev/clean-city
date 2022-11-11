<template>
  <section class="services">
    <div class="services__container">
      <div class="services__title">
        НАШИ УСЛУГИ
      </div>
      <ul class="services__list">
        <li><img src="@/assets/img/services/recycle.png" alt="" class="services__img">
          <div class="services__text"><h1>Аренда оборудования</h1>
            Предоставляем тару для сбора твердых коммунальных отходов
          </div>
        </li>
        <li><img src="@/assets/img/services/bottle.png" alt="" class="services__img">
          <div class="services__text"><h1>Вторичное сырье</h1> Приобретение/реализация и вовлечение во вторичный оборот
          </div>
        </li>
        <li><img src="@/assets/img/services/utilization.png" alt="" class="services__img">
          <div class="services__text">
            <h1>Утилизация отходов</h1>
            Транспортирование, обработка, обезвреживание, утилизация, размещение отходов
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection"
};
</script>

<style scoped lang="scss">
.services {
  margin-bottom: 17rem;
  &__title {
    font-size: 8.2rem;
    font-weight: bold;
    margin-bottom: 4.5rem;
  }

  &__list {
    display: flex;
    gap: 3rem;

    li {
      position: relative;
      z-index: 1;
      cursor: pointer;
    }
  }

  &__img {
    width: 44rem;
    height: 35.5rem;
    filter: brightness(50%);

  }

  &__text {
    position: absolute;
    color: white;
    z-index: 3;
    top: 4rem;
    left: 2rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 1.7rem;
    }
  }
}
</style>