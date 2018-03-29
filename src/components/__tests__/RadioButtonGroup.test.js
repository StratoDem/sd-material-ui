import React from 'react';
import { mount, shallow } from 'enzyme';
import { RadioButtonGroup as MuiRadioButtonGroup } from 'material-ui/RadioButton';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup.react';
import RadioButton from 'material-ui/RadioButton';

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

  it('uses the styles provided', () => {
    const component = shallow(
      <RadioButtonGroup
        id={'test-id'}
        className={'test-class'}
        defaultSelected={'first-val'}
        labelPosition={'left'}
        name={'test-component'}
        options={[
          {value: 'first-val', label: 'first value'},
          {value: 'second-val', label: 'second value'},
        ]}
        style={{padding: 20}}
      />);

    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().className)
      .toEqual('test-class');
    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().defaultSelected)
      .toEqual('first-val');
    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().labelPosition)
      .toEqual('left');
    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().name)
      .toEqual('test-component');
    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().style)
      .toEqual({padding: 20});
  })

  it('fires callback event when valueSelected changes', () => {
    const fakeFireEvent = jest.fn();
    const component = mount(
      <RadioButtonGroup
        id='test-id'
        name='test-component'
        fireEvent={fakeFireEvent}
        options={[
          {value: 'first-val', label: 'first value'},
          {value: 'second-val', label: 'second value'},
        ]}
      />);

    component.find(MuiRadioButtonGroup).props().onChange({},'second-val');

    expect(fakeFireEvent.mock.calls.length).toEqual(1);
  });

  it('renders with no callblacks', () => {
    const blankFunc = () => { return null; };
    const component = shallow(
      <RadioButtonGroup
        id={'test-id'}
        name={'test-component'}
        fireEvent={blankFunc} />);

    expect(component).toBe.ok;
  })

  it('radio btn children use styles provided', () => {
    const component = shallow(
      <RadioButtonGroup
        id={'test-id'}
        name={'test-component'}
        options={[
          {value: 'first-val', label: 'first value', style: {padding: 20}},
          {value: 'second-val', label: 'second value', style: {padding: 50}},
        ]}
      />);

    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().children[0].style)
      .toEqual({padding: 20});
    expect(
      component
        .find(MuiRadioButtonGroup)
        .props().children[1].style)
      .toEqual({padding: 50});
  })
});
