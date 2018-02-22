// @flow

import React, { Component } from 'react';

import MuiToggle from 'material-ui/Toggle';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Toggle disabled? */
  disabled?: boolean,
  /** Override the inline style of the Toggle element */
  elementStyle?: Object,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** Override the inline style of the Icon element */
  iconStyle?: Object,
  /** Element ID */
  id: string,
  /** Override the inline styles of the input element */
  inputStyle?: Object,
  /** Label for toggle */
  label?: Node,
  /** Where the label will be placed next to the toggle */
  labelPosition?: 'left' | 'right',
  /** Override the inline styles of the Toggle element label */
  labelStyle?: Object,
  /** Override ripple style on click */
  rippleStyle?: Object,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
  /** Override style for thumb */
  thumbStyle?: Object,
  /** Override the inline styles for thumb when the toggle switches */
  thumbSwitchedStyle?: Object,
  /** Toggled on if true */
  toggled?: boolean,
  /** Override the inline style for track */
  trackStyle?: Object,
  /** Override the inline styles for track when the toggle switches */
  trackSwitchedStyle?: Object,
};

type State = {
  switched: boolean,
};

const defaultProps = {
  disabled: false,
  elementStyle: {},
  fireEvent: () => {},
  iconStyle: {},
  inputStyle: {},
  label: '',
  labelPosition: 'left',
  labelStyle: {},
  rippleStyle: {},
  setProps: () => {},
  style: {},
  thumbStyle: {},
  thumbSwitchedStyle: {},
  toggled: false,
  trackStyle: {},
  trackSwitchedStyle: {},
};

export default class Toggle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {switched: props.toggled};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.toggled !== null && nextProps.toggled !== this.props.toggled)
      this.handleToggle(nextProps.toggled);
  }

  handleToggle = (toggled: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({toggled});

    this.setState({switched: toggled});

    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const { disabled, elementStyle, iconStyle, id, inputStyle, label, labelPosition,
      labelStyle, rippleStyle, style, thumbStyle, thumbSwitchedStyle,
      trackStyle, trackSwitchedStyle } = this.props;

    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiToggle
              disabled={disabled}
              elementStyle={elementStyle}
              iconStyle={iconStyle}
              inputStyle={inputStyle}
              label={label}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              onToggle={(event: object, isInputChecked: boolean) =>
                this.handleToggle(isInputChecked)}
              rippleStyle={rippleStyle}
              style={style}
              thumbStyle={thumbStyle}
              thumbSwitchedStyle={thumbSwitchedStyle}
              toggled={this.state.switched}
              trackStyle={trackStyle}
              trackSwitchedStyle={trackSwitchedStyle}
            />
          </MuiThemeProvider>
        </div>
      );
    }
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiToggle
            disabled={disabled}
            elementStyle={elementStyle}
            iconStyle={iconStyle}
            inputStyle={inputStyle}
            label={label}
            labelposition={labelPosition}
            labelStyle={labelStyle}
            onToggle={(event: object, isInputChecked: boolean) =>
              this.setState({switched: isInputChecked})}
            rippleStyle={rippleStyle}
            style={style}
            thumbStyle={thumbStyle}
            thumbSwitchedStyle={thumbSwitchedStyle}
            toggled={this.state.switched}
            trackStyle={trackStyle}
            trackSwitchedStyle={trackSwitchedStyle}
          />
        </MuiThemeProvider>
      </div>);
  }
}

Toggle.defaultProps = defaultProps;
