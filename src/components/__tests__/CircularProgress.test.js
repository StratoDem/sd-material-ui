import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from '../CircularProgress/CircularProgress.react';
import MuiCircularProgress from 'material-ui/CircularProgress';

describe('CircularProgress', () => {
  it('renders', () => {
    const component = shallow(
      <CircularProgress
        mode={"indeterminate"}
      />);
    expect(component).toBe.ok;
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <CircularProgress
        mode={'indeterminate'}
        style={{padding: 20}}
        thickness={20}
        size={25}
        innerStyle={{border: 5}}
        color={'black'}
      />);

    expect(
      component
        .find(MuiCircularProgress)
        .props().style)
      .toEqual({padding: 20});
    expect(
      component
        .find(MuiCircularProgress)
        .props().thickness)
      .toEqual(20);
    expect(
      component
        .find(MuiCircularProgress)
        .props().size)
      .toEqual(25);
    expect(
      component
        .find(MuiCircularProgress)
        .props().innerStyle)
      .toEqual({border: 5});
    expect(
      component
        .find(MuiCircularProgress)
        .props().color)
      .toEqual('black');
  })
});
