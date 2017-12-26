import React from 'react';
import { shallow } from 'enzyme';
import FlatButton from 'material-ui/FlatButton';
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
    expect(component.find(FlatButton).length).toBe(1);
  });
});