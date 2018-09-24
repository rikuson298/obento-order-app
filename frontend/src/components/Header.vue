<template lang="pug">
  div.header(id="header")
    a.header-text(href='/')
      img.header-logo(alt="hiyoko" src=".././assets/hiyoko.png")
      p Obent Order App
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: bisque;
  color: dimgray;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.header {
  .header-text {
    color: dimgray;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .header-logo {
    height: 40px;
    width: auto;
    margin: 0 10px;
  }
}
</style>