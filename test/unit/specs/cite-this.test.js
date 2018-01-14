/* global describe, expect, jest, it, beforeAll */

import { compose, join, map } from 'ramda';
import { loadCiteThis } from '../../../src/cite-this';
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

describe('cite-this', () => {
  it('loadCiteThis mounts a single widget by class, when only one cite-this target present', () => {
    document.body.innerHTML = getTemplate();

    expect(document.getElementsByClassName('cite-this').length).toBe(1);

    loadCiteThis();

    // cite-this element has been replaced
    expect(document.getElementsByClassName('cite-this').length).toBe(0);
  });

  it('loadCiteThis mounts multiple widgets with unique ids', () => {
    document.body.innerHTML = getTemplate(['id1', 'id2']);

    expect(document.getElementsByClassName('cite-this').length).toBe(2);

    loadCiteThis();

    // cite-this element has been replaced
    expect(document.getElementsByClassName('cite-this').length).toBe(0);
  });

  it('throws error multiple cite-this targets present without unique ids', () => {
    document.body.innerHTML = getCiteTemplate() + getCiteTemplate();
    expect(document.getElementsByClassName('cite-this').length).toBe(2);
    const consoleErrorSpy = jest.spyOn(console, 'error');

    loadCiteThis();

    // cite-this element has been replaced
    expect(document.getElementsByClassName('cite-this').length).toBe(2);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('if anchors are not present on loadCiteThis observes for element', () => {
    const mockMutationObserver = getMockMutationObserver();
    document.body.innerHTML = getEmptyList();
    loadCiteThis(() => mockMutationObserver);

    expect(mockMutationObserver.observe).toHaveBeenCalled();
  });

  it('disconnects observer when an element is mounted', () => {
    const mockMutationObserver = getMockMutationObserver();
    const mockObserverFactory = jest.fn(() => mockMutationObserver);

    document.body.innerHTML = getEmptyList();
    loadCiteThis(mockObserverFactory);

    expect(mockMutationObserver.observe).toHaveBeenCalled();
    const callback = mockObserverFactory.mock.calls[0][0];

    callback([], mockMutationObserver);

    expect(mockMutationObserver.disconnect).not.toHaveBeenCalled();

    document.getElementById('list').innerHTML = getCiteTemplate();

    expect(document.getElementsByClassName('cite-this').length).toBe(1);

    callback([], mockMutationObserver);

    expect(mockMutationObserver.disconnect).toHaveBeenCalled();
    expect(document.getElementsByClassName('cite-this').length).toBe(0);
  });
});

