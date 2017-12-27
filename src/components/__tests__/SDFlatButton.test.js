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

  it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <SDFlatButton id='test-id' label='myButton' fireEvent={clickCheck} />);

    component.find('FlatButton').simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
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

  it('renders with no callbacks', () => {
    const blankFunc = () => { return null; };
    const component = shallow(
      <SDFlatButton fireEvent={blankFunc} setProps={blankFunc} />);

    expect(component).toBe.ok;
  });

  it('increments n_clicks', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <SDFlatButton label='myButton' n_clicks={1} setProps={mockProps} />);

    component.find('FlatButton').simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks: 2});
  });
});