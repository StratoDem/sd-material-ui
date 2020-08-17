// @flow

import React, { Component } from 'react';

import MuiPaper from '@material-ui/core/Paper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** ID for Paper */
  id?: string,
  /** Can be used to render elements inside the Paper*/
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   rounded
   *   outlined
   *   elevation0
   *   elevation1
   *   ...
   *   elevation23
   *   elevation24
   */
  classes?: {
    root?: string,
    rounded?: string,
    outlined?: string,
    elevation0: string,
    elevation1: string,
    ...
  },
  /** By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded?: boolean,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** This number represents the zDepth of the paper shadow */
  zDepth?: number,
};

const defaultProps = {
  children: null,
  rounded: true,
  style: {},
  classes:{},
  className: null,
  id: null,
  zDepth: 1,
};

/** A Dash material-ui Paper component */
export default class Paper extends Component<Props> {
  props: Props;

  render() {
    const {rounded, style, zDepth, id, className, classes} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiPaper
            square={!rounded}
            style={style}
            elevation={zDepth}
            className={className}
            classes={classes}
          >
            {this.props.children}
          </MuiPaper>
        </MuiThemeProvider>
      </div>
    );
  }
}

Paper.defaultProps = defaultProps;
