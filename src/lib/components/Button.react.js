// @flow

import React, { Component } from 'react';
import MUIButton from '@material-ui/core/Button';
import MUIIconButton from '@material-ui/core/IconButton';

type Props = {
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and disableShadow buttons.
   */
  children?: Node,
  /** Mapping from MUI Element name to the intended classname for that Element */
  classes?: Object,
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
  /** The URL to link to when the button is clicked */
  href?: string,
  /** Sets the class of a span element inside the button */
  iconClass?: Node,
  /** Element ID */
  id?: string,
  /** An integer that represents the number fo times that this element has been clicked */
  n_clicks?: number,
  /** An integer that represents the previous number of times this element has been clicked */
  n_clicks_previous?: number,
  /** Hide the shadow behind the button */
  disableShadow?: string,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
  /** If true, this object is rendered as an IconButton */
  useIcon?: boolean,
  /** 'contained' | 'outlined' | 'text', Button type if not an IconButton */
  variant?: string,
};

type State = {
  disabled: boolean,
};

const defaultProps = {
  children: null,
  classes: {},
  className: '',
  disableTouchRipple: false,
  disabled: false,
  fireEvent: () => {},
  fullWidth: false,
  href: '',
  iconClass: null,
  n_clicks: 0,
  n_clicks_previous: 0,
  setProps: () => {},
  style: {},
  variant: 'text'
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
    const { className, classes, disableTouchRipple, disabled, fullWidth, href, iconClass, id, style,
      useIcon, disableShadow, variant} = this.props;
    if (!useIcon){
      return (
        <div id={id}>
          <MUIButton
            disableElevation={disableShadow}
            classes={classes}
            className={className}
            disableTouchRipple={disableTouchRipple}
            disabled={disabled}
            fullWidth={fullWidth}
            href={href}
            style={style}
            variant={variant}
          >
            {this.props.children}
            <span className={iconClass}/>
          </MUIButton>
        </div>
      );
    }
    return (
      <div id={id}>
        <MUIIconButton
          classes={classes}
          className={className}
          disableTouchRipple={disableTouchRipple}
          disabled={disabled}
          href={href}
          style={style}
        >
          <span className={iconClass}/>
          {this.props.children}
        </MUIIconButton>
      </div>
    );


  }
}

Button.defaultProps = defaultProps;
