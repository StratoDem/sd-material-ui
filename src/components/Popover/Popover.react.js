// @flow

import React, { Component } from 'react';
import { Popover as MuiPopover } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import RaisedButton from '../RaisedButton/RaisedButton.react';
//
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
  /** If true, the popover (potentially) ignores targetOrigin and anchorOrigin to make itself fit on screen, which is useful for mobile devices. */
  canAutoPosition?: boolean,
  /** The content of the popover */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** Popover ID */
  id: string,
  /** If true, the popover is visible. */
  open?: boolean,
  /** Represents the parent scrollable container. It can be an element or a string like window. */
  scrollableContainer?: Object | string,
  /** Dash callback to update props on the server. */
  setProps?: () => void,
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
  buttonType: 'raised',
  canAutoPosition: true,
  children: null,
  className: '',
  fireEvent: () => {},
  open: false,
  scrollableContainer: 'window',
  setProps: () => {},
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left'},
  useLayerForClickAway: true,
  zDepth: 1,
};

export default class Popover extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: this.props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      this.handleRequestClose("");
    }
  }

  handleRequestClose = (reason: string) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }

    this.setState({open});
  };

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };


  render() {
    const { id, anchorOrigin, animated, autoCloseWhenOffScreen, canAutoPosition, className,
      scrollableContainer, style, targetOrigin, useLayerForClickAway, zDepth} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
          <FlatButton label={'Click Me!'} />
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
          />
        </MuiThemeProvider>
      </div>);
  }
}

Popover.defaultProps = defaultProps;
