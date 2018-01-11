// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  anchorOrigin?: object,
  checkable?: boolean,
  checked?: boolean,
  children?: Node,
  disabled?: boolean,
  fireEvent?: () => void,
  innerDivStyle?: object,
  insetChildren?: boolean,
  id: string,
  label?: string,
  menuItems?: Node,
  primaryText?: string,
  secondaryText?: string,
  setProps?: () => void,
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
   * Whether this item can be checked or not.
   */
  checkable: PropTypes.bool,

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
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

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
   * Dash callback to update props on the server
   */
  setProps: PropTypes.func,

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
  checkable: false,
  checked: false,
  children: null,
  disabled: false,
  fireEvent: () => {},
  innerDivStyle: {},
  insetChildren: false,
  label: '',
  menuItems: null,
  primaryText: '',
  secondaryText: '',
  setProps: () => {},
  style: {},
  targetOrigin: {},
  value: null,
};

type State = {
  checked: boolean,
};

export default class SDMenuItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {checked: props.checked};
  }

  // Removing this func made the check state update correctly (it was being called twice)
  // but it also is now producing this error in the console:
  // [Violation] Added non-passive event listener to a scroll-blocking 'wheel' event. Consider
  // marking event handler as 'passive' to make the page more responsive.
  // See https://www.chromestatus.com/feature/5745543795965952

  // a possible alternative was to remove the call to changeChecked from inside handleClick,
  // but that not only didn't work, but stopped the Dash callback from functioning at all

  // componentWillReceiveProps(nextProps: Props): void {
  //   if (this.props.checkable) {
  //     if (nextProps.checked !== null && nextProps.checked !== this.props.checked) {
  //       this.changeChecked(nextProps.checked);
  //     }
  //   }
  // }

  changeChecked = (checked: object) => {
    const { setProps } = this.props;

    this.setState((state: State) => ({checked: !this.state.checked}));

    if (typeof setProps === 'function') {
      setProps({checked: !this.props.checked});
    }
  };

  handleClick = (wasClicked: object) => {
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    if (this.props.checkable) this.changeChecked(wasClicked);
  };

  render() {
    const { anchorOrigin, disabled, innerDivStyle, insetChildren,
      id, label, menuItems, primaryText, secondaryText, style, targetOrigin,
      value } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MenuItem
            anchorOrigin={anchorOrigin}
            checked={this.state.checked}
            disabled={disabled}
            innerDivStyle={innerDivStyle}
            insetChildren={insetChildren}
            label={label}
            // menuItems={React.Children.toArray(menuItems)}
            menuItems={menuItems}
            onClick={(wasItemClicked: object) => this.handleClick(wasItemClicked)}
            primaryText={primaryText}
            secondaryText={secondaryText}
            style={style}
            targetOrigin={targetOrigin}
            value={value}
          >
            {this.props.children}
          </MenuItem>
        </MuiThemeProvider>
      </div>
    );
  }
}

SDMenuItem.propTypes = propTypes;
SDMenuItem.defaultProps = defaultProps;
