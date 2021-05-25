<template>
  <div :class="[$style.conteiner]">
    <header :class="[$style.header]">
      <div :class="[$style.header__logo]">First shop</div>
      <Basket />
    </header>
    <main :class="[$style.main]">
      <h1 :class="[$style.main__header]">Список товаров:</h1>
      <div :class="[$style.main__list]">
        <Item v-for="id in getItemOnPage" :key="id" :id="id" />
      </div>
    </main>
    <footer :class="[$style.footer]">
      <div :class="[$style.footer__social]">Мы в соцсетях</div>
      <span :class="[$style.footer__copyright]">&copy;Copyright</span>
    </footer>
  </div>
</template>

<script>
import Basket from "./components/Basket.vue";
import Item from "./components/Item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Basket,
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    ...mapActions("goods", ["requestData"]),
  },
  computed: {
    ...mapGetters("goods", ["getItemOnPage"]),
  },
  mounted() {
    this.requestData(1);
  },
};
</script>

<style module lang="scss">
:global(*) {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

.conteiner {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  background-color: rgb(36, 224, 58);
  flex: 0 0 auto;

  &__logo {
    color: #111;
  }
}

.main {
  padding: 10px;
  align-items: center;
  flex: 1 0 auto;

  &__header {
    color: rgb(171, 218, 31);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.footer {
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  background-color: rgb(36, 224, 58);
  flex: 0 0 auto;

  &__social {
  }
}
</style>