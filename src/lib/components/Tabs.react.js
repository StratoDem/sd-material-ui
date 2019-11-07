// @flow

import React, { Component } from 'react';

import { Tabs as MuiTabs, Tab as MuiTab } from 'material-ui/Tabs';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Element ID */
  id?: string,
  /** CSS class name of the root element */
  className?: string,
  /** CSS class name of the content's container */
  contentContainerClassName?: string,
  /** Pass Tab components as children */
  children?: Node,
  /** Override the inline-styles of the content's container */
  contentContainerStyle?: Object,
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** Specify the initial visible tab index */
  initialSelectedIndex?: number,
  /** Override the inline-styles of the InkBar */
  inkBarStyle?: Object,
  /** Override the inline-styles of the InkBar container */
  inkBarContainerStyle?: Object,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Override the inline-styles of tab-labels container */
  tabItemContainerStyle?: Object,
  /** The values that will be passed to the individual Tab components inside Tabs. Allowed values:
   *    buttonStyle: Object
   *    className: string
   *    icon: Node
   *    label: Node
   *    style: Object
   *    value: any
   * */
  tabPropsArray: Array<Object>,
  /** Override the inline-styles of the tab template */
  tabTemplateStyle?: Object,
  /** Makes Tabs controllable and selects the tab whose value prop matches this prop */
  value?: any,
};

type State = {
  selectedIndex: number,
};

const defaultProps = {
  children: [],
  id: '',
  className: undefined,
  contentContainerClassName: undefined,
  contentContainerStyle: {},
  initialSelectedIndex: 0,
  inkBarStyle: {},
  inkBarContainerStyle: {},
  style: {},
  tabItemContainerStyle: {},
  value: undefined,
  setProps: () => {},
  fireEvent: () => {},
};

/** Material UI Tabs component */
export default class Tabs extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {selectedIndex: props.initialSelectedIndex};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.value !== null && nextProps.value !== this.props.value) {
      this.setState({selectedIndex: nextProps.value});
    }
  }

  handleChange = (event: object, index: number, obj: any) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({value: obj.props.value});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };

  render() {
    const { id, children, tabPropsArray, value, ...otherProps } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiTabs
            onChange={this.handleChange}
            selectedIndex={this.state.selectedIndex}
            value={value}
            {...otherProps}
          >
            {this.props.children.map((child, idx) =>
              <MuiTab {...tabPropsArray[idx]}>{child}</MuiTab>)}
          </MuiTabs>
        </MuiThemeProvider>
      </div>);
  }
}

Tabs.defaultProps = defaultProps;
