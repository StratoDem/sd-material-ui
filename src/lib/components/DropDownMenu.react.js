// @flow

import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type Props = {
  /** If true, the width of the popover will automatically be set according to the items inside
   * the menu, otherwise it will be at least the width of the select input. */
  autoWidth?: boolean,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   select
   *   filled
   *   outlined
   *   selectMenu
   *   disabled
   */
  classes?: {
    root?: string,
    select?: string,
    filled?: string,
    outlined?: string,
    selectMenu?: string,
    disabled?: string
  },
  /** If true, this dropdown will not be interactive */
  disabled?: boolean,
  /** Text to display under the menu */
  helperText?: string,
  /** The ID used for this dropdown menu */
  id: string,
  /** The text that will be displayed when no items are selected, and which will move to above the
   * menu when there is at least one selection */
  labelText?: string,
  /** The ID associated with the label */
  labelId?: string,
  /** Allows multiple selections from the dropdown if true, else only one selection */
  multiple?: boolean,
  /** An array of objects, with each object representing an option in the menu. Each object must
   * must contain either a value and primaryText keys or, if useGrouping is set to true, then an
   * object may contain a grouping key. The order of the array is important when grouping, as each
   * item will be associated with the grouping most recently seen while iterating through the array
   * Example:
   *  [
   *    {"grouping": "group A"},
   *    {"primaryText": "option 1", "value": 1},
   *    {"primaryText": "option 2", "value": 2},
   *    {"grouping": "group B"},
   *    {"primaryText": "option 3", "value": 3},
   *  ]
   *  This will group options 1 and 2 with group A, and option 3 with group B.
   */
  options?: Array<Object>,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** If true, the expanded dropdown menu will include labels for the various groups of options.
   * Those labels and groupings are set in the options prop*/
  useGrouping?: boolean,
  /** The active selection for the menu */
  value?: any,
  /** Allows selection of one of three variant types of menus: filled, outlined, or standard. Set
   * to standard by default */
  variant?: string
};

type State = {
  disabled: boolean,
  value: any,
};

const defaultProps = {
  autoWidth: false,
  classes: {},
  disabled: false,
  helperText: '',
  labelText: '',
  labelId: '',
  multiple: false,
  options: [],
  setProps: () => {},
  useGrouping: false,
  value: null,
  variant: "standard"
}

export default class DropDownMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {disabled: props.disabled, value: props.value};
  }

  buildMenuItem = (menuItem) => {
    if (this.props.useGrouping && menuItem.hasOwnProperty("grouping")) {
      return <ListSubheader key={menuItem.grouping}>{menuItem.grouping}</ListSubheader>
    } else {
      return <MenuItem key={menuItem.value} value={menuItem.value}>{menuItem.primaryText}</MenuItem>
    }
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});

    if (typeof this.props.setProps === 'function') {
      this.props.setProps({value: event.target.value});
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});

    if (nextProps.value !== this.state.value)
      this.setState({value: nextProps.value});
  };

  render() {
    const {
      id,
      classes,
      className,
      helperText,
      labelText,
      labelId,
      multiple,
      options,
      variant} = this.props;

    const label = labelText ? <InputLabel id={labelId}>{labelText}</InputLabel> : <div/>

    return (
      <div id={id}>
        <FormControl className={className} variant={variant}>
          {label}
          <Select
            classes={classes}
            disabled={this.state.disabled}
            labelId={labelId}
            multiple={multiple}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {options.map(this.buildMenuItem)}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </div>
    )
  };
}

DropDownMenu.defaultProps = defaultProps;
