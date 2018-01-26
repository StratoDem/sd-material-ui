import React from 'react';
import { mount, shallow } from 'enzyme';
import Checkbox from '../Checkbox/Checkbox.react';


describe('Checkbox', () => {
  it('renders', () => {
    const component = shallow(
      <Checkbox id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates props correctly', () => {
    const component = shallow(
      <Checkbox id='test-id' />);

    expect(component.state('checked')).toEqual(false);
    component.setProps({checked: true});
    expect(component.state('checked')).toEqual(true);
    component.setProps({checked: false});
    expect(component.state('checked')).toEqual(false);
  });

  it('handles click events', () => {
    const component = mount(
      <Checkbox id='test-id' />);

    expect(component.state('checked')).toEqual(false);
    component.find('MuiCheckbox').props().onCheck({}, true);
    expect(component.state('checked')).toEqual(true);
  });

  it('sets state even without setProps/fireEvent', () => {
    const component = shallow(
      <Checkbox id='test-id' setProps={null} fireEvent={null} />);

    console.log(component.debug());
    expect(component.state('checked')).toEqual(false);
    component.find('MuiCheckbox').props().onCheck({}, true);
    expect(component.state('checked')).toEqual(true);
  });
});
