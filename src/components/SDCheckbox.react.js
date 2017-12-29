// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'material-ui/Checkbox';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  checked?: boolean,
  checkedIcon?: Element,
  defaultChecked?: boolean,
  disabled?: boolean,
  fireEvent?: () => void,
  iconStyle?: Object,
  id: string,
  inputStyle?: Object,
  labelPosition?: string,
  labelStyle?: Object,
  setProps?: () => void,
  style?: Object,
  uncheckedIcon?: Element,
  valueLink?: Object,
};

const propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: PropTypes.bool,

  /**
   * The SvgIcon to use for the checked state. This is useful to create icon toggles.
   */
  checkedIcon: PropTypes.element,

  /**
   * The default state of our checkbox component. Warning: This cannot be used in conjunction with
   * checked. Decide between using a controlled or uncontrolled input element and remove one of
   * these props.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Disabled if true.
   */
  disabled: PropTypes.bool,

  /**
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: PropTypes.object,

  /**
   * The element's ID
   */
  id: PropTypes.string.isRequired,

  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: PropTypes.object,

  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: PropTypes.string,

  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: PropTypes.object,

  /**
   * Dash callback to update props on the server
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,

  /**
   * The SvgIcon to use for the unchecked state. This is useful to create icon toggles.
   */
  uncheckedIcon: PropTypes.element,

  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fireEvent: () => {},
  labelPosition: 'right',
  setProps: () => {},
};

export default class SDCheckbox extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (checked: boolean): void => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({checked});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const { checked, checkedIcon, defaultChecked, disabled, iconStyle, id, inputStyle,
      labelPosition, labelStyle, style, uncheckedIcon, valueLink } = this.props;
    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Checkbox
              checked={checked}
              checkedIcon={checkedIcon}
              defaultChecked={defaultChecked}
              disabled={disabled}
              iconStyle={iconStyle}
              inputStyle={inputStyle}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              onCheck={this.handleClick}
              style={style}
              uncheckedIcon={uncheckedIcon}
              valueLink={valueLink}
            />
          </MuiThemeProvider>
        </div>);
    } else {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Checkbox
              checked={checked}
              checkedIcon={checkedIcon}
              defaultChecked={defaultChecked}
              disabled={disabled}
              iconStyle={iconStyle}
              inputStyle={inputStyle}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              style={style}
              uncheckedIcon={uncheckedIcon}
              valueLink={valueLink}
            />
          </MuiThemeProvider>
        </div>);
    }
  }
}

SDCheckbox.propTypes = propTypes;
SDCheckbox.defaultProps = defaultProps;
