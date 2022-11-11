<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__bg">
        <div class="hero__polygon">
          <div class="hero__polygon-block-text">
            <div class="hero__polygon-title">
              Экология
            </div>
            <div class="hero__polygon-subtitle">
              Для будующих поколений
            </div>
            <div class="hero__polygon-text">
              ГК "ЧИСТЫЙ ГОРОД" — один из крупнейших операторов сферы обращения с отходами на территории РФ. Работает в
              данной отрасли 16 лет, специализируясь на организации полного цикла работ по обращению с отходами.
            </div>
          </div>
        </div>
        <div class="hero__img"><img src="@/assets/img/backgrounds/view.png" alt=""></div>
        <div class="hero__sub">
          <ul>
            <li>
              <div class="hero__sub-title">16+ лет</div>
              <div class="hero__sub-text">реализации успешных
                проектов
              </div>
            </li>
            <li>
              <div class="hero__sub-title">6+</div>
              <div class="hero__sub-text">субъектов РФ обслуживаются
                нашей компанией
              </div>
            </li>
            <li>
              <div class="hero__sub-title">150+</div>
              <div class="hero__sub-text">Успешно реализованых
                проектов
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>

<style scoped lang="scss">
.hero {
  margin-top: 2rem;
  margin-bottom: 20rem;
  height: 90rem;

  &__polygon-block-text {
    margin-top: 8.7rem;
    padding-left: 4rem;
  }

  &__polygon-title {
    font-size: 3.2rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }

  &__polygon-subtitle {
    margin-top: 1rem;
    font-size: 2rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__polygon-text {
    margin-top: 2.5rem;
    color: white;
    width: 35rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  &__sub {
    display: flex;
    position: absolute;
    bottom: -8rem;
    right: 4rem;
    justify-content: end;

    ul {
      display: flex;
      gap: 12rem;
    }
  }

  &__sub-title {
    color: #33CCFD;
    font-weight: bold;
    font-size: 6.2rem;
    padding-bottom: 1.2rem;
  }

  &__sub-text {
    font-size: 2.1rem;
    color: #474747;
    max-width: 25rem;
    position: relative;
  }

  &__sub-text::after {
    position: absolute;
    left: 0;
    top: -1rem;
    content: "";
    width: 100%;
    height: 0.1rem;
    background-color: #d4dbee;
  }

  &__bg {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__polygon {
    height: 81rem;
    width: 47.8rem;
    background-color: #87c879;
    clip-path: polygon(0% 0%, 100% 11%, 100% 89%, 0% 100%);
    position: relative;
    z-index: 5;
  }

  &__img {
    margin-left: -10px;
    position: relative;
    z-index: 1;

    img {
      width: 138.3rem;
      height: 63rem;
    }
  }
}
</style>