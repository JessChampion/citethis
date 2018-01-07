import Vue from 'vue';
import DemoApp from './DemoApp';
import CiteThisVueComponent from '../src/CiteThisVueComponent';

Vue.config.productionTip = false;

Vue.use(CiteThisVueComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { DemoApp },
  template: '<DemoApp/>',
});