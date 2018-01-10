import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import SDCheckbox from '../SDCheckbox.react';


describe('SDCheckbox', () => {
  it('renders', () => {
    const component = shallow(
      <SDCheckbox id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <SDCheckbox id='test-id' />);

    expect(component.state('checked')).toEqual(false);
    component.setProps({checked: true});
    expect(component.state('checked')).toEqual(true);
    component.setProps({checked: false});
    expect(component.state('checked')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <SDCheckbox id='test-id' />);

    expect(component.state('checked')).toEqual(false);
    component.find('Checkbox').props().onCheck({}, true);
    expect(component.state('checked')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <SDCheckbox id='test-id' setProps={null} fireEvent={null} />);

    expect(component.state('checked')).toEqual(false);
    component.find('Checkbox').props().onCheck({}, true);
    expect(component.state('checked')).toEqual(true);
  });
});
