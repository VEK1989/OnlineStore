<template>
  <div :class="[$style.wrapper]">
    <img src="#" alt="" width="180px" height="220px" />
    <div :class="[$style.name]">{{ currentItem.name }}</div>
    <div :class="[$style.price]">{{ currentItem.price }}</div>
    <Button @mySuperEvent="onBtnClick">В корзину</Button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters("goods", ["getData"]),
    currentItem() {
      return this.getData[this.id] || {};
    },
  },
  methods: {
    ...mapActions("goods", ["addInBasket"]),
    onBtnClick() {
      this.addInBasket(this.id);
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eeeeeed7;
  margin: 10px;
  border-radius: 3px;
  min-width: 200px;
  padding: 20px;
}

.name,
.price {
  color: black;
  padding: 4px;
}
</style>