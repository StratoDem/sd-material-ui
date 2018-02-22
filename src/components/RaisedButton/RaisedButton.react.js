// @flow

import React from 'react';

import MuiRaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /**
   * Override the default background color for the button, but not the default disabled
   * background color (use disabledBackgroundColor for this).
   */
  backgroundColor?: string,
  /** Override the inline styles of the button element. */
  buttonStyle?: Object,
  /**
   * The content of the button. If a label is provided via the label prop, the text within the
   * label will be displayed in addition to the content provided here.
   */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** If true, the element's ripple effect will be disabled */
  disableTouchRipple?: boolean,
  /** Button is disabled? */
  disabled?: boolean,
  /** Override the default background for the disabled button */
  disabledBackgroundColor?: string,
  /** Override the default label color for the disabled button */
  disabledLabelColor?: string,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** If true, the button will take up the full width of its container */
  fullWidth?: boolean,
  /** The URL to link to when the button is clicked */
  href?: string,
  /** Use this property to display an icon */
  icon?: Node,
  /** Element ID */
  id?: string,
  /**
   * The label to be displayed within the button. If content is provided via the children prop,
   * that content will be displayed in addition to the label provided here.
   */
  label: string,
  /** Color of the button's label */
  labelColor?: string,
  /** The position of the button's label relative to its children */
  labelPosition?: 'before' | 'after',
  /** Override the inline styles of the label element */
  labelStyle?: Object,
  /** An integer that represents the number of times this element has been clicked */
  n_clicks?: number,
  /** Override the inline style of the button overlay */
  overlayStyle?: Object,
  /** If true, the button will use the theme's primary color */
  primary?: boolean,
  /** Color of the ripple on click */
  rippleColor?: string,
  /** Override the inline style of the ripple element */
  rippleStyle?: Object,
  /**
   * If true, the button will use the theme's secondary color. If both secondary and primary are
   * true, the button will use the theme's primary color.
   */
  secondary?: boolean,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
};

const defaultProps = {
  backgroundColor: '',
  buttonStyle: {},
  children: null,
  className: '',
  disableTouchRipple: false,
  disabled: false,
  disabledBackgroundColor: '',
  disabledLabelColor: '',
  fireEvent: () => {},
  fullWidth: false,
  href: '',
  icon: null,
  labelColor: '',
  labelPosition: 'after',
  labelStyle: {},
  n_clicks: 0,
  overlayStyle: {},
  primary: false,
  rippleStyle: {},
  secondary: false,
  setProps: () => {},
  style: {},
};

export default class RaisedButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.setProps) this.props.setProps({n_clicks: this.props.n_clicks + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  }

  render() {
    const { backgroundColor, buttonStyle, className, disabled,
      disabledBackgroundColor, disabledLabelColor, disableTouchRipple, fullWidth, href,
      icon, id, label, labelColor, labelPosition, labelStyle, overlayStyle, primary, rippleColor,
      rippleStyle, secondary, style } = this.props;

    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiRaisedButton
              backgroundColor={backgroundColor}
              buttonStyle={buttonStyle}
              className={className}
              disabled={disabled}
              disabledBackgroundColor={disabledBackgroundColor}
              disabledLabelColor={disabledLabelColor}
              disableTouchRipple={disableTouchRipple}
              fullWidth={fullWidth}
              href={href}
              icon={icon}
              label={label}
              labelColor={labelColor}
              labelPosition={labelPosition}
              labelStyle={labelStyle}
              onClick={this.handleClick}
              overlayStyle={overlayStyle}
              primary={primary}
              rippleColor={rippleColor}
              rippleStyle={rippleStyle}
              secondary={secondary}
              style={style}
            >
              {this.props.children}
            </MuiRaisedButton>
          </MuiThemeProvider>
        </div>);
    }
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiRaisedButton
            backgroundColor={backgroundColor}
            buttonStyle={buttonStyle}
            className={className}
            disabled={disabled}
            disabledBackgroundColor={disabledBackgroundColor}
            disabledLabelColor={disabledLabelColor}
            disableTouchRipple={disableTouchRipple}
            fullWidth={fullWidth}
            href={href}
            icon={icon}
            label={label}
            labelColor={labelColor}
            labelPosition={labelPosition}
            labelStyle={labelStyle}
            overlayStyle={overlayStyle}
            primary={primary}
            rippleColor={rippleColor}
            rippleStyle={rippleStyle}
            secondary={secondary}
            style={style}
          >
            {this.props.children}
          </MuiRaisedButton>
        </MuiThemeProvider>
      </div>);
  }
}

RaisedButton.defaultProps = defaultProps;
