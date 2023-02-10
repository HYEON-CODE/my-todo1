// app.vue
<template>
  <div id="app">
    <tool-bar></tool-bar> <!-- 메뉴 -->
    <router-view></router-view> <!-- 컨텐츠 -->
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  data() {
    return {}
  },
  components: {ToolBar}
}
</script>

<style>
body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
a {color: black;}
* {margin:0; padding:0}
li {list-style-type: none;}
p + p {margin-top:20px}
#app {padding:0 20px}
.content {padding:30px 20px}

.list li {padding-left:10px; list-style-type: none}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li > b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
</style>