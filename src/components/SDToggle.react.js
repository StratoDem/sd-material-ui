// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toggle from 'material-ui/Toggle';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  disabled?: boolean,
  elementStyle?: Object,
  fireEvent?: () => void,
  iconStyle?: Object,
  id: string,
  inputStyle?: Object,
  label?: Node,
  labelPosition?: string,
  labelStyle?: Object,
  rippleStyle?: Object,
  setProps?: () => void,
  style?: Object,
  thumbStyle?: Object,
  thumbSwitchedStyle?: Object,
  toggled?: boolean,
  trackStyle?: Object,
  trackSwitchedStyle?: Object,
};

const propTypes = {
  /**
   * Will disable the toggle if true.
   */
  disabled: PropTypes.bool,

  /**
   * Overrides the inline-styles of the Toggle element.
   */
  elementStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

  /**
   * Overrides the inline-styles of the Icon element.
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
   * Label for toggle.
   */
  label: PropTypes.node,

  /**
   * Where the label will be placed next to the toggle.
   */
  labelPosition: PropTypes.string,

  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Override style of ripple.
   */
  rippleStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Dash callback to update props on the server.
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),

  /**
   * Override style for thumb.
   */
  thumbStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Override the inline styles for thumb when the toggle switch is toggled on.
   */
  thumbSwitchedStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Toggled if set to true.
   */
  toggled: PropTypes.bool,

  /**
   * Override style for track.
   */
  trackStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Override the inline styles for track when the toggle switch is toggled on.
   */
  trackSwitchedStyle: PropTypes.objectOf(PropTypes.any),
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

export default class SDToggle extends Component<Props, State> {
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
            <Toggle
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
    } else {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Toggle
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
        </div>
      );
    }
  }
}

SDToggle.propTypes = propTypes;
SDToggle.defaultProps = defaultProps;
