// @flow

import React, { Component } from 'react';

import MUISubheader from 'material-ui/Subheader';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Node that will be placed inside the Subheader */
  children?: Node,
  /** If true, the Subheader will be indented */
  inset?: boolean,
  /** Override the inline-styles of the root element */
  style?: Object,
};

const defaultProps = {
  children: null,
  inset: false,
  style: {},
};

/** Material UI Subheader component */
export default class Subheader extends Component<Props> {
  props: Props;

  render() {
    const {inset, style} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUISubheader
            inset={inset}
            style={style}
          >
            {this.props.children}
          </MUISubheader>
        </MuiThemeProvider>
      </div>);
  }
}

Subheader.defaultProps = defaultProps;
