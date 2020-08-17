// @flow

import React, { Component } from 'react';

import MUIDivider from '@material-ui/core/Divider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   absolute
   *   vertical
   *   light
   *   middle
   *   inset
   *   flexItem
   * */
  classes?: {
    root?: string,
    absolute?: string,
    vertical?: string,
    light?: string,
    middle?: string,
    inset?: string,
    flexItem?: string,
  },
  /** Override the inline-styles of the root element */
  style?: Object,
};

const defaultProps = {
  classes: {},
  style: {},
};

/** Material UI Divider component */
export default class Divider extends Component<Props> {
  props: Props;

  render() {
    const {style, classes} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIDivider
            style={style}
            classes={classes}
          />
        </MuiThemeProvider>
      </div>);
  }
}

Divider.defaultProps = defaultProps;
