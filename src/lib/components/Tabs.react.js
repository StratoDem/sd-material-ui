// @flow

import React, { Component } from 'react';

import MuiTab from '@material-ui/core/Tab'
import MuiTabs from '@material-ui/core/Tabs'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Element ID */
  id?: string,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   textColorPrimary
   *   textColorSecondary
   *   textColorInherit
   *   selected
   *   disabled
   *   fullWidth
   *   wrapped
   *   wrapper
   * */
  classes?: {
    root?: string,
    textColorPrimary?: string,
    textColorSecondary?: string,
    textColorInherit?: string,
    selected?: string,
    disabled?: string,
    fullWidth?: string,
    wrapped?: string,
    wrapper?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** Pass Tab components as children */
  children?: Node,
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Array of tab properties. Available props:
   * classes
   * disabled
   * disableRipple
   * disableFocusRipple
   * icon
   * label
   * value
   * wrapped
   * */
  tabPropsArray?: Array<{
    classes?: Object,
    disabled: boolean,
    disableFocusRipple: boolean,
    disableRipple: boolean,
    iconClass: string,
    label: string,
    value: any,
    wrapped: boolean,
  }>,
  /** Makes Tabs controllable and selects the tab whose value prop matches this prop */
  value?: any,
};

type State = {
  value: any
};

const defaultProps = {
  children: [],
  id: '',
  className: null,
  style: {},
  value: false,
  setProps: () => {},
  fireEvent: () => {},
  classes: {},
};

/** Material UI Tabs component */
export default class Tabs extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: props.value};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    const _value = nextProps.value
    if (nextProps.value !== null && nextProps.value !== this.props.value) {
      this.setState({value: _value});
      this.props.setProps({value: _value})
    }
  }

  handleChange = (event: Object, index: number) => {
    const { setProps } = this.props;
    const _value = this.props.tabPropsArray[index].value
    if (typeof setProps === 'function') {
      setProps({value: _value});
      this.setState({value: _value})
    }

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };

  render() {
    const { id, children, tabPropsArray, value, classes, className} = this.props;
    this.handleChange = this.handleChange.bind(this)

    return (
      <div id={id} className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiTabs
            onChange={this.handleChange}
            value={value}
            classes={classes}
          >
            {children.map((child, idx) =>
              <MuiTab key={idx} {...tabPropsArray[idx]}/>)}
          </MuiTabs>
        </MuiThemeProvider>
      </div>);
  }
}

Tabs.defaultProps = defaultProps;
