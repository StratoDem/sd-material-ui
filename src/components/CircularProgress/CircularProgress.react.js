// @flow

import React, { Component } from 'react';

import MUICircularProgress from 'material-ui/CircularProgress';
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
  color: '#00BCD4',
  innerStyle: {},
  size: 40,
  style: {},
  thickness: 3.5,
};

export default class CircularProgress extends Component<Props> {
  props: Props;

  render() {
    const {color, innerStyle, mode, size, style, thickness} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUICircularProgress
            color={color}
            innerStyle={innerStyle}
            mode={mode}
            size={size}
            style={style}
            thickness={thickness}
          />
        </MuiThemeProvider>
      </div>);
  }
}

CircularProgress.defaultProps = defaultProps;
