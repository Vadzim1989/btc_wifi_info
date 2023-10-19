<template>
  <div id="app">
    <div class="tooltip">@D
      <span class="tooltiptext">Вадим Денисовский, инженер-программист ИВЦ</span>
    </div>
    <div class="header">
      <h1>Автоматизированный процес сбора информации по точкам <span class="wifi">Wi-Fi</span></h1>
    </div>
    <div class="main">
      <Navigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import WifiPage from './views/WifiInfo.vue';
  import Navigation from '@/components/Navigation';
  export default {
    name: 'App',
    data() {
      return {
        cities: {
          all: 'Гомельский филиал',
          gomel: 'Гомель',
          vetka: 'Ветка',
          chechersk: 'Чечерск',
          dobrush: 'Добруш',
          jlobin: 'Жлобин',
          buda: 'Буда-Кошелево',
          korma: 'Корма',
          rogachev: 'Рогачев',
          rechica: 'Речица',
          svetlogorsk: 'Светлогорск',
          bragin: 'Брагин',
          kalinkovichi: 'Калинковичи',
          hoiniki: 'Хойники',
          loev: 'Лоев',
          petrikov: 'Петриков',
          mozir: 'Мозырь',
          jitkovichi: 'Житковичи',
          elsk: 'Ельск',
          narovlya: 'Наровля',
          lelchici: 'Лельчицы',
          october: 'Октябрьский',
          gomelzues: 'Гомельский'
        }
      }
    },
    components: {
      WifiPage,
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
  background-color: #dbffde;
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
  font-size: .8rem;
  margin-top: -1.3%;
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

.wifi {  
  font-family: 'Rubik One', sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  background: #2E2F45;
  margin: 20px auto;
  color: white;
  border-radius: 5px;
  mix-blend-mode: multiply;
  padding: 5px 10px;
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
