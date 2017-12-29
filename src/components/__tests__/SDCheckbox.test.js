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

   it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <SDCheckbox id='test-id' fireEvent={clickCheck} />);

    component.find('Checkbox').simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
  });

  it('updates based on clicks', () => {
    const component = shallow(
      <SDCheckbox id='test-id' />);

    expect(component.state().checked).toEqual(false);
    expect(component.props().checked).toEqual(undefined);
    component.simulate('click');
    expect(component.state().checked).toEqual(true);
    expect(component.props().checked).toEqual(true);
  });
});