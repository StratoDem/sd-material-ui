// @flow

import React, { Component } from 'react';
import { Popover as MuiPopover } from 'material-ui/Popover';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
  /** For Dash use - user can anchor the popover to flat or raised button */
  buttonType?: 'flat' | 'raised',
  /** If true, the popover (potentially) ignores targetOrigin and anchorOrigin to make itself fit
   * on screen, which is useful for mobile devices. */
  canAutoPosition?: boolean,
  /** The content of the popover */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** If true, the popover is visible. */
  open?: boolean,
  /** Represents the parent scrollable container. It can be an element or a string like window. */
  scrollableContainer?: Object | string,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /** This is the point on the popover which will attach to the anchor's origin.
   * Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
   */
  targetOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** If true, the popover will render on top of an invisible layer, which will prevent clicks
   * to the underlying elements, and trigger an onRequestClose('clickAway') call.
   */
  useLayerForClickAway?: boolean,
  /** The zDepth of the popover. */
  zDepth?: propTypes.zDepth,
};

type State = {
  open: boolean,
};

const defaultProps = {
  anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
  animated: true,
  autoCloseWhenOffScreen: true,
  buttonLabel: '',
  buttonType: 'raised',
  canAutoPosition: true,
  children: null,
  className: '',
  open: false,
  scrollableContainer: 'window',
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left'},
  useLayerForClickAway: true,
  zDepth: 1,
};

export default class Popover extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {open: props.open};
  }

  handleClick = (event) => {
    // This prevents ghost click.
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
    const { anchorOrigin, animated, autoCloseWhenOffScreen, canAutoPosition, className,
      scrollableContainer, style, targetOrigin, useLayerForClickAway, zDepth} = this.props;

    if (this.props.buttonType === 'flat') {
      return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <FlatButton
                onClick={this.handleClick}
                label={this.props.buttonLabel !== '' ? this.props.buttonLabel : "Click Me!"}
              />);
              <MuiPopover
                anchorEl={this.state.anchorEl}
                anchorOrigin={anchorOrigin}
                animated={animated}
                autoCloseWhenOffScreen={autoCloseWhenOffScreen}
                canAutoPosition={canAutoPosition}
                className={className}
                onRequestClose={this.handleRequestClose}
                open={this.state.open}
                scrollableContainer={scrollableContainer}
                style={style}
                targetOrigin={targetOrigin}
                useLayerForClickAway={useLayerForClickAway}
                zDepth={zDepth}
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
            <RaisedButton
              onClick={this.handleClick}
              label={this.props.buttonLabel !== '' ? this.props.buttonLabel : "Click Me!"}
            />
            <MuiPopover
              anchorEl={this.state.anchorEl}
              anchorOrigin={anchorOrigin}
              animated={animated}
              autoCloseWhenOffScreen={autoCloseWhenOffScreen}
              canAutoPosition={canAutoPosition}
              className={className}
              onRequestClose={this.handleRequestClose}
              open={this.state.open}
              scrollableContainer={scrollableContainer}
              style={style}
              targetOrigin={targetOrigin}
              useLayerForClickAway={useLayerForClickAway}
              zDepth={zDepth}
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
