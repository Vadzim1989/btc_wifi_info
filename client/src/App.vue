<template>
  <div id="app">
    <div class="tooltip">@D
      <span class="tooltiptext">Вадим Денисовский, инженер-программист ИВЦ</span>
    </div>
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
  flex-flow: row nowrap;
  position: absolute;
  top: 10%;
}
.header{
  text-align: center;
  font-size: 1rem;
}

.tooltip {
    position: relative;
    display: inline-block;
    font-size: .5rem;
    padding: .2%;
    width: 5%;
    font-weight: bold;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 100%;
    background-color: #b0e1e7;
    color: #000000;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    font-size: .8rem;
    font-weight: 400;
    position: absolute;
    z-index: 1;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

@media screen and (max-width:1100px) {
    body {
      overflow: auto;
    }
    .main {
      flex-flow: column wrap;
    }
    .nav {
      width: 92vw;
      margin: 0;
      padding: 0;
    }
    .nav li {
      display: inline-block;
      border: none;
    }
    .nav li a {
      border: none;
      margin-left: 2rem;
      padding: 0;
    }
    .nav li a:hover {
      font-weight: normal;
    }
    .table_wrapper {
      margin-left: 3%;
      width: 92vw;
      height: 55vh;
      flex: 1 1 5%;
      overflow: hidden;
    }
    .btn_excel {
      max-width: 2.5%;
    }
}
</style>
