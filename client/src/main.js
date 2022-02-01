import Vue from 'vue'
import App from './App.vue'
import router from './router'
import excel from 'vue-excel-export'

Vue.config.productionTip = false
Vue.use(excel);
document.title = "Информация по объектам титульного строительства"


// Регистрируем глобальную пользовательскую директиву `v-afocus`
Vue.directive("afocus", {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el) {
    // Переключаем фокус на элемент
    el.focus();
    // el.select();
  }
})//Vd
// Регистрируем глобальную пользовательскую директиву `v-mfocus`
Vue.directive("mfocus", {
  inserted:
    // Переключаем фокус на элемент и выделяем при наведении (при v-mfocus:select)
    (el, binding) => el.onmouseover = () => {
      el.focus();
      binding.arg=="select" && el.select();
    }
})//Vd

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
