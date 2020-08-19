// @flow

import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';

type Props = {
  /** The contents of the transition element */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Dash ID of the transition element */
  id: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
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
}

export default class FadeTransition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className } = this.props;

    return (
      <div id={id} className={className}>
        <Fade in={this.state.visible}>
          {this.props.children}
        </Fade>
      </div>
    );
  }
};

FadeTransition.defaultProps = defaultProps;
