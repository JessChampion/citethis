/* global describe, expect, jest, it, beforeAll */
import { compose, join, map } from 'ramda';
import * as webComponentWrapper from '@vue/web-component-wrapper';

import { TYPES } from '../../../src/citer/config';
import initCiteThis from '../../../src/cite-this-wc';
import CiteThis from '../../../src/CiteThis';

const defaultProps = {
  label: '\'CITE THIS\'',
  author: 'Test Author',
  title: 'Test Title',
  type: TYPES.MISC,
  year: '2017'
};

const getCiteTemplate = (id, props = defaultProps) => {
  const classAttr = id ? `class="${id}" ` : '';
  return '<cite-this ' +
    `${classAttr}` +
    `label="${props.label}" ` +
    `author=${props.author} ` +
    `title=${props.title} ` +
    `type=${props.type} ` +
    `year=${props.year}></div>`;
};

const getTemplate = () => {
  return `<div id="list">${getCiteTemplate()}</div>`;
};

const getMockCustomElements = () => ({
  define: jest.fn(),
  get: jest.fn()
});

const setup = () => {
  document.body.innerHTML = getTemplate();
  const mockCustomElements = getMockCustomElements();
  global.window.customElements = mockCustomElements;
  global.window.customElements.get.mockClear();
  global.window.customElements.define.mockClear();
  return mockCustomElements;
};

describe('cite-this-wc', () => {
  it('wraps the CiteThis Vue component in the web component wrapper', () => {
    setup();
    const wrapSpy = jest.spyOn(webComponentWrapper, 'default');

    expect(wrapSpy).not.toHaveBeenCalled();

    initCiteThis();

    expect(wrapSpy).toHaveBeenCalledWith(expect.any(Function), CiteThis);
  });

  it('adds the wrapped component to windows custom elements list', () => {
    const mockCustomElements = setup();

    expect(mockCustomElements.get).not.toHaveBeenCalled();
    expect(mockCustomElements.define).not.toHaveBeenCalled();

    initCiteThis();

    expect(mockCustomElements.get).toHaveBeenCalledWith('cite-this');
    expect(mockCustomElements.define).toHaveBeenCalledWith('cite-this', expect.any(Function));
  });
});

