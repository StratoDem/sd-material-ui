// @flow

import React, { Component } from 'react';
import Grow from '@material-ui/core/Grow';

type Props = {
  /** The contents of the transition element */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Dash ID of the transition element */
  id: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** The styles passed to the transition element
   * An style object (even if empty) must be given to the transition element or it will fail
   * silently. See: https://github.com/mui-org/material-ui/issues/15472
   */
  style?: Object,
  /** If true, the transition element is displayed, else it will be hidden */
  visible?: boolean
};

type State = {
  visible: boolean
};

const defaultProps = {
  children: null,
  style: {},
  visible: true,
  setProps: () => {},
}

export default class GrowTransition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className, style } = this.props;

    return (
      <div id={id} className={className}>
        <Grow in={this.state.visible} style={style}>
          <div>
            {this.props.children}
          </div>
        </Grow>
      </div>
    );
  }
};

GrowTransition.defaultProps = defaultProps;
