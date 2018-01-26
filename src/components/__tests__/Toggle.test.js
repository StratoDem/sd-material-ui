import React from 'react';
import { mount, shallow } from 'enzyme';
import Toggle from '../Toggle/Toggle.react';
import MuiToggle from 'material-ui/Toggle';

describe('Toggle', () => {
  it('renders', () => {
    const component = shallow(
      <Toggle id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <Toggle id='test-id' />);

    expect(component.state('switched')).toEqual(false);
    component.setProps({toggled: true});
    expect(component.state('switched')).toEqual(true);
    component.setProps({toggled: false});
    expect(component.state('switched')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <Toggle id='test-id' />);

    expect(component.state('switched')).toEqual(false);
    component.find(MuiToggle).props().onToggle({}, true);
    expect(component.state('switched')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <Toggle id='test-id' setProps={null} fireEvent={null} />);

    expect(component.state('switched')).toEqual(false);
    component.find(MuiToggle).props().onToggle({}, true);
    expect(component.state('switched')).toEqual(true);
  });
});
