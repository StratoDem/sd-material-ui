import React from 'react';
import { mount, shallow } from 'enzyme';
import MenuItem from '../../../node_modules/material-ui/MenuItem';
import DropDownMenu from '../DropDownMenu/DropDownMenu.react';
import { DropDownMenu as MuiDropDownMenu } from 'material-ui/DropDownMenu';

describe('DropDownMenu', () => {
  it('renders', () => {
    const component = shallow(
      <DropDownMenu id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates value based on selections', () => {
    const component = mount(
      <DropDownMenu id='test-id' value={1}>
        <MenuItem value={1} primaryText='Test text' />
        <MenuItem value={2} primaryText='Test text' />
      </DropDownMenu>
    );

    expect(component.state('value')).toEqual(1);
    component.find(MuiDropDownMenu).props().onChange({}, 1, 2);
    expect(component.state('value')).toEqual(2);
  });
});
