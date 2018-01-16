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
  fireEvent?: () => void,
  fullWidth?: boolean,
  hoverColor?: string,
  href?: string,
  icon?: Node,
  id?: string,
  label: string,
  labelPosition?: string,
  labelStyle?: Object,
  n_clicks?: number,
  primary?: boolean,
  rippleColor?: string,
  secondary?: boolean,
  setProps?: () => void,
  style?: Object,
};

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
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

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

  /* The element's ID */
  id: PropTypes.string.isRequired,

  /**
   * Label for the button.
   */
  label: PropTypes.string.isRequired,

  /**
   * Place label before or after the passed children.
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

  /** Dash callback to update props on the server */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
  backgroundColor: '',
  children: null,
  className: '',
  disableTouchRipple: false,
  disabled: false,
  fireEvent: () => {},
  fullWidth: false,
  hoverColor: '',
  href: '',
  icon: null,
  label: '',
  labelPosition: 'after',
  labelStyle: {},
  n_clicks: 0,
  primary: false,
  rippleColor: '',
  secondary: false,
  setProps: () => {},
  style: {},
};

export default class SDFlatButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.setProps) this.props.setProps({n_clicks: this.props.n_clicks + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  }

  render() {
    const { backgroundColor, className, disableTouchRipple, disabled,
      fullWidth, hoverColor, href, icon, id, label, labelPosition, labelStyle,
      primary, rippleColor, secondary, style} = this.props;

    if (this.props.fireEvent || this.props.setProps) {
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
              onClick={this.handleClick}
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
    else {
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
}

SDFlatButton.propTypes = propTypes;
SDFlatButton.defaultProps = defaultProps;
