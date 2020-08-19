// @flow

import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

type Props = {
  /** The contents of the transition element */
  children?: Node,
  /** The classes to be applied to this component. The keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   container
   *   entered
   *   hidden
   *   wrapper
   *   wrapperInner
   */
  classes?: {
    root?: string,
    container?: string,
    entered?: string,
    hidden?: string,
    wrapper?: string,
    wrapperInner?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** The pixel height of the child element when collapsed */
  collapsedHeight: number,
  /** Dash ID of the transition element */
  id: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** The direction the child component will move when sliding into view */
  slideDirection?: "up" | "down" | "left" | "right",
  /** The duration for the transition, in milliseconds. Set to 'auto' to automatically calculate
   * transition time based on height */
  timeout?: "auto" | number | { appear?: number, enter?: number, exit?: number },
  /** Type of transition to be used */
  type?: "collapse" | "fade" | "grow" | "slide" | "zoom",
  /** If true, the transition element is displayed, else it will be hidden */
  visible?: boolean
};

type State = {
  visible: boolean
};

const defaultProps = {
  children: null,
  classes: {},
  collapsedHeight: 0,
  visible: true,
  setProps: () => {},
  slideDirection: "up",
  timeout: "auto",
  type: "collapse",
}

export default class Transition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className, classes, collapsedHeight, slideDirection, timeout, type } = this.props;

    if (type === "collapsed") {
      return (
        <div id={id} className={className}>
          <Collapse
            classes={classes}
            in={this.state.visible}
            collapsedHeight={collapsedHeight}
            timeout={timeout}>
            {this.props.children}
          </Collapse>
        </div>
      );
    } else if (type === "fade") {
      return (
        <div id={id} className={className}>
          <Fade in={this.state.visible} classes={classes} timeout={timeout}>
            {this.props.children}
          </Fade>
        </div>
      );
    } else if (type === "grow") {
      return (
        <div id={id} className={className}>
          <Grow in={this.state.visible} classes={classes} timeout={timeout}>
            {this.props.children}
          </Grow>
        </div>
      );
    } else if (type === "slide") {
      return (
        <div id={id} className={className}>
          <Slide
            classes={classes}
            direction={slideDirection}
            in={this.state.visible}
            timeout={timeout}
            mountOnEnter
            unmountOnExit
          >
            {this.props.children}
          </Slide>
        </div>
      );
    } else {
      return (
        <div id={id} className={className}>
          <Zoom in={this.state.visible} classes={classes} timeout={timeout}>
            {this.props.children}
          </Zoom>
        </div>
      );
    }
  }
};

Transition.defaultProps = defaultProps;
