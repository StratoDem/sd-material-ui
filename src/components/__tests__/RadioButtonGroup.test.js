import React from 'react';
import { mount, shallow } from 'enzyme';
import { RadioButtonGroup as MuiRadioButtonGroup } from 'material-ui/RadioButton';
import RadioButton from 'material-ui/RadioButton';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup.react';

describe('RadioButtonGroup', () => {
  it('renders', () => {
    const component = shallow(
      <RadioButtonGroup id='test-id' name='test-component' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates value based on selections', () => {
    const component = mount(
      <RadioButtonGroup
        id='test-id'
        name='test-component'
        options={[
          {value: 'first-val', label: 'first value'},
          {value: 'second-val', label: 'second value'},
        ]}
        defaultSelected={'first-val'}
      >
      </RadioButtonGroup>
    );

    component.find(MuiRadioButtonGroup).props().onChange({}, 'second-val');
    expect(component.state('valueSelected')).toEqual('second-val');
  });
});
