import React from 'react';
import { mount, shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from '../Popover/Popover.react';

describe('Popover', () => {
  it('renders', () => {
    const component = shallow(
      <Popover/>
    );

    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <Popover/>);

    expect(component.state('open')).toEqual(false);
    component.setProps({open: true});
    expect(component.state('open')).toEqual(true);
    component.setProps({open: false});
    expect(component.state('open')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <Popover/>);

    expect(component.state('open')).toEqual(false);
    component.find(RaisedButton).props().onClick({}, true);
    expect(component.state('open')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <Popover setProps={null} fireEvent={null} />);

    expect(component.state('open')).toEqual(false);
    component.find(RaisedButton).props().onClick({}, true);
    expect(component.state('open')).toEqual(true);
  });
});
