// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { compose, converge, map, mergeAll, objOf, pick, prop } from 'ramda';

import CiteThis from './CiteThis.vue';
import { VALID_TAGS } from './citer/config';

const ID = 'citation';
const observerConfig = {
  attributes: false,
  characterData: false,
  childList: true,
  subtree: true,
};

const hasElement = () => !!document.getElementById(ID);
const getAttributePairs = converge(objOf, [prop('nodeName'), prop('nodeValue')]);
const filterAcceptedAttributes = pick(VALID_TAGS);
const getRootAttributes = compose(filterAcceptedAttributes, mergeAll, map(getAttributePairs));
// eslint-disable-next-line no-new
const createApp = () => new Vue({
  // eslint-disable-next-line prefer-template
  el: '#' + ID,
  components: {
    CiteThis
  },
  render: function (createElement) {
    const attributes = getRootAttributes(this.$el.attributes);
    return createElement('CiteThis', { attrs: attributes });
  }
});
const mount = () => {
  if (hasElement()) {
    createApp();
    return true;
  }
  return false;
};

const onMutation = (mutations, observer) => {
  if (mount()) observer.disconnect();
};
const createObserver = () => new MutationObserver(onMutation);

const loadCiteThis = () => {
  if (mount()) return;
  createObserver().observe(document.body, observerConfig);
};

loadCiteThis();
