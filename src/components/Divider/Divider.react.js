// @flow

import React, { Component } from 'react';

import MUIDivider from 'material-ui/Divider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** If true, the Divider will be indented */
  inset?: boolean,
  /** Override the inline-styles of the root element */
  style?: Object,
};

const defaultProps = {
  inset: false,
  style: {},
};

export default class Divider extends Component<Props> {
  props: Props;

  render() {
    const {inset, style} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIDivider
            inset={inset}
            style={style}
          />
        </MuiThemeProvider>
      </div>);
  }
}

Divider.defaultProps = defaultProps;

