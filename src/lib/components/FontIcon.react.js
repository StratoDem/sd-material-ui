// @flow

import React from 'react';

import MUIFontIcon from 'material-ui/FontIcon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** id for the component */
  id?: string,
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
  id: '',
  color: '',
  className: '',
  hoverColor: '',
  iconName: '',
  style: {},
};

/** Material UI FontIcon component */
export default class FontIcon extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div id={this.props.id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIFontIcon
            color={this.props.color}
            className={this.props.className}
            hoverColor={this.props.hoverColor}
            style={this.props.style}
          >
            {this.props.iconName}
          </MUIFontIcon>
        </MuiThemeProvider>
      </div>
    );
  }
}

FontIcon.defaultProps = defaultProps;
