import React from 'react';
import { shallow } from 'enzyme';
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

    expect(component.state('open')).toEqual(false);
    component.setProps({open: true});
    expect(component.state('open')).toEqual(true);
    component.setProps({open: false});
    expect(component.state('open')).toEqual(false);
  });
});
