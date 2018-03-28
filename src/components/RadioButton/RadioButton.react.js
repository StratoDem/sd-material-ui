// @flow

import React, { Component } from 'react';

import MuiRadioButton from 'material-ui/RadioButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** If true, the radio button is disabled */
  disabled?: boolean,
  /** Override the inline-styles of the icon element */
  iconStyle?: Object,
  /** Override the inline-styles of the input element */
  inputStyle?: Object,
  /** Label to appear next to button */
  label?: string,
  /** Override the inline-styles of the label element */
  labelStyle?: Object,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** value of the the radio button */
  value?: any,
};

const defaultProps = {
  disabled: false,
  iconStyle: {},
  inputStyle: {},
  label: '',
  labelStyle: {},
  style: {},
  value: '',
};

export default class RadioButton extends Component<Props> {
  props: Props;

  render() {
    const {disabled, iconStyle, inputStyle, label, labelStyle, style, value}= this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiRadioButton
            disabled={disabled}
            iconStyle={iconStyle}
            inputStyle={inputStyle}
            label={label}
            labelStyle={labelStyle}
            style={style}
            value={value}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

RadioButton.defaultProps = defaultProps;

