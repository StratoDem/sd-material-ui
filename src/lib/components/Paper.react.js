// @flow

import React, { Component } from 'react';

import MuiPaper from 'material-ui/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Children passed int othe paper element */
  children?: Node,
  /** Set ot true to generate a circular paper container */
  circle?: boolean,
  /** By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded?: boolean,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Set to false to disable CSS transitions for the paper element */
  transitionEnabled?: boolean,
  /** This number represents the zDepth of the paper shadow */
  zDepth?: propTypes.zDepth,
};

const defaultProps = {
  children: null,
  circle: false,
  rounded: true,
  style: {},
  transitionEnabled: true,
  zDepth: 1,
};

/** A Dash material-ui Paper component */
export default class Paper extends Component<Props> {
  props: Props;

  render() {
    const {circle, rounded, style, transitionEnabled, zDepth} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiPaper
            circle={circle}
            rounded={rounded}
            style={style}
            transitionEnabled={transitionEnabled}
            zDepth={zDepth}
          >
            {this.props.children}
          </MuiPaper>
        </MuiThemeProvider>
      </div>
    );
  }
}

Paper.defaultProps = defaultProps;
