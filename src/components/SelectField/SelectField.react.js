// @flow

import React, { Component } from 'react';

import MuiSelectField from 'material-ui/SelectField';
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
   * If true, the width will automatically be set according to the items inside the menu.
   * To control the width in CSS instead, leave this prop set to false.
   * */
  autoWidth?: boolean,
  /**
   * The MenuItem elements to populate the select field with.
   * If the menu items have a label prop, that value will represent
   * the selected menu item in the rendered select field.
   */
  children?: Node,
  /** If true, select field will be disabled */
  disabled?: boolean,
  /** Object that can handle and override any property of component DropDownMenu */
  dropDownMenuProps?: Object,
  /** Override inline-styles of the error element */
  errorStyle?: Object,
  /** Error content to display */
  errorText?: Node,
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** If true, floating label will float even when no value selected */
  floatingLabelFixed?: boolean,
  /** Override inline-styles of floating label */
  floatingLabelStyle?: Object,
  /** Content of the floating lable */
  floatingLabelText?: Node,
  /** if ture, the select field will take up full width of container */
  fullWidth?: boolean,
  /** override inline-styles of hint element */
  hintStyle?: Object,
  /** hint content to display */
  hintText?: Node,
  /** Component id */
  id?: string,
  /** Override inline-styles of icon element */
  iconStyle?: Object,
  /** Override the label style when the select field is inactive */
  labelStyle?: Object,
  /** Override the inline-styles of the underlying List element */
  listStyle?: Object,
  /** Override the default max-height of the underlying DropDownMenu element */
  maxHeight?: number,
  /** Override the inline-styles of menu items */
  menuItemStyle?: Object,
  /** Override the inline-styles of the underlying DropDownMenu element */
  menuStyle?: Object,
  /** If true, value must be an array and the menu will support multiple selections */
  multiple?: boolean,
  /**
   * Used to create the MenuItems to populate the Menu with. A Dash user passes in a list of dict
   * items, each one having at least a `value` and `primaryText`. If the 'label' is used,
   * that value will be used to render the representation of that item within the field.
   */
  options?: Array<SD_MENU_ITEM>,
  /** Override the inline-styles of selected menu items */
  selectedMenuItemStyle?: Object,
  /** Dash callback to update props on the server. */
  setProps?: () => void,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** id prop for the text field */
  textId?: string,
  /** Override the inline-styles of the underline element when the select
   * field is disabled
   */
  underlineDisabledStyle?: Object,
  /** Override the inline-styles of the underline element when the select
   * field is focused
   */
  underlineFocusStyle?: Object,
  /** Override the inline-styles of the underline element */
  underlineStyle?: Object,
  /** if multiple is true, an array of the values of the selected menu items.
   * Otherwise, the value of the selected menu item. If provided, the menu
   * will be a controlled component.
   */
  value?: any,
};

type State = {
  value: any,
};

const defaultProps = {
  autoWidth: false,
  children: null,
  disabled: false,
  dropDownMenuProps: {},
  errorStyle: {},
  errorText: null,
  fireEvent: () => {},
  floatingLabelFixed: false,
  floatingLabelStyle: {},
  floatingLabelText: null,
  fullWidth: false,
  hintStyle: {},
  hintText: null,
  iconStyle: {},
  labelStyle: {},
  listStyle: {},
  maxHeight: 500,
  menuItemStyle: {},
  menuStyle: {},
  multiple: false,
  options: [],
  selectedMenuItemStyle: {},
  setProps: () => {},
  style: {},
  textId: "",
  underlineDisabledStyle: {},
  underlineFocusStyle: {},
  underlineStyle: {},
};

/** A Dash material-ui SelectedField component */
export default class SelectedField extends Component<Props, State> {
  constructor(props: Props) {
    supr(props);
    this.state = {value: this.props.value};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.value !== null && nextProps.value !== this.props.value) {
      this.handleChange({}, 0, nextProps.value);
    }
  }

  handleChange = (event: object, index: number, value: any) => {
    const { setProps } = this.props;
  }
}

