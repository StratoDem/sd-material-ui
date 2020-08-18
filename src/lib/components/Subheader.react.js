// @flow

import React, { Component } from 'react';

import MUISubheader from '@material-ui/core/ListSubheader';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Node that will be placed inside the Subheader */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   colorPrimary
   *   colorInherit
   *   gutters
   *   inset
   *   sticky
   * */
  classes?: {
    root?: string,
    colorPrimary?: string,
    colorInherit?: string,
    gutters?: string,
    inset?: string,
    sticky?: string,
  },
  /** If true, the Subheader will be indented */
  inset?: boolean,
  /** Override the inline-styles of the root element */
  style?: Object,
};

const defaultProps = {
  children: null,
  inset: false,
  style: {},
  classes: {}
};

/** Material UI Subheader component */
export default class Subheader extends Component<Props> {
  props: Props;

  render() {
    const {inset, style, classes} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUISubheader
            inset={inset}
            style={style}
            classes={classes}
          >
            {this.props.children}
          </MUISubheader>
        </MuiThemeProvider>
      </div>);
  }
}

Subheader.defaultProps = defaultProps;
