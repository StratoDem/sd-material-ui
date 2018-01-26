// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MuiCheckbox } from 'material-ui/Checkbox';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  checked?: boolean,
  disabled?: boolean,
  fireEvent?: () => void,
  iconStyle?: Object,
  id: string,
  inputStyle?: Object,
  label?: string,
  labelPosition?: string,
  labelStyle?: Object,
  setProps?: () => void,
  style?: Object,
};

const propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: PropTypes.bool,

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
  iconStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The element's ID
   */
  id: PropTypes.string.isRequired,

  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The text label for the checkbox
   */
  label: PropTypes.string,

  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: PropTypes.string,

  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Dash callback to update props on the server
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),
};

type State = {
  checked: boolean,
};

const defaultProps = {
  checked: false,
  disabled: false,
  fireEvent: () => {},
  iconStyle: {},
  inputStyle: {},
  label: '',
  labelPosition: 'right',
  labelStyle: {},
  setProps: () => {},
  style: {},
};

export default class Checkbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {checked: props.checked};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.checked !== null && nextProps.checked !== this.props.checked)
      this.handleClick(nextProps.checked);
  }

  handleClick = (checked: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({checked});

    this.setState({checked});

    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const { disabled, iconStyle, id, inputStyle, label, labelPosition, labelStyle,
      style} = this.props;
    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiCheckbox
              checked={this.state.checked}
              disabled={disabled}
              iconStyle={iconStyle}
              inputStyle={inputStyle}
              label={label}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              onCheck={(event: object, isInputChecked: boolean) => this.handleClick(isInputChecked)}
              style={style}
            />
          </MuiThemeProvider>
        </div>);
    } else {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiCheckbox
              checked={this.state.checked}
              disabled={disabled}
              iconStyle={iconStyle}
              inputStyle={inputStyle}
              label={label}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              onCheck={(event: object, isInputChecked: boolean) =>
                this.setState({checked: isInputChecked})}
              style={style}
            />
          </MuiThemeProvider>
        </div>);
    }
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
