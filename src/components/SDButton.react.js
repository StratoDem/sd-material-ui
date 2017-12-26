// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  backgroundColor?: string,
  children?: Node,
  className?: string,
  disableTouchRipple?: boolean,
  disabled?: boolean,
  fullWidth?: boolean,
  hoverColor?: string,
  href?: string,
  icon?: Node,
  id?: string,
  label?: string,
  labelPosition?: string,
  labelStyle?: Object,
  onClick?: () => void,
  onKeyboardFocus?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  onTouchStart?: () => void,
  primary?: boolean,
  rippleColor?: string,
  secondary?: boolean,
  style?: Object,
}

const propTypes = {
  /**
   * Color of button when mouse is not hovering over it.
   */
  backgroundColor: PropTypes.string,

  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
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
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * Color of button when mouse hovers over.
   */
  hoverColor: PropTypes.string,

  /**
   * The URL to link to when the button is clicked.
   */
  href: PropTypes.string,

  /**
   * Use this property to display an icon.
   */
  icon: PropTypes.node,

  /**
   * Label for the button.
   */
  label: PropTypes.string,

  /**
   * Place label before or after the passed children.
   */
  labelPosition: PropTypes.oneOf(['before', 'after']),

  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: PropTypes.object,

  /**
   * Callback function fired when the button is clicked.
   *
   * @param {object} event Click event targeting the button.
   */
  onClick: PropTypes.func,

  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: PropTypes.func,

  /** @ignore */
  onMouseEnter: PropTypes.func,

  /** @ignore */
  onMouseLeave: PropTypes.func,

  /** @ignore */
  onTouchStart: PropTypes.func,

  /**
   * If true, colors button according to
   * primaryTextColor from the Theme.
   */
  primary: PropTypes.bool,

  /**
   * Color for the ripple after button is clicked.
   */
  rippleColor: PropTypes.string,

  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary: PropTypes.bool,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  labelStyle: {},
  labelPosition: 'after',
  onKeyboardFocus: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onTouchStart: () => {},
  primary: false,
  secondary: false,
};

export default class SDFlatButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { backgroundColor, className, disableTouchRipple, disabled,
      fullWidth, hoverColor, href, icon, id, label, labelPosition, labelStyle,
      onClick, onKeyboardFocus, onMouseEnter, onMouseLeave, onTouchStart,
      primary, rippleColor, secondary, style} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <FlatButton
            backgroundColor={backgroundColor}
            className={className}
            disableTouchRipple={disableTouchRipple}
            disabled={disabled}
            fullWidth={fullWidth}
            hoverColor={hoverColor}
            href={href}
            icon={icon}
            label={label}
            labelPosition={labelPosition}
            labelStyle={labelStyle}
            onClick={onClick}
            onKeyboardFocus={onKeyboardFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            primary={primary}
            rippleColor={rippleColor}
            secondary={secondary}
            style={style}
          >
            {this.props.children}
          </FlatButton>
        </MuiThemeProvider>
      </div>);
  }
}

SDFlatButton.propTypes = propTypes;
SDFlatButton.defaultProps = defaultProps;
