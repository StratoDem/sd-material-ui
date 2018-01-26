import React from 'react';
import { shallow } from 'enzyme';
import FlatButton from '../FlatButton/FlatButton.react';

describe('FlatButton', () => {
  it('renders', () => {
    const component = shallow(
      <FlatButton id='test-id' label='myButton'>
        children=
        <div>
          <p>Button text</p>
        </div>
      </FlatButton>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <FlatButton id='test-id' label='myButton' fireEvent={clickCheck} />);

    component.find('MuiFlatButton').simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const component = shallow(
      <FlatButton id='test-id' label='myButton'>
        children=<div className='myDiv' />
      </FlatButton>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <FlatButton id='test-id' label='myButton' backgroundColor='black' fullWidth={true}>
        children=<div />
      </FlatButton>);

    expect(component.find('MuiFlatButton').props().backgroundColor).toEqual('black');
    expect(component.find('MuiFlatButton').props().fullWidth).toEqual(true);
  });

  it('renders with no callbacks', () => {
    const blankFunc = () => { return null; };
    const component = shallow(
      <FlatButton id='test-id' label='myButton' fireEvent={blankFunc} setProps={blankFunc} />);

    expect(component).toBe.ok;
  });

  it('increments n_clicks', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <FlatButton id='test-id' label='myButton' n_clicks={1} setProps={mockProps} />);

    component.find('MuiFlatButton').simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks: 2});
  });
});
