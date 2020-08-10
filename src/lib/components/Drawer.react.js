// @flow

import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

type Props = {
  /** Dialog ID */
  id: string,
  /** Children to render inside of the Dialog */
  children?: Node,
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
  children: null,
  className: '',
  open: false,
  setProps: () => {},
};

export default class LeftDrawer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  changeOpenStatus = (open: boolean): void => {
    const { setProps } = this.props;

    if (typeof setProps === 'function') {
      setProps({open});
    }

    this.setState({open});
  };

  handleDrawerOpen = () => {
    this.changeOpenStatus(true);
  };

  handleDrawerClose = () => {
    this.changeOpenStatus(false);
  };

  render() {
    const {id, className} = this.props;

    return (
      <div id={id}>
        <CssBaseline/>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={this.handleDrawerOpen}
          edge="start"
        >
          <MenuIcon/>
        </IconButton>
        <Drawer
          className={className}
          variant="persistent"
          anchor="left"
          open={this.state.open}
        >
          <div>
            <div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            {this.props.children}
          </div>
        </Drawer>
      </div>
    );
  }
}

LeftDrawer.defaultProps = defaultProps;
