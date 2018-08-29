// @flow

import React, { Component } from 'react';

import MuiDrawer from 'material-ui/Drawer';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** The contents to render inside the Drawer */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** The CSS class name of the container element */
  containerClassName?: string,
  /** The CSS class name to add to the container element when it is closed */
  containerClosedClassName?: string,
  /** Override the inline styles of the container element */
  containerStyle?: Object,
  /** If true, swiping sideways when the Drawer is closed will not open it */
  disableSwipeToOpen?: boolean,
  /** If true, the Drawer will be docked. In this state, the overlay won't show and clicking on a
   * menu item will not close the Drawer. */
  docked?: boolean,
  /** Component ID */
  id: string,
  /** If true, the Drawer is opened. Whether true or false,
   * this guarantees that the Drawer is a controlled component */
  open?: boolean,
  /** If true, the Drawer is positioned to open from the opposite side */
  openSecondary?: boolean,
  /** The CSS class name to add to the Overlay component that is rendered behind the Drawer */
  overlayClassName?: string,
  /** Override the inline-styles of the Overlay component that is rendered behind the Drawer */
  overlayStyle?: Object,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
  /**
   * The width of the left most (or right most) area in pixels where the Drawer can be swiped
   * open from. Setting this to null spans that area to the entire page (CAUTION! Setting this
   * property to null might cause issues with sliders and swipeable Tabs: use at your own risk).
   */
  swipeAreaWidth?: number,
  /**
   * The width of the Drawer in pixels or percentage in string format ex. 50% to fill half of the
   * window or 100% and so on. Defaults to using the values from theme.
   */
  width?: string | number,
  /**
   * The zDepth of the Drawer.
   */
  zDepth?: number,
}


type State = {
  open: boolean,
};

const defaultProps = {
  children: [],
  className: '',
  containerClassName: '',
  containerClosedClassName: '',
  containerStyle: {},
  disableSwipeToOpen: false,
  docked: true,
  open: false,
  openSecondary: false,
  overlayClassName: '',
  overlayStyle: {},
  setProps: () => {},
  style: {},
  swipeAreaWidth: 30,
  width: null,
  zDepth: 2,
};

export default class Drawer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      this.changeDrawerStatus(nextProps.open);
    }
  }

  changeDrawerStatus = (open: boolean) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open});

    this.setState({open});
  };

  render() {
    const { className, containerClassName, containerStyle, disableSwipeToOpen, docked, id,
      openSecondary, overlayClassName, overlayStyle, style, swipeAreaWidth, width,
      containerClosedClassName, zDepth } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDrawer
            className={className}
            containerClassName={
              this.state.open
                ? containerClassName
                : `${containerClassName} ${containerClosedClassName}`}
            containerStyle={containerStyle}
            disableSwipeToOpen={disableSwipeToOpen}
            docked={docked}
            onRequestChange={(openStatus: boolean) => this.changeDrawerStatus(openStatus)}
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
          </MuiDrawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

Drawer.defaultProps = defaultProps;
