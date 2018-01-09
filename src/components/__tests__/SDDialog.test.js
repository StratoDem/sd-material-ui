import React from 'react';
import { shallow } from 'enzyme';
import Dialog from 'material-ui/Dialog';
import SDDialog from '../SDDialog.react';

describe('SDDialog', () => {
  it('renders', () => {
    const component = shallow(
      <SDDialog id='test-id'>
        <div>
          <p>Share this page:</p>
          <p>http://localhost</p>
        </div>
      </SDDialog>
    );

    expect(component.props().id).toEqual('test-id');
    expect(component.find(Dialog).length).toBe(1);
  });

  it('opens and closes', () => {
    const component = shallow(
      <SDDialog id='test-id'>
        <div>
          <p>Share this page:</p>
        </div>
      </SDDialog>
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    component.setProps({open: false});
    expect(component.state().open).toEqual(false);
  });
});
