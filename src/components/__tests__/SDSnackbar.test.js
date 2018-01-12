import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from 'material-ui/Snackbar';
import SDSnackbar from '../SDSnackbar.react';

describe('SDSnackbar', () => {
  it('renders', () => {
    const component = shallow(
      <SDSnackbar id='test-id' open={false} message='test message' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component.find(Snackbar).length).toBe(1);
  });

  it('opens and closes', () => {
    const component = shallow(
      <SDSnackbar id='test-id' open={false} message='test message' />
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    component.setProps({open: false});
    expect(component.state().open).toEqual(false);
  });

  it('closes automatically', () => {
    const component = shallow(
      <SDSnackbar id='test-id' autoHideDuration={500} open={false} message='test message' />
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    setTimeout(() => expect(component.state().open).toEqual(false), 600);
  });
});
