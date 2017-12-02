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
            icon: <span className="test-class" />,
          },
          {
            label: 'test 2',
            value: 'val2',
            icon: <span className="test-class-2" />,
          },
        ]}
      />);

    expect(component.props().id).toEqual('test-id');
    expect(component.find(MUIBottomNavigation).length).toBe(1);
    expect(component.find(MUIBottomNavigation).find(BottomNavigationItem).length).toBe(2);
  });
});
