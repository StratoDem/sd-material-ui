// @flow

import React, { Component } from 'react';

import MuiCheckbox from 'material-ui/Checkbox';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Checkbox is checked if true */
  checked?: boolean,
  /** Checkbox is disabled if true */
  disabled?: boolean,
  /** A callback for firing events to dash */
  fireEvent?: () => void,
  /** Overrides the inline-styles of the icon element */
  iconStyle?: Object,
  /** The element's ID */
  id: string,
  /** Overrides the inline styles of the input element */
  inputStyle?: Object,
  /** The text label for the checkbox */
  label?: string,
  /** Where the label will be placed next to the checkbox */
  labelPosition?: 'left' | 'right',
  /** Overrides the inline styles of the Checkbox element label */
  labelStyle?: Object,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
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

/** Material UI Checkbox component */
export default class Checkbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {checked: props.checked};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.checked !== null && nextProps.checked !== this.props.checked)
      this.setState({checked: nextProps.checked});
  }

  handleClick = (checked: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({checked});

    this.setState({checked});

    if (this.props.fireEvent)
      this.props.fireEvent({event: 'click'});
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
    }
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

Checkbox.defaultProps = defaultProps;
