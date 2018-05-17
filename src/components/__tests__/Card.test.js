import React from 'react';
import { shallow } from 'enzyme';
import { Card as MuiCard} from 'material-ui/Card';
import Card from '../Card/Card.react';

describe('Card', () => {
  it('renders', () => {
    const component = shallow(
      <Card />);

    expect(component.find(MuiCard).length).toBe(1);
  });
});
