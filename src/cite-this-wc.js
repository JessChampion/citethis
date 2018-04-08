// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import CiteThis from './CiteThis';

const NAME = 'cite-this';

const init = (_window = window) => {
  const CiteThisElement = wrap(Vue, CiteThis);
  if (!_window.customElements.get(NAME)) {
    _window.customElements.define(NAME, CiteThisElement);
    console.log(_window.customElements.get(NAME));
  }
};

init();

export default init();
