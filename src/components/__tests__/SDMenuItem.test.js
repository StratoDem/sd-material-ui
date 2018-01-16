import React from 'react';
import { mount, shallow } from 'enzyme';
import SDMenuItem from '../SDMenuItem.react';

describe('SDMenuItem', () => {
  it('renders', () => {
    const component = shallow(
      <SDMenuItem id='test-id' />
    );
    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  // This test can be removed because what it checks is trivial
  it('updates checked correctly', () => {
    const component = mount(
      <SDMenuItem
        id='test-id'
      />
    );

    // Add a test to see whether a mock prop gets called on click events

    expect(component.props().checked).toEqual(false);
    component.setProps({checked: true});
    expect(component.props().checked).toEqual(true);
  });

  it('handles click events', () => {
    const component = mount(
      <SDMenuItem
        id='test-id'
      />
    );

    expect(component.props().checked).toEqual(false);
    component.find('MenuItem').props().onClick(true);
    expect(component.props().checked).toEqual(true);
  });
});
