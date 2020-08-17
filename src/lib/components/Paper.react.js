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
    elevation0?: string,
    elevation1?: string,
    elevation2?: string,
    elevation3?: string,
    elevation4?: string,
    elevation5?: string,
    elevation6?: string,
    elevation7?: string,
    elevation8?: string,
    elevation9?: string,
    elevation10?: string,
    elevation11?: string,
    elevation12?: string,
    elevation13?: string,
    elevation14?: string,
    elevation15?: string,
    elevation16?: string,
    elevation17?: string,
    elevation18?: string,
    elevation19?: string,
    elevation20?: string,
    elevation21?: string,
    elevation22?: string,
    elevation23?: string,
    elevation24?: string,
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
