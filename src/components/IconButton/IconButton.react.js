// @flow

import React, { Component } from 'react';

import MuiIconButton from 'material-ui/IconButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Used to pass a FontIcon element as the icon for the button
   * See method 3 at http://www.material-ui.com/#/components/icon-button
   * Note: currently unable to pass in FontIcon component as child, you will need
   * to use method 3 at the above link */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** If true, the element's ripple effect will be disabled */
  disableTouchRipple?: boolean,
  /** Disable the button? */
  disabled?: boolean,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
  /** Override the inline-styles of the root element when the component is hovered */
  hoveredStyle?: Object,
  /** The URL to link to when the button is clicked */
  href?: string,
  /** The CSS class name of the icon. Used for setting the icon with a stylesheet */
  iconClassName?: string,
  /** Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle?: Object,
  /** Element ID */
  id?: string,
  /** An integer that represents the number fo times that this element has been clicked */
  n_clicks?: number,
  /** An integer that represents the previous number of times this element has been clicked */
  n_clicks_previous?: number,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /** The text to supply to the element's tooltip */
  tooltip?: Node,
  /** The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition?: propTypes.cornersAndCenter,
  /** Override the inline-styles of the tooltip element */
  tooltipStyles?: Object,
  /** If true, increase the tooltip element's size.
   * Useful for increasing tooltip readability on mobile devices.
   */
  touch?: boolean,
};

const defaultProps = {
  children: null,
  className: '',
  disableTouchRipple: false,
  disabled: false,
  fireEvent: () => {},
  hoveredStyle: {},
  href: '',
  iconClassName: 'material-icons',
  iconStyle: {},
  n_clicks: 0,
  n_clicks_previous: 0,
  setProps: () => {},
  style: {},
  tooltip: '',
  tooltipPosition: 'bottom-center',
  tooltipStyles: {},
  touch: false,
};

export default class IconButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.setProps) this.props.setProps({n_clicks: this.props.n_clicks + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    if (this.props.setProps) this.props.setProps({n_clicks_previous: this.props.n_clicks + 1});
  }

  render() {
    const {className, disableTouchRipple, disabled, hoveredStyle, href, iconClassName,
      iconStyle, id, style, tooltip, tooltipPosition, tooltipStyles, touch} = this.props;

    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiIconButton
              className={className}
              disableTouchRipple={disableTouchRipple}
              disabled={disabled}
              hoveredStyle={hoveredStyle}
              href={href}
              iconClassName={iconClassName}
              iconStyle={iconStyle}
              onClick={this.handleClick}
              style={style}
              tooltip={tooltip}
              tooltipPosition={tooltipPosition}
              tooltipStyles={tooltipStyles}
              touch={touch}
            >
              {this.props.children}
            </MuiIconButton>
          </MuiThemeProvider>
        </div>);
    }
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiIconButton
            className={className}
            disableTouchRipple={disableTouchRipple}
            disabled={disabled}
            hoveredStyle={hoveredStyle}
            href={href}
            iconClassName={iconClassName}
            iconStyle={iconStyle}
            style={style}
            tooltip={tooltip}
            tooltipPosition={tooltipPosition}
            tooltipStyles={tooltipStyles}
            touch={touch}
          >
            {this.props.children}
          </MuiIconButton>
        </MuiThemeProvider>
      </div>);
  }
}

IconButton.defaultProps = defaultProps;
