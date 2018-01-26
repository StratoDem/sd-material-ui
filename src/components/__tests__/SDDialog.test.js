import React from 'react';
import { shallow } from 'enzyme';
import Dialog from 'material-ui/Dialog';
import Dialog from '../Dialog/Dialog.react';

describe('Dialog', () => {
  it('renders', () => {
    const component = shallow(
      <Dialog id='test-id'>
        <div>
          <p>Share this page:</p>
          <p>http://localhost</p>
        </div>
      </Dialog>
    );

    expect(component.props().id).toEqual('test-id');
    expect(component.find(MuiDialog).length).toBe(1);
  });

  it('opens and closes', () => {
    const component = shallow(
      <Dialog id='test-id'>
        <div>
          <p>Share this page:</p>
        </div>
      </Dialog>
    );

    expect(component.state().open).toEqual(false);
    component.setProps({open: true});
    expect(component.state().open).toEqual(true);
    component.setProps({open: false});
    expect(component.state().open).toEqual(false);
  });
});
