import React from 'react';
import { mount, shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from '../Popover/Popover.react';

describe('Popover', () => {
  it('renders', () => {
    const component = shallow(
      <Popover />
    );
    expect(component).toBe.ok;
  });

  it('renders children', () => {
    const component = shallow(
      <Popover>
        children=<div className='myDiv' />
      </Popover>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });
});
