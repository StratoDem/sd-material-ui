import React from 'react';
import { mount, shallow } from 'enzyme';
import Popover from '../Popover/Popover.react';
import MuiPopover from 'material-ui/Popover';

describe('Popover', () => {
  it('renders', () => {
    const component = shallow(
      <Popover id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <Popover id='test-id' />);

    expect(component.state('open')).toEqual(false);
    component.setProps({open: true});
    expect(component.state('open')).toEqual(true);
    component.setProps({open: false});
    expect(component.state('open')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <Popover id='test-id' />);

    expect(component.state('open')).toEqual(false);
    component.find(MuiPopover).props().handleClick({}, true);
    expect(component.state('open')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <Popover id='test-id' setProps={null} fireEvent={null} />);

    expect(component.state('open')).toEqual(false);
    component.find(MuiPopover).props().handleClick({}, true);
    expect(component.state('open')).toEqual(true);
  });
});
