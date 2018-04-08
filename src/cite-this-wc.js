// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import CiteThis from './CiteThis';

const init = (_window = window) => {
  const CiteThisElement = wrap(Vue, CiteThis);

  _window.customElements.define('cite-this', CiteThisElement);
};

init();
