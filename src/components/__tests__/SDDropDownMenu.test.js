import React from 'react';
import { mount, shallow } from 'enzyme';
import SDDropDownMenu from '../SDDropDownMenu.react';
import SDMenuItem from '../SDMenuItem.react';

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
        <SDMenuItem id='test-id2' value={1} primaryText='Test text' />
        <SDMenuItem id='test-id3' value={2} primaryText='Test text' />
      </SDDropDownMenu>
    );

    expect(component.state('value')).toEqual(1);
    component.setProps().onChange({}, 1, 2);
    expect(component.state('value')).toEqual(2);
  });

  it('handles multiple selections', () => {
    const component = mount(
      <SDMenuItem id='test-id' multiple={true} value={1} >
        <SDMenuItem id='test-id2' value={1} primaryText='Test text' />
        <SDMenuItem id='test-id3' value={2} primaryText='Test text' />
      </SDMenuItem>
    );

    expect(component.state('value')).toEqual(1);
    component.setProps().onChange({}, 1, [1, 2]);
    expect(component.state('value')).toEqual([1, 2]);
    component.setProps().onChange({}, 1, 2);
    expect(component.state('value')).toEqual(2);
  });
});
