/* global describe, expect, jest, it */
import { mapObjIndexed, merge } from 'ramda';
import { mount } from '@vue/test-utils';

import CiteThisFormatSelector from '../../../../src/components/CiteThisFormatSelector';
import { FORMATS } from '../../../../src/citer/config';

const defaultProps = {
  cite: jest.fn(),
  formats: { ...FORMATS }
};

const setup = (customProps) => {
  const propsData = !customProps ? defaultProps : merge(defaultProps, customProps);
  return mount(CiteThisFormatSelector, { propsData });
};

describe('CiteThisFormatSelector', () => {
  it('renders without crashing', () => {
    const component = setup();

    expect(component.contains('.formatSelector')).toBeTruthy();
  });

  it('renders a button for each format', () => {
    const component = setup();
    mapObjIndexed((format) => {
      const button = component.find(`.formatSelector__button.${format}`);

      expect(button.text()).toBe(format);
    }, defaultProps.formats);
  });

  it('button click calls provided cite function with format type', () => {
    const citeMock = jest.fn();
    const component = setup({ cite: citeMock });
    mapObjIndexed((format) => {
      const button = component.find(`.formatSelector__button.${format}`);
      button.trigger('click');

      expect(citeMock).toHaveBeenCalledWith(format);
    }, defaultProps.formats);
  });
});

