// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import CiteThis from './CiteThis';

// eslint-disable-next-line no-new
new Vue({
  el: '#citation',
  components: { CiteThis },
  render: function (createElement, context) {
    console.log('Render');
    console.log(context.props);
    return createElement('div', context.data, context.children);
  }
});
