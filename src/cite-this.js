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
        console.log('rendering');
        console.log(getRootAttributes(this.$el.attributes));
        const props = {
          attrs: {
            author: 'author',
            title: 'title',
            type: 'MISC',
            year: 2017
          }
        };

        // return createElement('CiteThis', {}, props);
        return createElement('CiteThis', props);
      }
    });
    console.debug('loaded cite-this');
  } else {
    // try again shortly
    window.requestAnimationFrame(loading);
  }
};

loading();
