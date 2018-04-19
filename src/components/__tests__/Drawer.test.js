import React from 'react';
import {shallow} from 'enzyme';

import MUIDrawer from 'material-ui/Drawer';

import Drawer from '../Drawer/Drawer.react';

describe('Drawer', () => {
  it('renders', () => {
    const component = shallow(
      <Drawer id='test-id'>
        <div>
          <p>Item</p>
        </div>
      </Drawer>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('opens and closes (props.open)', () => {
    const component = shallow(
      <Drawer id='test-id' open={false}>
        <div>
          <p>Item</p>
        </div>
      </Drawer>);

    expect(component.state('open')).toBe(false);
    component.setProps({open: true});
    expect(component.state('open')).toBe(true);
    expect(component.find(MUIDrawer).props().open).toBe(true);
    component.setProps({open: false});
    expect(component.state('open')).toBe(false);
  });

  it('applies classes when open and closed', () => {
    const component = shallow(
      <Drawer
        id='test-id'
        open={false}
        containerClassName="my-test-class"
        containerClosedClassName="my-closed-class"
      >
        <div>
          <p>Item</p>
        </div>
      </Drawer>);

    expect(component.state('open')).toBe(false);
    expect(component.find(MUIDrawer).props().containerClassName)
      .toBe('my-test-class my-closed-class');
    component.setProps({open: true});
    expect(component.find(MUIDrawer).props().containerClassName)
      .toBe('my-test-class');
  });
});
