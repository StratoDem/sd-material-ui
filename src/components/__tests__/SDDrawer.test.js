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

    it('opens and closes (props.open)', () => {
    const component = shallow(
      <SDDrawer id='test-id' open={false}>
        children=<div>
          <p>Item</p>
        </div>
      </SDDrawer>);

    expect(component.state('open')).toEqual(false);
    component.setProps({open: true});
    expect(component.state('open')).toEqual(true);
    component.setProps({open: false});
    expect(component.state('open')).toEqual(false);
  });
});
