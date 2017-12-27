import React from 'react';
import { shallow } from 'enzyme';
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
    expect(component).toBe.ok;
  });
});