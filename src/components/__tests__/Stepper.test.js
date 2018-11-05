import React from 'react';
import { shallow } from 'enzyme';
import { Step, Stepper as MuiStepper } from 'material-ui/Stepper';
import Stepper from '../Stepper/Stepper.react';

describe('Stepper', () => {
  it('renders', () => {
    const component = shallow(
      <Stepper />);

    expect(component).toBe.ok;
  });

  it('renders the specified number of steps', () => {
    const component = shallow(
      <Stepper stepCount={5} />);

    expect(component.find(MuiStepper).find(Step).length).toBe(5);
  });
})
