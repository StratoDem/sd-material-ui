import React from 'react';
import { mount, shallow } from 'enzyme';
import { Step as MuiStep } from 'material-ui/Stepper';
import { StepLabel as MuiStepLabel } from 'material-ui/Stepper';
import Step from '../Step/Step.react';
import Stepper from '../Stepper/Stepper.react';

describe('Step', () => {
  it('renders', () => {
    const component = shallow(
      <Step />);

    expect(component).toBe.ok;
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <Step
        id='test'
        style={{color: 'green'}}
      />);

    expect(component.find(MuiStepLabel).props().style).toEqual({color: 'green'});
  });

  it('updates when receiving props', () => {
    const component = shallow(
      <Step id='test' />
    );

    expect(component.state('active')).toEqual(false);
    component.setProps({active: true});
    expect(component.state('active')).toEqual(true);

    expect(component.state('completed')).toEqual(false);
    component.setProps({completed: true});
    expect(component.state('completed')).toEqual(true);
  });
})
