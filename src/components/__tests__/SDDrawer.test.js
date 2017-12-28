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
    expect(component.find(SDDrawer).length).toBe(1);
  });

  it('opens and closes', () => {
    const component = shallow(
      <SDDrawer id='test-id'>
        children=<div>
        <p>Item</p>
        </div>
      </SDDrawer>);

    expect(component.props().open).toEqual(false);
    component.
    )
  });
});