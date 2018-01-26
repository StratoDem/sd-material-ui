import React from 'react';
import { shallow } from 'enzyme';
import RaisedButton from '../RaisedButton/RaisedButton.react';

describe('RaisedButton', () => {
  it('renders', () => {
    const component = shallow(
      <RaisedButton id='test-id' label='myButton'>
        children=
        <div>
          <p>Button text</p>
        </div>
      </RaisedButton>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <RaisedButton id='test-id' label='myButton' fireEvent={clickCheck} />);

    component.find('MuiRaisedButton').simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const component = shallow(
      <RaisedButton id='test-id' label='myButton'>
        children=<div className='myDiv' />
      </RaisedButton>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });

  it('increments n_clicks', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <RaisedButton id='test-id' label='myButton' n_clicks={1} setProps={mockProps} />);

    component.find('MuiRaisedButton').simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks: 2});
  });
});
