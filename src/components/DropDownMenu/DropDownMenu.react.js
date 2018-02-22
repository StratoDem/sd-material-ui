// @flow

import React, { Component } from 'react';

import { DropDownMenu as MuiDropDownMenu } from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type SD_MENU_ITEM = {
  /** If true, a checkmark will be rendered to the left of the item */
  checked?: boolean,
  /** ELements passed as children to the underlying ListItem */
  children?: Node,
  /**
   * A field able to hold any additional data a Dash user may want to include with a menu item,
   * but does not want rendered on screen.
   */
  customData: any,
  /** If true, the menu item will be disabled */
  disabled?: boolean,
  /**
   * The text to display in the dropdown menu when this item is selected (if not given,
   * the menu will use the primaryText).
   */
  label?: string,
  /**
   * The text shown in the open menu and, if label is not given, also used to show the name
   * of the selected item when the menu is closed.
   */
  primaryText: string,
  /** Can be used to render secondary text within the menu item */
  secondaryText?: string,
  /** Override the inline styles of the root element */
  style?: Object,
  /** The value of the menu item */
  value: any,
}

type Props = {
  /**
   * This is the point on the anchor that the popover's targetOrigin will attach to.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** If true, the popover will apply transitions when it gets added to the DOM. */
  animated?: boolean,
  /**
   * The width will automatically be set according to the items inside the menu. To control
   * this width in css instead, set this prop to false.
   */
  autoWidth?: boolean,
  /** The css class name of the root element. */
  className?: string,
  /** Disables the menu. */
  disabled?: boolean,
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** Overrides default SvgIcon dropdown arrow component. */
  iconButton?: Node,
  /** Overrides the styles of icon element. */
  iconStyle?: Object,
  /** The element's ID. */
  id: string,
  /** Overrides the styles of label when the DropDownMenu is inactive. */
  labelStyle?: Object,
  /** The style object to use to override underlying list style. */
  listStyle?: Object,
  /** The maximum height of the Menu when it is displayed. */
  maxHeight?: number,
  /** Override the inline-styles of menu items. */
  menuItemStyle?: Object,
  /** Overrides the styles of Menu when the DropDownMenu is displayed. */
  menuStyle?: Object,
  /** Set to true to have the DropDownMenu automatically open on mount. */
  openImmediately?: boolean,
  /**
   * Used to create the MenuItems to populate the Menu with. A Dash user passes in a list of dict
   * items, each one having at least a `value` and `primaryText`. If the 'label' is used,
   * that value will be used to render the representation of that item within the field.
   */
  options?: Array<SD_MENU_ITEM>,
  /** Override the inline-styles of selected menu items. */
  selectedMenuItemStyle?: Object,
  /** Dash callback to update props on the server. */
  setProps?: () => void,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /**
   * This is the point on the popover which will attach to the anchor's origin.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  targetOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** Overrides the inline-styles of the underline. */
  underlineStyle?: Object,
  /** The value of the selected menu item. */
  value: any,
};

type State = {
  value: any,
};

const defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'left'},
  animated: true,
  autoWidth: true,
  className: '',
  disabled: false,
  fireEvent: () => {},
  iconStyle: {},
  labelStyle: {},
  listStyle: {},
  maxHeight: 500,
  menuItemStyle: {},
  menuStyle: {},
  openImmediately: false,
  options: [],
  selectedMenuItemStyle: {},
  setProps: () => {},
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left'},
  underlineStyle: {},
};

/** A Dash material-ui DropDownMenu component */
export default class DropDownMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: this.props.value};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.value !== null && nextProps.value !== this.props.value) {
      this.handleChange({}, 0, nextProps.value);
    }
  }

  handleChange = (event: object, index: number, value: any) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({value});

    this.setState({value});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };

  buildMenuItem = (item: SD_MENU_ITEM) => (
    /**
     * At this time, the menu item cannot support nested menu items, and children passed to a
     * menu item will appear above the primaryText when the menu is open.
     */
    <MenuItem
      checked={item.checked}
      customData={item.customData}
      disabled={item.disabled}
      label={item.label}
      primaryText={item.primaryText}
      secondaryText={item.secondaryText}
      style={item.style}
      value={item.value}
    >
      {item.children}
    </MenuItem>
  );

  render() {
    const { anchorOrigin, animated, autoWidth, className, disabled, iconButton, iconStyle, id,
      labelStyle, listStyle, maxHeight, menuItemStyle, menuStyle, openImmediately,
      selectedMenuItemStyle, style, targetOrigin, underlineStyle} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDropDownMenu
            anchorOrigin={anchorOrigin}
            animated={animated}
            autoWidth={autoWidth}
            className={className}
            disabled={disabled}
            iconButton={iconButton}
            iconStyle={iconStyle}
            labelStyle={labelStyle}
            listStyle={listStyle}
            maxHeight={maxHeight}
            menuItemStyle={menuItemStyle}
            menuStyle={menuStyle}
            onChange={this.handleChange}
            openImmediately={openImmediately}
            selectedMenuItemStyle={selectedMenuItemStyle}
            style={style}
            targetOrigin={targetOrigin}
            underlineStyle={underlineStyle}
            value={this.state.value}
          >
            {this.props.options.map(this.buildMenuItem)}
          </MuiDropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

DropDownMenu.defaultProps = defaultProps;
