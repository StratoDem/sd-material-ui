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
});