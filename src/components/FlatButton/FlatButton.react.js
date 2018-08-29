// @flow

import React from 'react';
import MuiFlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
  n_clicks: 0,
  n_clicks_previous: 0,
  primary: false,
  rippleColor: '',
  secondary: false,
  setProps: () => {},
  style: {},
};

export default class FlatButton extends React.Component<Props> {
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
    const { backgroundColor, className, disableTouchRipple, disabled,
      fullWidth, hoverColor, href, icon, id, label, labelPosition, labelStyle,
      primary, rippleColor, secondary, style} = this.props;

    if (this.props.fireEvent || this.props.setProps) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiFlatButton
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
            </MuiFlatButton>
          </MuiThemeProvider>
        </div>);
    }
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiFlatButton
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
          </MuiFlatButton>
        </MuiThemeProvider>
      </div>);
  }
}

FlatButton.defaultProps = defaultProps;
