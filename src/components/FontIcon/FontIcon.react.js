// @flow

import React, { Component } from 'react';

import MUIFontIcon from 'material-ui/FontIcon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** font color of the font icon;
   * If not specified, this component will default
   * to muiTheme.palette.textColor
   * */
  color?: string,
  /** defines specific icon when using custom icon font
   * or defines font when using public icon font
   */
  className?: string,
  /** icon color when the mouse hovers over the icon */
  hoverColor?: string,
  /** defines specific icon when using public icon font */
  iconName?: string,
  /** override inline-styles of root element */
  style?: Object,
};

const defaultProps = {
  color: '',
  className: '',
  hoverColor: '',
  iconName: '',
  style: {},
};

export default class FontIcon extends Component<Props> {
  props: Props;

  render() {
    const {color, className, hoverColor, iconName, style} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIFontIcon
            color={color}
            className={className}
            hoverColor={hoverColor}
            style={style}
          >
            {this.props.iconName}
          </MUIFontIcon>
        </MuiThemeProvider>
      </div>
    );
  }
}

FontIcon.defaultProps = defaultProps;
