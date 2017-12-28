// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  children?: Node,
  className?: string,
  containerclassName?: string,
  containerStyle?: Object,
  disableSwipeToOpen?: boolean,
  docked?: boolean,
  id: string,
  open?: boolean,
  openSecondary?: boolean,
  overlayClassName?: string,
  overlayStyle?: Object,
  setProps?: () => void,
  style?: Object,
  swipeAreaWidth?: number,
  width?: string | number,
  zDepth?: number,
}

const propTypes = {
  /**
   * The contents of the Drawer
   */
  children: Node,

  /**
   * The CSS class name of the root element.
   */
  className: string,

  /**
   * The CSS class name of the container element.
   */
  containerclassName: string,

  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: Object,

  /**
   * If true, swiping sideways when the Drawer is closed will not open it.
   */
  disableSwipeToOpen: boolean,

  /**
   * 	If true, the Drawer will be docked. In this state, the overlay won't show and clicking on a
   * 	menu item will not close the Drawer.
   */
  docked: boolean,

  /**
   *
   */
  id: string,

  /**
   * If true, the Drawer is opened. Providing a value will turn the Drawer into a
   * controlled component.
   */
  open: boolean,

  /**
   * If true, the Drawer is positioned to open from the opposite side.
   */
  openSecondary: boolean,

  /**
   * The CSS class name to add to the Overlay component that is rendered behind the Drawer.
   */
  overlayClassName: string,

  /**
   * Override the inline-styles of the Overlay component that is rendered behind the Drawer.
   */
  overlayStyle: Object,

  /**
   *
   */
  setProps: () => void,

  /**
   * Override the inline-styles of the root element.
   */
  style: Object,

  /**
   * The width of the left most (or right most) area in pixels where the Drawer can be swiped
   * open from. Setting this to null spans that area to the entire page (CAUTION! Setting this
   * property to null might cause issues with sliders and swipeable Tabs: use at your own risk).
   */
  swipeAreaWidth: number,

  /**
   * The width of the Drawer in pixels or percentage in string format ex. 50% to fill half of the
   * window or 100% and so on. Defaults to using the values from theme.
   */
  width: string | number,

  /**
   * The zDepth of the Drawer.
   */
  zDepth: number,
};

type State = {
  docked: boolean,
  open: boolean,
};

const defaultProps = {
  disableSwipeToOpen: false,
  docked: true,
  open: null,
  openSecondary: false,
  swipeAreaWidth: 30,
  width: null,
  zDepth: 2,
};

export default class SDDrawer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.state.open) {
      this.changeDrawerStatus(nextProps);
    } else if (nextProps.docked !== this.props.docked) {
      this.changeDrawerStatus(nextProps);
      this.setProps({docked: nextProps.docked});
    }
  }

  changeDrawerStatus (nextProps: Props) {
    if (nextProps.open !== null) {
      this.setProps({open: !this.state.open});
      this.setState({open: !this.state.open});
    } else {
      this.setProps({docked: !this.state.docked});
      this.setState({docked: !this.state.docked});
    }
  };

  render() {
    const { className, containerclassName, containerStyle, disableSwipeToOpen, docked, id,
            openSecondary, overlayClassName, overlayStyle, style, swipeAreaWidth, width,
            zDepth } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Drawer
            className={className}
            containerClassName={containerclassName}
            containerStyle={containerStyle}
            disableSwipeToOpen={disableSwipeToOpen}
            docked={docked}
            onrequestchange={this.changeDrawerStatus}
            open={this.state.open}
            openSecondary={openSecondary}
            overlayClassName={overlayClassName}
            overlayStyle={overlayStyle}
            style={style}
            swipeAreaWidth={swipeAreaWidth}
            width={width}
            zDepth={zDepth}
          >
            {this.props.children}
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

SDDrawer.propTypes = propTypes;
SDDrawer.defaultProps = defaultProps;
