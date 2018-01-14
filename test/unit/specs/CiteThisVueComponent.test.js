/* global describe, expect, jest, it */
import CiteThisVueComponent from '../../../src/CiteThisVueComponent';

describe('CiteThisVueComponent', () => {
  it('installs the CiteThis vue component on the provided vue instance', () => {
    const mockVue = { component: jest.fn() };
    CiteThisVueComponent.install(mockVue);

    expect(mockVue.component).toHaveBeenCalledWith('CiteThis', expect.objectContaining({
      name: 'CiteThis'
    }));
  });
});

