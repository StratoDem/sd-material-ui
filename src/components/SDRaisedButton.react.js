// @flow

import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  backgroundColor?: string,
  buttonStyle?: Object,
  children?: Node,
  className?: string,
  disableTouchRipple?: boolean,
  disabled?: boolean,
  disabledBackgroundColor?: string,
  disabledLabelColor?: string,
  fireEvent?: () => void,
  fullWidth?: boolean,
  href?: string,
  icon?: Node,
  id?: string,
  label: string,
  labelPosition?: string,
  labelStyle?: Object,
  n_clicks?: number,
  overlayStyle?: Object,
  primary?: boolean,
  rippleColor?: string,
  secondary?: boolean,
  setProps?: () => void,
  style?: Object,
};

const propTypes = {
  /**
   * Override the default background color for the button, but not the default disabled
   * background color (use disabledBackgroundColor for this).
   */
  backgroundColor: PropTypes.string,

  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The content of the button. If a label is provided via the label prop, the text within the
   * label will be displayed in addition to the content provided here.
   */
  children: PropTypes.node,

  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,

  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: PropTypes.bool,

  /**
   * Disables the button if set to true.
   */
  disabled: PropTypes.bool,

  /**
   * Override the default background color for the button when it is disabled.
   */
  disabledBackgroundColor: PropTypes.string,

  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: PropTypes.string,

  /**
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   */
  href: PropTypes.string,

  /**
   * Use this property to display an icon.
   */
  icon: PropTypes.node,

  /**
   *  The element's ID
   */
  id: PropTypes.string.isRequired,

  /**
   * The label to be displayed within the button. If content is provided via the children prop,
   * that content will be displayed in addition to the label provided here.
   */
  label: PropTypes.string.isRequired,

  /**
   * The color of the button's label.
   */
  labelColor: PropTypes.string,

  /**
   * The position of the button's label relative to the button's children.
   */
  labelPosition: PropTypes.oneOf(['before', 'after']),

  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: PropTypes.number,

  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, the button will use the theme's primary color.
   */
  primary: PropTypes.bool,

  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * If true, the button will use the theme's secondary color. If both secondary and primary are
   * true, the button will use the theme's primary color.
   */
  secondary: PropTypes.bool,

  /** Dash callback to update props on the server */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),
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
  label: '',
  overlayStyle: {},
  primary: false,
  rippleStyle: {},
  secondary: false,
  setProps: () => {},
  style: {},
};

export default class SDRaisedButton extends React.Component<Props> {
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
            <RaisedButton
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
            </RaisedButton>
          </MuiThemeProvider>
        </div>);
    } else {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton
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
            </RaisedButton>
          </MuiThemeProvider>
        </div>);
    }
  }
}

SDRaisedButton.propTypes = propTypes;
SDRaisedButton.defaultProps = defaultProps;
