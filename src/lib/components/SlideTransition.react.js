// @flow

import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';

type Props = {
  /** The contents of the transition element */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Dash ID of the transition element */
  id: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** The direction the child component will move when sliding into view */
  slideDirection?: "up" | "down" | "left" | "right",
  /** If true, the transition element is displayed, else it will be hidden */
  visible?: boolean
};

type State = {
  visible: boolean
};

const defaultProps = {
  children: null,
  visible: true,
  setProps: () => {},
  slideDirection: "up",
}

export default class SlideTransition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className, slideDirection } = this.props;

    return (
      <div id={id} className={className}>
        <Slide
          direction={slideDirection}
          in={this.state.visible}
          mountOnEnter
          unmountOnExit
        >
          {this.props.children}
        </Slide>
      </div>
    );
  }
};

SlideTransition.defaultProps = defaultProps;
