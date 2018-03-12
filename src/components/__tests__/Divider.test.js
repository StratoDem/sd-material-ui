import React from 'react';
import { shallow } from 'enzyme';
import Divider from '../Divider/Divider.react';
import MuiDivider from 'material-ui/Divider';

describe('Divider', () => {
  it('renders', () => {
    const component = shallow(
      <Divider
        inset={false}
      />);
    expect(component).toBe.ok;
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <Divider
        inset={false}
        style={{color: 'blue'}}
      />);

    expect(
      component
        .find(MuiDivider)
        .props().style)
      .toEqual({color: 'blue'});
  })
});
