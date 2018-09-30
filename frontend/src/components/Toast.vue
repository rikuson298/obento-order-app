<template lang="pug">
  div(id="toast")
    .toast-bg-area(v-if="isShown")
      div(class=`toast-conteinar ${isShown && 'is-hidden'}`)
        .toast-contents
          p {{text}}
        .toast-footer
          .toast-footer-btn(v-on:click="close")
            p キャンセル
          .toast-footer-btn(v-on:click="conform")
            p OK
</template>

<script>
export default {
  name: 'toast',
  props: ['isShown', 'onCloseHandler', 'onConformHandler', 'text'],
  methods: {
    close: function() {
      this.onCloseHandler()
    },
    conform: function() {
      if (this.onConformHandler) this.onConformHandler()
      this.onCloseHandler()
    },
  },
}
</script>

<style lang="scss">
#toast {
  .toast-bg-area{
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    z-index: 1001;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.is-hidden {
      display: none;
    }
  }
  .toast-conteinar {
    position: initial;
    background-color: white;
    opacity: 1;
    width: 90%;
    max-width: 450px;
    height: auto;
    z-index: 1002;
    transition: all .3s ease;
    border-radius: 4px;
    &.is-hidden {
      width: 0;
      opacity: 0;
    }
  }
  .toast-contents {
    padding: 15px;
    font-weight: bold;
  }
  .toast-footer {
    margin-top: auto;
    border-top: 1px solid gray;
    display: flex;
    font-weight: bold;
  }
  .toast-footer-btn {
    width: 50%;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &:first-child {
      border-right: 1px solid gray;
    }
  }
}
</style>