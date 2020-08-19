// @flow

import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';

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

export default class Transition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  // handleChange = () => {
  //   const updatedState = !this.state.visible;
  //   this.setState({visible: updatedState});
  //
  //   if (typeof this.props.setProps === 'function') {
  //     this.props.setProps({visible: updatedState});
  //   }
  // };

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className } = this.props;

    return (
      <div id={id} className={className}>
        <Collapse in={this.state.visible} collapsedHeight={0}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
};

Transition.defaultProps = defaultProps;
