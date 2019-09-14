/* global describe, expect, jest, it */
import { merge } from 'ramda';
import { mount } from '@vue/test-utils';

import { FORMATS, TYPES } from '../../../src/citer/config';
import CiteThis from '../../../src/CiteThis';

const defaultProps = {
  label: '\'CITE THIS\'',
  address: '123 Test Road',
  author: 'Test Author',
  editor: 'Test Editor',
  institution: 'Department of Test',
  journal: 'Test Journal Monthly',
  month: 'March',
  number: '1234',
  pages: '83, 84',
  publisher: 'Test Publisher',
  series: 'Now that\'s what I call testing',
  title: 'Test Title',
  type: TYPES.MISC,
  url: 'http://test.com/test',
  volume: '2000',
  year: '2017'
};

const setup = (customProps) => {
  const propsData = !customProps ? defaultProps : merge(defaultProps, customProps);
  return mount(CiteThis, {
    propsData,
    attachToDocument: true
  });
};

describe('CiteThis', () => {
  it('renders without crashing', () => {
    const component = setup();

    expect(component.contains('.citeThis__button')).toBeTruthy();
    expect(component.find('.formatSelector')).toBeTruthy();
    expect(component.find('.citeThis__download')).toBeTruthy();
  });

  it('renders CiteThisButton with appropriate parameters', () => {
    const component = setup();
    const citeThisButton = component.find('.citeThis__button');

    expect(citeThisButton.text()).toBe(defaultProps.label);
  });

  it('renders CiteThisFormatSelector with appropriate parameters', () => {
    const component = setup();
    const citeThisFormatSelector = component.find('.formatSelector');

    const selectorProps = citeThisFormatSelector.vm.$options.propsData;

    expect(selectorProps.cite).toBe(component.vm.cite);
    expect(selectorProps.formats).toBe(FORMATS);
  });

  it('validates type prop is one of the defined types', () => {
    const component = setup();
    const { validator } = component.vm.$options.props.type;

    expect(validator('notValid')).toBeFalsy();
    expect(validator(null)).toBeFalsy();
    expect(validator()).toBeFalsy();
    expect(validator(1234)).toBeFalsy();
    expect(validator(TYPES.ARTICLE)).toBeTruthy();
  });

  it('validates year prop is numeric', () => {
    const component = setup();
    const { validator } = component.vm.$options.props.year;

    expect(validator('notValid')).toBeFalsy();
    expect(validator('123')).toBeTruthy();
    expect(validator(234)).toBeTruthy();
    expect(validator('1234')).toBeTruthy();
    expect(validator(1234)).toBeTruthy();
  });

  it('toggles open state', () => {
    jest.useFakeTimers();

    const component = setup();

    expect(component.classes()).not.toContain('flyoutOpen');
    expect(component.vm.isOpen).toBeFalsy();

    component.vm.toggleOpen();
    component.update();

    expect(component.classes()).toContain('flyoutOpen');
    expect(component.classes()).toContain('flyoutOpening');
    expect(component.vm.isOpen).toBeTruthy();

    jest.runAllTimers();
    component.update();

    expect(component.classes()).toContain('flyoutOpen');
    expect(component.classes()).not.toContain('flyoutOpening');
    expect(component.vm.isOpen).toBeTruthy();

    component.vm.toggleOpen();
    component.update();

    expect(component.classes()).not.toContain('flyoutOpen');
    expect(component.classes()).toContain('flyoutClosing');
    expect(component.vm.isOpen).toBeFalsy();

    jest.runAllTimers();
    component.update();

    expect(component.classes()).not.toContain('flyoutOpen');
    expect(component.classes()).not.toContain('flyoutClosing');
    expect(component.vm.isOpen).toBeFalsy();
  });

  it('generates a BIB citation file by default', () => {
    const component = setup();

    expect(component.vm.href).toBe('');
    expect(component.vm.currentFormat).toBe(FORMATS.BIB);

    component.vm.cite();

    expect(component.vm.href).toContain('data:text/plain;charset=utf-8,');
    expect(component.vm.currentFormat).toBe(FORMATS.BIB);

    component.vm.cite();
  });

  it('updates the current format and generates a citation file of that format', () => {
    const component = setup();

    expect(component.vm.href).toBe('');
    expect(component.vm.currentFormat).toBe(FORMATS.BIB);

    component.vm.cite(FORMATS.ENW);

    expect(component.vm.href).toContain('data:text/plain;charset=utf-8,');
    expect(component.vm.currentFormat).toBe(FORMATS.ENW);

    component.vm.cite(FORMATS.RIS);

    expect(component.vm.href).toContain('data:text/plain;charset=utf-8,');
    expect(component.vm.currentFormat).toBe(FORMATS.RIS);

    component.vm.cite(FORMATS.BIB);

    expect(component.vm.href).toContain('data:text/plain;charset=utf-8,');
    expect(component.vm.currentFormat).toBe(FORMATS.BIB);
  });

  it('sets the download link and clicks to', () => {
    const component = setup();
    const { downloadLink } = component.vm.$refs;
    const downloadLinkSpy = jest.spyOn(downloadLink, 'click');

    expect(component.vm.currentFormat).toBe(FORMATS.BIB);

    component.vm.cite(FORMATS.ENW);

    expect(component.vm.currentFormat).toBe(FORMATS.ENW);
    expect(component.vm.href).toContain('data:text/plain;charset=utf-8,');
    expect(downloadLinkSpy).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(downloadLinkSpy).toHaveBeenCalled();
  });

  it('uses the correct file name for the current format', () => {
    const component = setup();

    expect(component.vm.currentFormat).toBe(FORMATS.BIB);
    expect(component.vm.getFileName()).toEqual('TestAuthor2017.bib');

    component.setData({ currentFormat: FORMATS.RIS });

    expect(component.vm.currentFormat).toBe(FORMATS.RIS);
    expect(component.vm.getFileName()).toEqual('TestAuthor2017.ris');

    component.setData({ currentFormat: FORMATS.ENW });

    expect(component.vm.currentFormat).toBe(FORMATS.ENW);
    expect(component.vm.getFileName()).toEqual('TestAuthor2017.enw');
  });
});

