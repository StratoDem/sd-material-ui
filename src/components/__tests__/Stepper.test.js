import React from 'react';
import { shallow } from 'enzyme';
import { Stepper as MuiStepper } from 'material-ui/Stepper';
import Stepper from '../Stepper/Stepper.react';

describe('Stepper', () => {
  it('renders', () => {
    const component = shallow(
      <Stepper />);

    expect(component).toBe.ok;
  });

  it('renders children', () => {
    const component = shallow(
      <Stepper>
        children=<div className='myDiv' />
      </Stepper>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });
})
