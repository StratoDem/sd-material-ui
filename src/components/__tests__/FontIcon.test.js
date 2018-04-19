import React from 'react';
import { shallow } from 'enzyme';
import MuiFontIcon from 'material-ui/FontIcon';
import FontIcon from '../FontIcon/FontIcon.react';


describe('FontIcon', () => {
  it ('renders', () => {
    const component = shallow(
      <FontIcon
        className="material-icons"
        iconName="home"
      />);
    expect(component).toBe.ok;
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <FontIcon
        className="material-icons"
        iconName="settings"
        style={{padding: 20}}
        color="black"
        hoverColor="green"
      />);

    expect(
      component
        .find(MuiFontIcon)
        .props().style)
      .toEqual({padding: 20});
    expect(
      component
        .find(MuiFontIcon)
        .props().color)
      .toEqual('black');
    expect(
      component
        .find(MuiFontIcon)
        .props().hoverColor)
      .toEqual('green');
  })
});
