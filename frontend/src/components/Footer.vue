<template lang="pug">
  div.footer(id="footer")
    a.footer-text(href='/')
      p Obent Order App
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style lang="scss">
#footer {
  height: 80px;
  width: 100%;
  color: bisque;
  background-color: dimgray;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  .footer-text {
    margin: auto 0 20px 0;
    color:#eee;
    font-size: 14px;
  }
}
</style>