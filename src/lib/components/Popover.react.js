// @flow

import React, { Component } from 'react';
import MuiPopover from '@material-ui/core/Popover';

import Button from '@material-ui/core/Button'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {IconButton} from "@material-ui/core";

type Props = {
  /** This is the point on the anchor where the popover's targetOrigin will attach to.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** If true, the popover will apply transitions when it is added to the DOM. */
  animated?: boolean,
  /** If true, the popover will hide when the anchor is scrolled off the screen */
  autoCloseWhenOffScreen?: boolean,
  /** For Dash use - user can assign label to button */
  buttonLabel?: string,
  /** For Dash use - user can anchor the popover to flat, icon, or raised button */
  buttonType?: 'flat' | 'raised' | 'icon',
  /** For Dash use - specify what icon to use when using an icon button */
  buttonIcon?: string,
  /** For Dash use - specify the styles for the button */
  buttonStyle?: Object,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   paper
   * */
  classes?: {
    root?: string,
    paper?: string,
  },
  /** The content of the popover */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** Disable the scroll lock behavior */
  disableScrollLock?: boolean,
  /** If true, the popover is visible. */
  open?: boolean,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /** The zDepth of the popover. */
  zDepth?: number,
};

type State = {
  open: boolean,
  anchorEl: Object,
};

const defaultProps = {
  anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
  buttonLabel: '',
  buttonType: 'raised',
  buttonIcon: '',
  buttonStyle: {},
  children: null,
  className: '',
  open: false,
  style: {},
  zDepth: 1,
};

/** Material UI Popover component */
export default class Popover extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {open: props.open};
  }

  handleClick = (event) => {
    // This prevents ghost click.
    console.log(event)
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });

  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { anchorOrigin, className, disableScrollLock, style, zDepth} = this.props;

    this.handleClick = this.handleClick.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)

    if (this.props.buttonType === 'flat') {
      return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <Button
                variant={"contained"}
                disableElevation={true}
                onClick={this.handleClick}
                style={this.props.buttonStyle}
              >{this.props.buttonLabel !== '' ? this.props.buttonLabel : "Click Me!"}</Button>
              <MuiPopover
                anchorEl={this.state.anchorEl}
                anchorOrigin={anchorOrigin}
                className={className}
                onClose={this.handleRequestClose}
                open={this.state.open}
                disableScrollLock={disableScrollLock}
                style={style}
                elevation={zDepth}
              >
                {this.props.children}
              </MuiPopover>
            </div>
          </MuiThemeProvider>
        </div>);
    } else if (this.props.buttonType === 'icon') {
      return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <IconButton
                onClick={this.handleClick}
                style={this.props.buttonStyle}
              >{<span className={this.props.buttonIcon}/>}</IconButton>
              <MuiPopover
                anchorEl={this.state.anchorEl}
                anchorOrigin={anchorOrigin}
                className={className}
                onClose={this.handleRequestClose}
                open={this.state.open}
                disableScrollLock={disableScrollLock}
                style={style}
                elevation={zDepth}
              >
                {this.props.children}
              </MuiPopover>
            </div>
          </MuiThemeProvider>
        </div>);
    }
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Button
              variant={"contained"}
              disableElevation={false}
              onClick={this.handleClick}
              style={this.props.buttonStyle}
            >{this.props.buttonLabel !== '' ? this.props.buttonLabel : "Click Me!"}</Button>
            <MuiPopover
                anchorEl={this.state.anchorEl}
                anchorOrigin={anchorOrigin}
                className={className}
                onClose={this.handleRequestClose}
                open={this.state.open}
                disableScrollLock={disableScrollLock}
                style={style}
                elevation={zDepth}
              >
              {this.props.children}
            </MuiPopover>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Popover.defaultProps = defaultProps;
