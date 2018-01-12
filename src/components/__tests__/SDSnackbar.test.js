import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from 'material-ui/Snackbar';
import SDSnackbar from '../SDSnackbar.react';

describe('SDSnackbar', () => {
  it('renders', () => {
    const component = shallow(
      <SDSnackbar id='test-id' />
    );

    expect(component.props().id).toEqual('test-id');
    expect(component.find(Snackbar).length).toBe(1);
  });

  it('opens and closes', () => {
    const component = shallow(
      <SDSnackbar id='test-id' />
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    component.setProps({open: false});
    expect(component.state().open).toEqual(false);
  });

  it('closes automatically', () => {
    const component = shallow(
      <SDSnackbar id='test-id' autoHideDuration={500} />
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    setTimeout(() => expect(component.state().open).toEqual(false), 600);
  });

  it('closes when clicked away', () => {
    const component = shallow(
      <div>
        <p>Somewhere else to click.</p>
        <SDSnackbar id='test-id' autoHideDuration={5000} />
      </div>
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    component.find('p').simulate('click');
    expect(component.state().open).toEqual(false);
  });
});
