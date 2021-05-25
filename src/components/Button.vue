<template>
  <button :class="[$style.btn]" @click="onBtnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onBtnClicked() {
      this.$emit("mySuperEvent");
    },
  },
};
</script>

<style module lang="scss">
.btn {
  padding: 4px 12px;
  outline: none;
  border-radius: 4px;
  color: #fff;
  background: rgb(32, 123, 27);
  cursor: pointer;

  &:hover {
    background: rgb(36, 123, 85);
  }
}
</style>