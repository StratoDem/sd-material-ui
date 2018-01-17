import React from 'react';
import { mount, shallow } from 'enzyme';
import MenuItem from '../../../node_modules/material-ui/MenuItem';
import SDDropDownMenu from '../SDDropDownMenu.react';

describe('SDDropDownMenu', () => {
  it('renders', () => {
    const component = shallow(
      <SDDropDownMenu id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates value based on selections', () => {
    const component = mount(
      <SDDropDownMenu id='test-id' value={1}>
        <MenuItem id='test-id2' value={1} primaryText='Test text' />
        <MenuItem id='test-id3' value={2} primaryText='Test text' />
      </SDDropDownMenu>
    );

    expect(component.state('value')).toEqual(1);
    component.find('DropDownMenu').props().onChange({}, 1, 2);
    expect(component.state('value')).toEqual(2);
  });
});
