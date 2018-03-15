import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../IconButton/IconButton.react';
import MuiIconButton from 'material-ui/IconButton';

describe('IconButton', () => {
  it('renders', () => {
    const component = shallow(
      <IconButton id='test-id' label='myButton'>
        children=
        <div>
          <p>Button text</p>
        </div>
      </IconButton>);

    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('handles click events', () => {
    const clickCheck = jest.fn();
    const component = shallow(
      <IconButton id='test-id' label='myButton' fireEvent={clickCheck} />);

    component.find(MuiIconButton).simulate('click');
    expect(clickCheck.mock.calls.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const component = shallow(
      <IconButton id='test-id' label='myButton'>
        children=<div className='myDiv' />
      </IconButton>);

    expect(component.contains(<div className="myDiv" />)).toEqual(true);
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <IconButton
        id='test-id'
        label='myButton'
        iconStyle={{'color':'black'}}
        iconClassName='material-icons'
      >
        children={['help']}
      </IconButton>);

    expect(component.find(MuiIconButton).props().iconStyle).toEqual({'color': 'black'});
    expect(component.find(MuiIconButton).props().iconClassName).toEqual('material-icons');
  });

  it('renders with no callbacks', () => {
    const blankFunc = () => { return null; };
    const component = shallow(
      <IconButton id='test-id' label='myButton' fireEvent={blankFunc} setProps={blankFunc} />);

    expect(component).toBe.ok;
  });

  it('increments n_clicks', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <IconButton id='test-id' label='myButton' n_clicks={1} setProps={mockProps} />);

    component.find(MuiIconButton).simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks: 2});
  });

  it('increments n_clicks_previous', () => {
    const mockProps = jest.fn();
    const component = shallow(
      <IconButton id='test-id' label='myButton' n_clicks={1} n_clicks_previous={1} setProps={mockProps} />);

    component.find(MuiIconButton).simulate('click');
    expect(mockProps).toHaveBeenCalledWith({n_clicks_previous: 2});
  });
});
