/* eslint-disable no-console */
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { compose, converge, map, mergeAll, objOf, pick, prop } from 'ramda';

import CiteThis from './CiteThis';
import { VALID_TAGS } from './citer/config';

const ID = 'citation';
const getAttributePairs = converge(objOf, [prop('nodeName'), prop('nodeValue')]);
const filterAcceptedAttributes = pick(VALID_TAGS);
const getRootAttributes = compose(filterAcceptedAttributes, mergeAll, map(getAttributePairs));

const loading = () => {
  console.debug('loading cite-this...');
  if (document.getElementById(ID)) { // target element exists
    // eslint-disable-next-line no-new
    new Vue({
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
    console.debug('loaded cite-this');
    return;
  }
  // try again shortly
  setTimeout(loading, 5000);
};

loading();

export default CiteThis;