<template>
  <dir>
    <router-view/>
    <div class="black-background"></div>
  </dir>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@font-face {
  font-family: BrandFont;
  src: url('assets/Lalezar-Regular.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  direction: rtl;
  background-color: #f3f4f6;
  overflow-x: hidden;
}
.footer-brand{
  font-family: BrandFont;
  font-size: 51px !important;
}
header {
  font-family: BrandFont;
  font-size: 51px !important;
}
.black-background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.356);
    z-index: 20;
    display: none;
}
.bg-gray-900{
  z-index: 5 !important;
  background-color: #0000009c !important;
}
</style>
