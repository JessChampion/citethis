/* global describe, expect, jest, it */
import { merge } from 'ramda';
import { mount } from '@vue/test-utils';

import CiteThisButton from '../../../../src/components/CiteThisButton';

const defaultProps = {
  active: false,
  label: '\'CITE\'',
  toggle: jest.fn()
};

const setup = (customProps) => {
  const propsData = !customProps ? defaultProps : merge(defaultProps, customProps);
  return mount(CiteThisButton, {
    propsData,
    attachToDocument: true
  });
};

describe('CiteThisButton', () => {
  it('renders without crashing', () => {
    const component = setup();

    expect(component.contains('button')).toBeTruthy();
  });

  it('renders the given label', () => {
    const component = setup();

    expect(component.find('button').text()).toBe(defaultProps.label);
  });

  it('toggles the aria-pressed value based on active prop', () => {
    let component = setup();

    expect(component.find('button').attributes()['aria-pressed'])
      .toBe(defaultProps.active.toString());

    component = setup({ active: !defaultProps.active });

    expect(component.find('button').attributes()['aria-pressed'])
      .toBe((!defaultProps.active).toString());
  });

  it('triggers the provided toggle function on click', () => {
    const toggleMock = jest.fn();
    let component = setup({ toggle: toggleMock });

    component.find('button').trigger('click');

    expect(toggleMock).toHaveBeenCalled();

    toggleMock.mockClear();
    component = setup({
      toggle: toggleMock,
      active: true
    });

    component.find('button').trigger('click');

    expect(toggleMock).toHaveBeenCalled();
  });

  it('attaches click outside handler to body when opening', () => {
    const addEventListenerSpy = jest.spyOn(document.body, 'addEventListener');
    const component = setup();
    component.find('button')
      .trigger('click');

    expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('removers click outside handler to body when closing', () => {
    const toggleMock = jest.fn();

    const removeEventListenerSpy = jest.spyOn(document.body, 'removeEventListener');
    const component = setup({
      toggle: toggleMock,
      active: true
    });
    component.vm.onClick();

    expect(toggleMock).toHaveBeenCalled();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('remains open when click occurs on an element inside the component', () => {
    const toggleMock = jest.fn();
    const mockEvent = {
      stopPropagation: jest.fn()
    };

    const component = setup({
      toggle: toggleMock,
      active: true
    });
    component.vm.onClickInsideParent(mockEvent);

    expect(toggleMock).not.toHaveBeenCalled();
    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });
});

