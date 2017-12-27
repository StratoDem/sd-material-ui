import React from 'react';
import { shallow, mount } from 'enzyme';
import SDFlatButton from '../SDFlatButton.react';

describe('SDFlatButton', () => {
  it('renders', () => {
    const component = shallow(
      <SDFlatButton id='test-id'>
        children=<div>
          <p>Button text</p>
        </div>
      </SDFlatButton>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('simulates click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <SDFlatButton id='test-id' fireEvent={clickCheck} />);

    component.find('FlatButton').simulate('click');
    expect(clickCheck.mock.calls.length).toBe(1);
    expect(component.props().n_clicks).toEqual(1);
  });

  it('renders children when passed in', () => {
    const component = shallow(
      <SDFlatButton id='test-id'>
        children=<div className='myDiv' />
      </SDFlatButton>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <SDFlatButton id='test-id' backgroundColor='black' fullWidth={true}>
        children=<div />
      </SDFlatButton>);

    expect(component.find('FlatButton').props().backgroundColor).toEqual('black');
    expect(component.find('FlatButton').props().fullWidth).toEqual(true);
  });
});