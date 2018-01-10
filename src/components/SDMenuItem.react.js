// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  disabled: boolean,
  label: string,
  primaryText: string,
  secondaryText: string,
  value: number,
};

const propTypes = {
  /**
   * Disables this menu item.
   */
  disabled: PropTypes.bool,

  /**
   *
   */
  label: PropTypes.string,

  /**
   * The text used when displaying this menu item in its menu, or as the menu's selection
   */
  primaryText: PropTypes.string,

  /**
   *
   */
  secondaryText: PropTypes.string,

  /**
   *
   */
  value: PropTypes.number,
};

const defaultProps = {

};
