// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { compose, converge, forEach, isEmpty, map, mergeAll, none, objOf, pick, prop } from 'ramda';

import CiteThis from './CiteThis.vue';

import { VALID_TAGS } from './citer/config';

const TARGET_CLASS = 'cite-this';
const observerConfig = {
  attributes: false,
  characterData: false,
  childList: true,
  subtree: true
};

const filterAcceptedAttributes = pick([...VALID_TAGS, 'label']);
const getAttributePairs = converge(objOf, [prop('nodeName'), prop('nodeValue')]);
const getRootAttributes = compose(filterAcceptedAttributes, mergeAll, map(getAttributePairs));

const createApp = selector => new Vue({ // eslint-disable-line no-new
  el: selector,
  components: {
    CiteThis
  },
  render: function (createElement) {
    const attributes = getRootAttributes(this.$el.attributes);
    return createElement('CiteThis', { attrs: attributes });
  }
});

const mountByClass = () => createApp(`.${TARGET_CLASS}`);
const mountByID = ID => createApp(`#${ID}`);
const mountElements = forEach(mountByID);

const getIDsForElements = map(ele => ele.id);
const hasValidIds = none(isEmpty);

const getAnchorElements = () => [...document.getElementsByClassName(TARGET_CLASS)];

const mount = () => {
  const elements = getAnchorElements();
  if (!elements || elements.length <= 0) {
    return false;
  }
  if (elements.length === 1) {
    mountByClass();
  }
  if (elements.length > 1) {
    const ids = getIDsForElements(elements);
    if (!hasValidIds(ids)) {
      // eslint-disable-next-line no-console
      console.error('cite-this: To have multiple citation widgets on a page, each must have a unique ID.');
      return true;// to stop observing for mounted elements
    }
    mountElements(ids);
  }
  return true;
};

const onMutation = (mutations, observer) => {
  if (mount()) observer.disconnect();
};
const observerFactory = (callback) => new MutationObserver(callback);

export const loadCiteThis = (createObserver = observerFactory) => {
  if (mount()) return;
  createObserver(onMutation).observe(document.body, observerConfig);
};

// call on init
loadCiteThis();
