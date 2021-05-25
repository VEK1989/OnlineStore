<template>
  <div :class="[$style.wrapper]">
    <Button @mySuperEvent="onBasketClick">Корзина</Button>
    <div :class="[$style.list]" v-if="opened">
      <div :class="[$style.empty]" v-if="!getItemInBasket.length">
        Список пуст
      </div>
      <div v-for="(id, index) in getItemInBasket" :key="id + `${index}`">
        {{ getData[id].name }} x {{ getData[id].price }}
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Button,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    onBasketClick() {
      this.opened = !this.opened;
    },
  },
  computed: {
    ...mapGetters("goods", ["getData", "getItemInBasket"]),
  },
};
</script>

<style module lang="scss">
.wrapper {
  position: relative;
}
.list {
  background-color: rgb(9, 255, 79);
  position: absolute;
  min-width: 100px;
  border: 1px solid black;
  top: 38px;
  right: 0;
}

.empty {
  background-color: rgb(9, 255, 79);
  position: absolute;
  min-width: 100px;
  border: 1px solid black;
  top: 0px;
  right: 0;
}
</style>