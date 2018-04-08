/* global describe, expect, jest, it, beforeAll */

import { compose, join, map } from 'ramda';
import { TYPES } from '../../../src/citer/config';

const defaultProps = {
  label: '\'CITE THIS\'',
  author: 'Test Author',
  title: 'Test Title',
  type: TYPES.MISC,
  year: '2017'
};

const getCiteTemplate = (id, props = defaultProps) => {
  const idAttr = id ? `id="${id}" ` : '';
  return '<div class="cite-this" ' +
    `${idAttr}` +
    `label="${props.label}" ` +
    `author=${props.author} ` +
    `title=${props.title} ` +
    `type=${props.type} ` +
    `year=${props.year}></div>`;
};

const getCiteTemplateForIds = compose(join(''), map(getCiteTemplate));
const getEmptyList = () => '<div id="list"></div>';
const getTemplate = (ids = []) => {
  const content = ids.length === 0 ? getCiteTemplate() : getCiteTemplateForIds(ids);
  return `<div id="list">${content}</div>`;
};

const getMockMutationObserver = () => ({
  disconnect: jest.fn(),
  observe: jest.fn()
});

describe('cite-this-wc', () => {
  it('wraps the CiteThis Vue component in the web component wrapper', () => {

  });

  it('adds the wrapped component to windows custom elements list', () => {

  });

  it('loads multiple cite-this elements without unique ids', () => {

  });
});

