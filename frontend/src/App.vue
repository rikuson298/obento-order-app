<template lang="pug">
  div(id="app")
    Header
    .conteinar
      OrderList
    Footer
</template>

<script>
import OrderList from './components/OrderList.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    OrderList,
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: dimgray;
}
.conteinar {
  margin-top: 50px;
  width: 100%;
  min-height: 400px;
  background-color: white
}
@media screen and (min-width: 768px) {
  .conteinar {
    width: 1170px;
    min-height: 700px;
    margin: 70px auto 20px auto;
  }
}
/* reset CSS */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  background-color: #eee
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  outline: none;
}
a:hover {
  opacity: 0.8;
  filter: alpha(opacity=80);
}
a img {
  border: none;
  opacity: 1; 
}
a img:hover {
  opacity: 0.8;
  filter: alpha(opacity=80);
}
</style>
