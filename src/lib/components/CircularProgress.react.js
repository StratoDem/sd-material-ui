// @flow

import React, { Component } from 'react';

import MUICircularProgress from '@material-ui/core/CircularProgress';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   static
   *   indeterminate
   *   colorPrimary
   *   colorSecondary
   *   circle
   *   circleStatic
   *   circleIndeterminate
   *   circleDisableShrink
   * */
  classes?: {
    root?: string,
    static?: string,
    indeterminate?: string,
    colorPrimary?: string,
    colorSecondary?: string,
    circle?: string,
    circleStatic?: string,
    circleIndeterminate?: string,
    circleDisableShrink?: string,
  },
  /** Override the progress's color */
  color?: string,
  /** The mode of show your progress, for now, will always be indeterminate */
  mode: 'indeterminate',
  /** The diameter of the progress in pixels */
  size?: number,
  /** Override the inline-style of the root element */
  style?: Object,
  /** Stroke width in pixels */
  thickness?: number,
};

const defaultProps = {
  color: 'inherit',
  innerStyle: {},
  size: 40,
  style: {},
  thickness: 3.5,
  classes: {},
  mode: 'indeterminate',
};

/** Material UI CircularProgress component */
export default class CircularProgress extends Component<Props> {
  props: Props;

  render() {
    const {color, mode, size, style, thickness, classes} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUICircularProgress
            color={color}
            mode={mode}
            size={size}
            style={style}
            thickness={thickness}
            classes={classes}
          />
        </MuiThemeProvider>
      </div>);
  }
}

CircularProgress.defaultProps = defaultProps;
