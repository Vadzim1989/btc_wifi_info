<template>
  <div id="app">
    <div class="header">
      <h1>Информация по объектам титульного строительства. XPON</h1>
    </div>
    <div class="main">
      <Navigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TitulsPage from './views/TitulInfo.vue';
  import Navigation from '@/components/Navigation';
  export default {
    name: 'App',
    components: {
      TitulsPage,
      Navigation
    }
  }
</script>

<style>
body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-y: hidden;
  background-color: #dbf1ff;
}
#app {
  display: flex;
  flex-flow: column nowrap;
}
.main {
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 10%;
}
.header{
  text-align: center;
}
</style>
