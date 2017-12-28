import React from 'react';
import { shallow } from 'enzyme';
import SDDrawer from '../SDDrawer.react';

describe('SDDrawer', () => {
  it('renders', () => {
    const component = shallow(
      <SDDrawer id='test-id'>
        children=<div>
          <p>Item</p>
        </div>
      </SDDrawer>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  // it('docks on Esc keystroke', () => {
  //   const component = shallow(
  //     <SDDrawer id='test-id' docked={false}>
  //       children=<div>
  //       <p>Item</p>
  //       </div>
  //     </SDDrawer>);
  //
  //   expect(component.find('Drawer').props().docked).toEqual(false);
  //   component.simulate('keyDown', { keyCode: 27, which: 27});
  //   expect(component.find('Drawer').props().docked).toEqual(true);
  // });
});