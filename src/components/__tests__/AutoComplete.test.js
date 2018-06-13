import React from 'react';
import sinon from 'sinon';
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

  it('fires callback event when searchText changes', () => {
    var clock = sinon.useFakeTimers();
    const fakeFireEvent = jest.fn();
    const component = mount(
      <AutoComplete id='test-id-4' fireEvent={fakeFireEvent} dashCallbackDelay={300}/>);

    component.find(MuiAutoComplete).props().onUpdateInput('blue',[],{});

    clock.tick(component.props().dashCallbackDelay);

    expect(fakeFireEvent.mock.calls.length).toEqual(1);
  });

  it('applies appropriate filter', () => {
    const component = shallow(
      <AutoComplete
        dataSource={['Harry', 'Hermione', 'Ron', 'Luna', 'Neville', 'Ginny']}
        filter={'caseInsensitiveFilter'}
      />);

    expect(
      component
        .find(MuiAutoComplete)
        .props().filter)
      .toEqual(MuiAutoComplete.caseInsensitiveFilter);
  });

  it('renders with no callblacks', () => {
    const blankFunc = () => { return null; };
    const component = shallow(
      <AutoComplete fireEvent={blankFunc} />);

    expect(component).toBe.ok;
  });

  it('handles exactMatch with an array of objects', () => {
    const setProps = jest.fn();
    const component = shallow(
      <AutoComplete
        id="my-id"
        dataSource={[
          {label: 'test1', value: 3},
          {label: 'test2', value: 4},
          {label: 'test3', value: {wowAnObject: 'test'}},
        ]}
        exactMatch
        setProps={setProps}
      />);

    component.setProps({searchText: 'test2'});
    expect(setProps.mock.calls[0][0]).toEqual({searchValue: 4});
    expect(component.state('searchText')).toBe('test2');
  });
});
