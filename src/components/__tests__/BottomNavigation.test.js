import React from 'react';
import { shallow } from 'enzyme';
import {
  BottomNavigation as MUIBottomNavigation,
  BottomNavigationItem } from 'material-ui/BottomNavigation';
import BottomNavigation from '../BottomNavigation.react';

describe('BottomNavigation', () => {
  it('renders', () => {
    const component = shallow(
      <BottomNavigation
        id="test-id"
        navItems={[
          {
            label: 'test 1',
            value: 'val1',
            iconClassName: 'glyphicons glyphicons-family',
          },
          {
            label: 'test 2',
            value: 'val2',
            iconClassName: 'glyphicons glyphicons-family-2',
          },
        ]}
        selectedStyle={{color: 'blue'}}
      />);

    expect(component.props().id).toEqual('test-id');
    expect(component.find(MUIBottomNavigation).length).toBe(1);
    expect(component.find(MUIBottomNavigation).find(BottomNavigationItem).length).toBe(2);

    // Make sure that only the selected Icon has color blue
    expect(
      component
        .find(MUIBottomNavigation)
        .find(BottomNavigationItem)
        .get(0).props.icon.props.style)
      .toEqual({color: 'blue'});
    expect(
      component
        .find(MUIBottomNavigation)
        .find(BottomNavigationItem)
        .get(1).props.icon.props.style)
      .toEqual({});
  });
});
