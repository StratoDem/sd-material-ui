import React from 'react';
import { shallow } from 'enzyme';
import SDCheckbox from '../SDCheckbox.react';

describe('SDCheckbox', () => {
  it('renders', () => {
    const component = shallow(
      <SDCheckbox id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates based on clicks', () => {
    const component = shallow(
      <SDCheckbox id='test-id' />);

    expect(component.state('checked')).toEqual(false);
    component.setProps({checked: true});
    expect(component.state('checked')).toEqual(true);
    component.setProps({checked: false});
    expect(component.state('checked')).toEqual(false);
  });
});
