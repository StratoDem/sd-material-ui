// @flow

import React, { Component } from 'react';
import MUIButton from '@material-ui/core/Button';
import MUIIconButton from '@material-ui/core/IconButton';

type Props = {
  /** Button color when *no* hover event is triggered */
  backgroundColor?: string,
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
   */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** If true, the element's ripple effect will be disabled */
  disableTouchRipple?: boolean,
  /** Disable the button? */
  disabled?: boolean,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
  /** If true, the button will take up the full width of its container */
  fullWidth?: boolean,
  /** Color of button when mouse hovers over */
  hoverColor?: string,
  /** The URL to link to when the button is clicked */
  href?: string,
  /** Use this property to display an icon */
  icon?: Node,
  /** Element ID */
  id?: string,
  /** Label for the button */
  label: string,
  /** Place label before or after the passed children */
  labelPosition?: 'before' | 'after',
  /** Override the inline styles of the button's label element */
  labelStyle?: Object,
  /** An integer that represents the number fo times that this element has been clicked */
  n_clicks?: number,
  /** An integer that represents the previous number of times this element has been clicked */
  n_clicks_previous?: number,
  /** If true, colors button according to primaryTextColor from the MuiTheme */
  primary?: boolean,
  /** Color for the ripple when the button is clicked */
  raised?: string,
  /** Color for the ripple when the button is clicked */
  rippleColor?: string,
  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary?: boolean,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
  /** If true, this object is rendered as an IconButton */
  useIcon?: boolean,
};

type State = {
  disabled: boolean,
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
  labelPosition: 'after',
  labelStyle: {},
  label: '',
  n_clicks: 0,
  n_clicks_previous: 0,
  primary: false,
  rippleColor: '',
  secondary: false,
  setProps: () => {},
  style: {},
  useIcon: false,
  raised: false,
};

export default class Button extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {disabled: props.disabled};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});
  }

  render() {
    const { backgroundColor, className, disableTouchRipple, disabled,
      fullWidth, hoverColor, href, icon, id, label, labelPosition, labelStyle,
      primary, rippleColor, secondary, style, useIcon, raised} = this.props;
    let styles = style
    if (backgroundColor){
      styles['background-color'] = backgroundColor
    }
    if (!useIcon){
      return (
        <div id={id}>
          <MUIButton
            disableElevation={!raised}
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
            style={styles}
          >
            {this.props.children}
          </MUIButton>
        </div>
      );
    }
    return (
      <div id={id}>
        <MUIIconButton
          className={className}
          disableTouchRipple={disableTouchRipple}
          disabled={disabled}
          href={href}
          icon={icon}
          label={label}
          labelPosition={labelPosition}
          labelStyle={labelStyle}
          primary={primary}
          rippleColor={rippleColor}
          secondary={secondary}
          style={styles}
        >
          {this.props.children}
        </MUIIconButton>
      </div>
    );


  }
}

Button.defaultProps = defaultProps;
