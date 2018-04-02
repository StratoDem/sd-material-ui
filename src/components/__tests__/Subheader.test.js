import React from 'react';
import { shallow } from 'enzyme';
import MuiSubheader from 'material-ui/Subheader';
import Subheader from '../Subheader/Subheader.react';

describe('Subheader', () => {
  it('renders', () => {
    const component = shallow(
      <Subheader />);

    expect(component).toBe.ok;
  });

  it('renders with children', () => {
    const component = shallow(
      <Subheader
        children={['test-subheader']}
      />);

    expect(
      component
        .find(MuiSubheader)
        .props().children[0])
      .toEqual('test-subheader');
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <Subheader
        children={['test-subheader']}
        inset={true}
        style={{color: 'blue'}}
      />);

    expect(
      component
        .find(MuiSubheader)
        .props().style)
      .toEqual({color: 'blue'});

    expect(
      component
        .find(MuiSubheader)
        .props().inset)
      .toEqual(true);
  });
});
