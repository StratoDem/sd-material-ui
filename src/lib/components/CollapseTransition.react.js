// @flow

import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';

type Props = {
  /** The contents of the transition element */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** The pixel height of the child element when collapsed */
  collapsedHeight: number,
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
  collapsedHeight: 0,
  visible: true,
  setProps: () => {},
}

export default class CollapseTransition extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {visible: props.visible}
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.visible !== this.state.visible)
      this.setState({visible: nextProps.visible});
  }

  render() {
    const { id, className, collapsedHeight } = this.props;

    return (
      <div id={id} className={className}>
        <Collapse in={this.state.visible} collapsedHeight={collapsedHeight}>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
};

CollapseTransition.defaultProps = defaultProps;
