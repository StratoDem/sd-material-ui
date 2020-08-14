// @flow

import React from 'react';

import MuiIcon from '@material-ui/core/Icon'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** id for the component */
  id?: string,
  /** defines specific icon when using public icon font */
  iconName?: string,
  /** override inline-styles of root element */
  style?: Object,
};

const defaultProps = {
  id: '',
  className: '',
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
          <MuiIcon
            className={this.props.className}
            classes={this.props.classes}
            style={this.props.style}
          >
            {this.props.iconName}
          </MuiIcon>
        </MuiThemeProvider>
      </div>
    );
  }
}

FontIcon.defaultProps = defaultProps;
