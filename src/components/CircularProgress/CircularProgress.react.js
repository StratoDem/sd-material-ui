import React, { Component } from 'react';

import MUICircularProgress from 'material_ui/CircularProgress';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Override the progress's color */
  color?: string,
  /** Style for inner wrapper div */
  innerStyle?: Object,
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
  color: {},
  innerStyle: {},
  size: 40,

}
