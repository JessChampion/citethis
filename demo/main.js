// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import DemoApp from './DemoApp';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { DemoApp },
  template: '<DemoApp/>',
});
