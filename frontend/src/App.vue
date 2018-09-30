<template lang="pug">
  div(id="app")
    Header
    .conteinar
      router-view
    Footer
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: dimgray;
}
.page-title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  margin: 20px 0;
}
.form-label {
  font-size: 13px;
  font-weight: bold;
  padding: 5px;
  border-left: 4px solid gray;
  margin: 15px 0;
}
.form-input {
  width: 100%;
  height: 30px;
  font-size: 13px;
}
.conteinar {
  margin-top: 50px;
  width: 100%;
  min-height: 400px;
  background-color: white
}
@media screen and (min-width: 768px) {
  .conteinar {
    max-width: 1170px;
    min-height: 700px;
    margin: 70px auto 20px auto;
  }
}
$iconColor: orange;
input[type=radio], input[type=checkbox] {
  display: none;
}
.radio, .checkbox {
  box-sizing: border-box;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  position: relative;
  display: inline-block;
  padding: 12px 12px 12px 46px;
  border-radius: 4px;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background-color: #fff6e6;
    &:after {
      border-color: $iconColor;
    }
  }
  &:after {
    -webkit-transition: border-color 0.2s linear;
    transition: border-color 0.2s linear;
    position: absolute;
    top: 23%;
    left: 15px;
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid #bbb;
    border-radius: 4px;
    content: '';
  }
  &.is-small {
    padding: 10px 10px 10px 36px;
    &:after {
      top: 25%;
      left: 11px;
      width: 15px;
      height: 15px;
    }
  }
}
.radio {
  &:before {
    -webkit-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
    position: absolute;
    top: 50%;
    left: 20px;
    display: block;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $iconColor;
    content: '';
    opacity: 0;
    input[type=radio]:checked + & {
      opacity: 1;
    }
  }
}
.checkbox {
  &:before {
    -webkit-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
    position: absolute;
    top: 29%;
    left: 22px;
    display: block;
    width: 7px;
    height: 12px;
    border-right: 3px solid $iconColor;
    border-bottom: 3px solid $iconColor;
    content: '';
    opacity: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    input[type=checkbox]:checked + & {
      opacity: 1;
    }
  }
  &.is-small {
    &:before {
      top: 29%;
      left: 17px;
      width: 5px;
      height: 9px;
    }
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
