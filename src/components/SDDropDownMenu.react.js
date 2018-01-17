// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type SD_MENU_ITEM = {
  label?: string,
  primaryText: string,
  value: number,
}

type Props = {
  anchorOrigin?: object,
  animated?: boolean,
  autoWidth?: boolean,
  className?: string,
  disabled?: boolean,
  fireEvent?: () => void,
  iconButton?: Node,
  iconStyle?: object,
  id: string,
  labelStyle?: object,
  listStyle?: object,
  maxHeight?: number,
  menuItemStyle?: object,
  menuStyle?: object,
  multiple?: boolean,
  openImmediately?: boolean,
  options?: Array<SD_MENU_ITEM>,
  selectedMenuItemStyle?: object,
  setProps?: () => void,
  style?: object,
  targetOrigin?: object,
  underlineStyle?: object,
  value?: any,
};

const propTypes = {
  /**
   * This is the point on the anchor that the popover's targetOrigin will attach to.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  anchorOrigin: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, the popover will apply transitions when it gets added to the DOM.
   */
  animated: PropTypes.bool,

  /**
   * The width will automatically be set according to the items inside the menu. To control
   * this width in css instead, set this prop to false.
   */
  autoWidth: PropTypes.bool,

  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,

  /**
   * Disables the menu.
   */
  disabled: PropTypes.bool,

  /**
   * Dash-assigned callback that gets fired when the input changes.
   */
  fireEvent: PropTypes.func,

  /**
   * Overrides default SvgIcon dropdown arrow component.
   */
  iconButton: PropTypes.node,

  /**
   * Overrides the styles of icon element.
   */
  iconStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The element's ID.
   */
  id: PropTypes.string.isRequired,

  /**
   * Overrides the styles of label when the DropDownMenu is inactive.
   */
  labelStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The style object to use to override underlying list style.
   */
  listStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The maximum height of the Menu when it is displayed.
   */
  maxHeight: PropTypes.number,

  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Overrides the styles of Menu when the DropDownMenu is displayed.
   */
  menuStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, value must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,

  /**
   * Set to true to have the DropDownMenu automatically open on mount.
   */
  openImmediately: PropTypes.bool,

  /**
   * Used to create the MenuItems to populate the Menu with. A Dash user passes in a list of dict
   * items, each one having at least a `value` and `primaryText`. If the 'label' is used,
   * that value will be used to render the representation of that item within the field.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    primaryText: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),

  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Dash callback to update props on the server.
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),

  /**
   * This is the point on the popover which will attach to the anchor's origin.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  targetOrigin: PropTypes.objectOf(PropTypes.any),

  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * If multiple is true, an array of the values of the selected menu items. Otherwise, the value
   * of the selected menu item. If provided, the menu will be a controlled component.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

type State = {
  value: number,
};

const defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'left'},
  animated: true,
  autoWidth: true,
  className: '',
  disabled: false,
  fireEvent: () => {},
  iconButton: null,
  iconStyle: {},
  labelStyle: {},
  listStyle: {},
  maxHeight: 500,
  menuItemStyle: {},
  menuStyle: {},
  multiple: false,
  openImmediately: false,
  options: [],
  selectedMenuItemStyle: {},
  setProps: () => {},
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left'},
  underlineStyle: {},
  value: 1,
};

export default class SDDropDownMenu extends Component<Props, State> {
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
    <MenuItem
      label={item.label}
      primaryText={item.primaryText}
      value={item.value}
    />
  );

  render() {
    const { anchorOrigin, animated, autoWidth, className, disabled, iconButton,
      iconStyle, id, labelStyle, listStyle, maxHeight, menuItemStyle, menuStyle, multiple,
      openImmediately, selectedMenuItemStyle, style, targetOrigin,
      underlineStyle} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <DropDownMenu
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
            multiple={multiple}
            onChange={this.handleChange}
            openImmediately={openImmediately}
            selectedMenuItemStyle={selectedMenuItemStyle}
            style={style}
            targetOrigin={targetOrigin}
            underlineStyle={underlineStyle}
            value={this.state.value}
          >
            {this.props.options.map(this.buildMenuItem)}
          </DropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

SDDropDownMenu.propTypes = propTypes;
SDDropDownMenu.defaultProps = defaultProps;
