import React from 'react';
import { mount, shallow } from 'enzyme';
import SDToggle from '../SDToggle.react';

describe('SDToggle', () => {
  it('renders', () => {
    const component = shallow(
      <SDToggle id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <SDToggle id='test-id' />);

    expect(component.state('switched')).toEqual(false);
    component.setProps({toggled: true});
    expect(component.state('switched')).toEqual(true);
    component.setProps({toggled: false});
    expect(component.state('switched')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <SDToggle id='test-id' />);

    expect(component.state('switched')).toEqual(false);
    component.find('Toggle').props().onToggle({}, true);
    expect(component.state('switched')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <SDToggle id='test-id' setProps={null} fireEvent={null} />);

    expect(component.state('switched')).toEqual(false);
    component.find('Toggle').props().onToggle({}, true);
    expect(component.state('switched')).toEqual(true);
  });
});
