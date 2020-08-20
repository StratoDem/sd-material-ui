// @flow

import React, { Component } from 'react';

import MuiCard from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from "@material-ui/core/CardActions";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  // Card properties
  /** Can be used to render elements inside the Card. */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   */
  classes?: {
    root?: string,
  },
  /** The CSS class name of the content element */
  contentClassName?: string,
  /** The classes to be applied to the content component. This keys in this object must be valid
   * CSS rule names, and the values must be strings for the classnames to be assigned to each rule
   * name */
  contentClasses?: {
    root?: string,
  },
  /** Styles to be implemented as inline css */
  style?: Object,
  /** If true, the Card component will appear raised */
  raised: boolean,
}

const defaultProps = {
  // Card props
  children: [],
  className: '',
  classes: {},
  style: {},
  raised: true,

  // Card content props
  contentClassName: '',
  contentClasses: {},
};

/** Material UI Card component */
export default class Card extends Component<Props> {
  render() {
    const { className, classes,  style, contentClasses, contentClassName, raised} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiCard
            className={className}
            style={style}
            classes={classes}
            raised={raised}
          >
            <CardContent className={contentClassName} classes={contentClasses}>
              {this.props.children}
            </CardContent>
          </MuiCard>
        </MuiThemeProvider>
      </div>
    );
  }
}

Card.defaultProps = defaultProps;
