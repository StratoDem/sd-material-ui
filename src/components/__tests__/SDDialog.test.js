import React from 'react';
import { shallow } from 'enzyme';
import Dialog from 'material-ui/Dialog';
import SDDialog from '../SDDialog.react';

describe('SDDialog', () => {
  it('renders', () => {
    const component = shallow(
      id='test-id'
      children=<div>
        <p>Share this page:</p>
        <p>http://localhost</p>
      </div>
    );

    expect(component.props().id).toEqual('test-id');
    expect(component.find(Dialog).length).toBe(1);
  });
});