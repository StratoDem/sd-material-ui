// @flow

import React, { Component } from 'react';
import { default as MuiDrawer } from '@material-ui/core/Drawer';

type Props = {
  /** Controls where the drawer appears. Must be one of "top", "bottom", "left", or "right"
   * Defaults to "left" */
  anchor: string,
  /** Dialog ID */
  id: string,
  /** Children to render inside of the Dialog */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   docked
   *   paper
   *   paperAnchorLeft
   *   paperAnchorRight
   *   paperAnchorTop
   *   paperAnchorBottom
   *   paperAnchorDockedLeft
   *   paperAnchorDockedTop
   *   paperAnchorDockedRight
   *   paperAnchorDockedBottom
   *   modal
   * */
  classes?: {
    root?: string,
    docked?: string,
    paper?: string,
    paperAnchorLeft?: string,
    paperAnchorRight?: string,
    paperAnchorTop?: string,
    paperAnchorBottom?: string,
    paperAnchorDockedLeft?: string,
    paperAnchorDockedTop?: string,
    paperAnchorDockedRight?: string,
    paperAnchorDockedBottom?: string,
    modal?: string
  },
  /** CSS class name of the root element */
  className?: string,
  /** Is the drawer open?
   *
   * IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
   * an input) for this component's props.open value in order to achieve the desired behavior.
   */
  open?: boolean,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

type State = {
  open: boolean,
};

const defaultProps = {
  anchor: "left",
  children: null,
  classes: {},
  className: '',
  classNameRoot: '',
  open: false,
  setProps: () => {},
};

export default class Drawer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.open !== this.state.open)
      this.setState({open: nextProps.open});
  }

  render() {
    const {id, anchor, classes, className} = this.props;

    return (
      <div id={id}>
        <MuiDrawer
          anchor={anchor}
          classes={classes}
          className={className}
          variant={"persistent"}
          open={this.state.open}
        >
          {this.props.children}
        </MuiDrawer>
      </div>
    );
  }
}

Drawer.defaultProps = defaultProps;
