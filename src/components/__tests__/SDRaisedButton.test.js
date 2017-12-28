import React from 'react';
import { shallow } from 'enzyme';
import SDRaisedButton from '../SDRaisedButton.react';

describe('SDRaisedButton', () => {
  it('renders', () => {
    const component = shallow(
      <SDRaisedButton id='test-id'>
        children=<div>
          <p>Button text</p>
        </div>
      </SDRaisedButton>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <SDRaisedButton id='test-id' label='myButton' fireEvent={clickCheck} />);

    component.find('RaisedButton').simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const component = shallow(
      <SDRaisedButton id='test-id'>
        children=<div className='myDiv' />
      </SDRaisedButton>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });

  // it('uses the styles provided', () => {
  //   const component = shallow(
  //     <SDRaisedButton id='test-id' backgroundColor='black' fullWidth={true}>
  //       children=<div />
  //     </SDRaisedButton>);
  //
  //   expect(component.find('RaisedButton').props().backgroundColor).toEqual('black');
  //   expect(component.find('RaisedButton').props().fullWidth).toEqual(true);
  // });

  it('increments n_clicks', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <SDRaisedButton label='myButton' n_clicks={1} setProps={mockProps} />);

    component.find('RaisedButton').simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks: 2});
  });
});