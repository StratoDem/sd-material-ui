// @flow

import React, { Component } from 'react';

import MUITooltip from '@material-ui/core/Tooltip';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** If true, adds an arrow to the tooltip */
  arrow?: boolean,
  /** Tooltip reference element */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   tooltip
   *   tooltipArrow
   *   arrow
   *   tooltipPlacementLeft
   *   tooltipPlacementRight
   *   tooltipPlacementTop
   *   tooltipPlacementBottom
   * */
  classes?: {
    tooltip?: string,
    tooltipArrow?: string,
    arrow?: string,
    tooltipPlacementLeft?: string,
    tooltipPlacementRight?: string,
    tooltipPlacementTop?: string,
    tooltipPlacementBottom?: string,
  },
  /** The number of milliseconds to wait before showing the tooltip */
  enterDelay?: number,
  /** The number of milliseconds to wait before hiding the tooltip */
  leaveDelay?: number,
  /** Tooltip placement */
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start'
    | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top',
  /** Tooltip title. Zero-length titles string are never displayed */
  title: Node,
};

const defaultProps = {
  arrow: false,
  children: null,
  classes: {},
  enterDelay: 100,
  leaveDelay: 0,
  placement: 'bottom',
};

/** Material UI Tooltip component */
export default class Tooltip extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {arrow, classes, enterDelay, leaveDelay, placement, title} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUITooltip
            arrow={arrow}
            classes={classes}
            enterDelay={enterDelay}
            leaveDelay={leaveDelay}
            placement={placement}
            title={title}
          >
            <div>
              {this.props.children}
            </div>
          </MUITooltip>
        </MuiThemeProvider>
      </div>
    );
  }
}

Tooltip.defaultProps = defaultProps;
