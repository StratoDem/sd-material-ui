import React from 'react';
import { shallow } from 'enzyme';
import SDToggle from '../SDToggle.react';

describe('SDToggle', () => {
  it('renders', () => {
    const component = shallow(
      <SDToggle id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates based on clicks', () => {
    const component = shallow(
      <SDToggle id='test-id' />);

    expect(component.state('switched')).toEqual(false);
    component.setProps({toggled: true});
    expect(component.state('switched')).toEqual(true);
    component.setProps({toggled: false});
    expect(component.state('switched')).toEqual(false);
  });
});
