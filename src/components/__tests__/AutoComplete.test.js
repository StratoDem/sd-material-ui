import React from 'react';
import { mount, shallow } from 'enzyme';
import MuiAutoComplete from 'material-ui/AutoComplete';
import AutoComplete from '../AutoComplete/AutoComplete.react';

describe('AutoComplete', () => {
  it('renders', () => {
    const component = shallow(
      <AutoComplete
        id='test-id-1' />
    );

    expect(component.props().id).toEqual('test-id-1');
    expect(component).toBe.ok;
  });

  it('updates value based on selections', () => {
    const component = mount(
      <AutoComplete id='test-id-2'/>
    );

    expect(component.state('searchText')).toEqual('');
    component.find(MuiAutoComplete).props().onUpdateInput('orange', [], {});
    expect(component.state('searchText')).toEqual('orange');
  });

  it('uses the styles provided', () => {
    const component = shallow(
      <AutoComplete
        id='test-id-3'
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        animated={true}
        dataSource={['Harry', 'Hermione', 'Ron', 'Luna', 'Neville', 'Ginny']}
        errorText={'Wrong!'}
        open={true}
        style={{padding: 20}}
      />);

    expect(
      component
        .find(MuiAutoComplete)
        .props().anchorOrigin)
      .toEqual({'vertical': 'top', 'horizontal': 'right'});
    expect(
       component
         .find(MuiAutoComplete)
         .props().animated)
      .toEqual(true);
    expect(
      component
        .find(MuiAutoComplete)
        .props().dataSource)
      .toEqual(['Harry', 'Hermione', 'Ron', 'Luna', 'Neville', 'Ginny']);
    expect(
      component
        .find(MuiAutoComplete)
        .props().errorText)
      .toEqual('Wrong!');
    expect(
      component
        .find(MuiAutoComplete)
        .props().open)
      .toEqual(true);
    expect(
      component
        .find(MuiAutoComplete)
        .props().style)
      .toEqual({padding: 20});
  })
});
