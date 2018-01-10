// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  anchorOrigin?: object,
  checked?: boolean,
  children?: Node,
  disabled?: boolean,
  innerDivStyle?: object,
  insetChildren?: boolean,
  id: string,
  label?: string,
  menuItems?: Node,
  primaryText?: string,
  secondaryText?: string,
  style?: object,
  targetOrigin?: object,
  value?: number,
};

const propTypes = {
  /**
   * Location of the anchor for the popover of nested `MenuItem`
   * elements.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  anchorOrigin: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, a left check mark will be rendered.
   */
  checked: PropTypes.bool,

  /**
   * Elements passed as children to the underlying menu item.
   */
  children: PropTypes.node,

  /**
   * Disables this menu item.
   */
  disabled: PropTypes.bool,

  /**
   * The element's ID.
   */
  id: PropTypes.string.isRequired,

  /**
   * Override the inline-styles of the inner div.
   */
  innerDivStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, the children will be indented.
   * This is only needed when there is no `leftIcon`.
   */
  insetChildren: PropTypes.bool,

  /**
   * A complementary description of the selected item.
   */
  label: PropTypes.string,

  /**
   * `MenuItem` elements to nest within the menu item.
   */
  menuItems: PropTypes.node,

  /**
   * The text used when displaying this menu item in its menu, or as the menu's selection
   */
  primaryText: PropTypes.string,

  /**
   * Additional text included alongside the primaryText
   */
  secondaryText: PropTypes.string,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),

  /**
   * Location on the popover of nested `MenuItem` elements that will attach
   * to the anchor's origin.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  targetOrigin: PropTypes.objectOf(PropTypes.any),

  /**
   * The value of the menu item.
   */
  value: PropTypes.number,
};

const defaultProps = {
  anchorOrigin: {},
  checked: false,
  children: null,
  disabled: false,
  innerDivStyle: {},
  insetChildren: false,
  label: '',
  menuItems: null,
  primaryText: '',
  secondaryText: '',
  style: {},
  targetOrigin: {},
  value: null,
};

type State = {
  checked: boolean,
  open: boolean,
};

export default class SDMenuItem extends Component<Props, State> {

}
