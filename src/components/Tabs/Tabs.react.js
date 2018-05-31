// @flow

import React, { Component } from 'react';

import MuiTabs from 'material-ui/Tabs';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Element ID */
  id: string,
  /** CSS class name of the root element */
  className?: string,
  /** CSS class name of the content's container */
  contentContainerClassName?: string,
  /** Pass Tab components as children */
  children: Node,
  /** Override the inline-styles of the content's container */
  contentContainerStyle?: Object,
  /** Specify the initial visible tab index */
  initialSelectedIndex?: number,
  /** Override the inline-styles of the InkBar */
  inkBarStyle?: Object,
  /** Override the inline-styles of the InkBar container */
  inkBarContainerStyle?: Object,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Override the inline-styles of tab-labels container */
  tabItemContainerStyle?: Object,
  /** Override the inline-styles of the tab template */
  tabTemplateStyle?: Object,
  /** Makes Tabs controllable and selects the tab whose value prop matches this prop */
  value?: any,
};

type State = {
};

const defaultProps = {
  className: undefined,
  contentContainerClassName: undefined,
  contentContainerStyle: {},
  initialSelectedIndex: 0,
  inkBarStyle: {},
  inkBarContainerStyle: {},
  style: {},
  tabItemContainerStyle: {},
  value: undefined,
};

export default class Tabs extends Component<Props, State> {
  render() {
    const { id, children, ...otherProps } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiTabs {...otherProps}>
            {children}
          </MuiTabs>
        </MuiThemeProvider>
      </div>);
  }
}

Tabs.defaultProps = defaultProps;
