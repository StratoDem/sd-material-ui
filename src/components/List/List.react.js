// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const propTypes = {
  /**
   * These are usually ListItems that are passed to be part of the list.
   */
  children: PropTypes.node,

  /**
   * This element's ID
   */
  id: PropTypes.string.isRequired,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

const defaultProps = {
  children: null,
  style: {},
};

export default class List extends Component<Props> {
  render() {
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

List.propTypes = propTypes;
List.defaultProps = defaultProps;
