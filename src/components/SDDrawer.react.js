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
  children: PropTypes.node,

  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,

  /**
   * The CSS class name of the container element.
   */
  containerclassName: PropTypes.string,

  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: PropTypes.object,

  /**
   * If true, swiping sideways when the Drawer is closed will not open it.
   */
  disableSwipeToOpen: PropTypes.bool,

  /**
   * 	If true, the Drawer will be docked. In this state, the overlay won't show and clicking on a
   * 	menu item will not close the Drawer.
   */
  docked: PropTypes.bool,

  /**
   *
   */
  id: PropTypes.string,

  /**
   * If true, the Drawer is opened. Providing a value will turn the Drawer into a
   * controlled component.
   */
  open: PropTypes.bool,

  /**
   * If true, the Drawer is positioned to open from the opposite side.
   */
  openSecondary: PropTypes.bool,

  /**
   * The CSS class name to add to the Overlay component that is rendered behind the Drawer.
   */
  overlayClassName: PropTypes.string,

  /**
   * Override the inline-styles of the Overlay component that is rendered behind the Drawer.
   */
  overlayStyle: PropTypes.object,

  /**
   *
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,

  /**
   * The width of the left most (or right most) area in pixels where the Drawer can be swiped
   * open from. Setting this to null spans that area to the entire page (CAUTION! Setting this
   * property to null might cause issues with sliders and swipeable Tabs: use at your own risk).
   */
  swipeAreaWidth: PropTypes.number,

  /**
   * The width of the Drawer in pixels or percentage in string format ex. 50% to fill half of the
   * window or 100% and so on. Defaults to using the values from theme.
   */
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),

  /**
   * The zDepth of the Drawer.
   */
  zDepth: PropTypes.number,
};

type State = {
  open: boolean,
};

const defaultProps = {
  disableSwipeToOpen: false,
  docked: false,
  open: null,
  openSecondary: false,
  swipeAreaWidth: 30,
  width: null,
  zDepth: 2,
};

export default class SDDrawer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.docked};
  }

  // TODO increment version number before making PR

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null) {
      this.setState({open: nextProps.open});
    } else if (this.props.docked !== nextProps.docked) {
      this.setState({open: nextProps.docked});
    }
  }

  changeDrawerStatus() {
    this.setState({open: !this.state.open});
  }

  render() {
    const { className, containerclassName, containerStyle, disableSwipeToOpen, docked, id, open,
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
            open={open}
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
