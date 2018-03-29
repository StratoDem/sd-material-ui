import React from 'react';
import { shallow } from 'enzyme';
import MuiPaper from 'material-ui/Paper';
import Paper from '../Paper/Paper.react';
import CircularProgress from '../CircularProgress/CircularProgress.react';

describe('Paper', () => {
  it('renders', () => {
    const component = shallow(
      <Paper />);

    expect(component).toBe.ok;
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <Paper
        circle={true}
        rounded={false}
        transitionEnabled={true}
        zDepth={3}
        style={{color: 'blue'}}
      />);

    expect(
      component
        .find(MuiPaper)
        .props().circle)
      .toEqual(true);
    expect(
      component
        .find(MuiPaper)
        .props().rounded)
      .toEqual(false);
    expect(
      component
        .find(MuiPaper)
        .props().transitionEnabled)
      .toEqual(true);
    expect(
      component
        .find(MuiPaper)
        .props().zDepth)
      .toEqual(3);
    expect(
      component
        .find(MuiPaper)
        .props().style)
      .toEqual({color: 'blue'});
  });

  it('children use styles provided', () => {
    const component = shallow(
      <Paper
        children={[<CircularProgress
          mode={'indeterminate'}
          size={100}
          thickness={14}
        />,
        ]}
        circle={true}
        rounded={false}
        transitionEnabled={true}
        zDepth={3}
        style={{color: 'blue'}}
      />);

    expect(
      component
        .find(MuiPaper)
        .props().children[0].props.size)
      .toEqual(100);
    expect(
      component
        .find(MuiPaper)
        .props().children[0].props.thickness)
      .toEqual(14);
  });
})
