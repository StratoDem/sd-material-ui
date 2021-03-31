// @flow

import React, { Component } from 'react';

import { default as MuiTextField } from '@material-ui/core/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** If true, the input element will be focused during the first mount */
  autoFocus?: boolean,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
    root
    formControl
    focused
    disabled
    colorSecondary
    underline
    error
    multiline
    fullWidth
    input
    inputMultiline
   */
  classes?: {
    root?: string,
    formControl?: string,
    focused?: string,
    disabled?: string,
    colorSecondary?: string,
    underline?: string,
    error?: string,
    multiline?: string,
    fullWidth?: string,
    input?: string,
    inputMultiline?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** 'primary' | 'secondary' */
  color?: string,
  /** Dash callback delay in ms - default is 500 ms */
  dashCallbackDelay?: number,
  /** If true, the input element will be disabled. */
  disabled?: boolean,
  /** If true, the label will be displayed in an error state */
  error?: boolean,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean,
  /** The helper text content */
  helperText?: Node,
  /** Element ID */
  id: string,
  /** If true, a textarea element will be rendered instead of an input */
  multiline?: boolean,
  /** If true, the label is displayed as required and the input element` will be required */
  required?: boolean,
  /** Dash callback to update props on the server. */
  setProps?: () => void,
  /** 'medium' | 'small' */
  size?: string,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Type of the input element. It should be a valid HTML5 input type */
  type?: string,
  /** The value of the input element, required for a controlled component */
  value?: any,
  /** 'filled' | 'outlined' | 'standard' */
  variant?: string,
};

type State = {
  disabled: boolean,
  value: any,
};

const defaultProps = {
  dashCallbackDelay: 500,
  autoFocus: false,
  classes: {},
  className: '',
  color: 'primary',
  disabled: false,
  error: false,
  fireEvent: () => {},
  fullWidth: false,
  helperText: '',
  multiline: false,
  required: false,
  setProps: () => {},
  size: 'medium',
  style: {},
  type: 'text',
  value: '',
  variant: 'standard'
};

/** Material UI TextField component */
export default class TextField extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      disabled: this.props.disabled,
      value: this.props.value,
    };
    /** _.debounce used to provide delay in callback to avoid firing callback every
     * time user input changes - waits this.props.dashCallbackDelay ms to fire callback */
    this.updateTextProps = _.debounce(this._updateTextProps, this.props.dashCallbackDelay);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});

    if (typeof this.props.setProps === 'function') {
      this.props.setProps({value: event.target.value});
    }
  };

  /**
   * executes setProps function with value to update value in props;
   * fires Dash callback event
   * @param value
   * @private
   */
  _updateTextProps = (value) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function') {
      setProps({value});
    }

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };


  render() {
    const {
      id,
      autoFocus,
      className,
      color,
      disabled,
      error,
      helperText,
      multiline,
      required,
      size,
      style,
      type,
      value,
      variant,
    } = this.props;
    this.handleChange = this.handleChange.bind(this)
    this.updateTextProps = this.updateTextProps.bind(this)
    return (
      <div className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiTextField
            id={id}
            className={className}
            style={style}
            autoFocus={autoFocus}
            color={color}
            disabled={disabled}
            error={error}
            helperText={helperText}
            multiline={multiline}
            required={required}
            size={size}
            type={type}
            value={value}
            variant={variant}
            onChange={(event) => {
              this.setState({value: event.target.value})
              this.updateTextProps(event.target.value)
            }}
          />
        </MuiThemeProvider>
      </div>);
  }
}

TextField.defaultProps = defaultProps;
