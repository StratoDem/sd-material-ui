// @flow

import React, { Component } from 'react';
import PropTyes from 'prop-types';

import { List as MuiList } from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /**
   * These are usually ListItems that are passed to be part of the list.
   */
  children?: Node,

  /**
   * This element's ID
   */
  id: string,

  /**
   * Override the inline-styles of the root element.
   */
  style?: Object,
};

const defaultProps = {
  children: [],
  style: {},
};

export default class List extends Component<Props> {
  constructor(props:Props) {
    super(props);
  }

  render () {
    const { id, style } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiList
            style={style}
          >
            {this.props.children}
          </MuiList>
        </MuiThemeProvider>
      </div>
    );
  }
}

List.defaultProps = defaultProps;
