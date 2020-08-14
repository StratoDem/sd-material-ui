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
  /** ID for Card */
  id?: string,
  /** Can be used to render elements inside the Card. */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  classes?: Object,
  /** The CSS class name of the actionArea element */
  actionAreaClassName?: string,
  /** The classes to be applied to the actionArea component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  actionAreaClasses?: Object,
  /** The CSS class name of the actions element */
  actionsClassName?: string,
  /** The classes to be applied to the actions component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  actionsClasses?: Object,
  /** The CSS class name of the content element */
  contentClassName?: string,
  /** The classes to be applied to the content component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  contentClasses?: Object,
  /** The CSS class name of the header element */
  headerClassName?: string,
  /** The classes to be applied to the header component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  headerClasses?: Object,
  /** This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
   * other element, it will be rendered. If avatar is a string, it will be used as the image src
   * for an Avatar. */
  headerAvatar?: Node,
  /** The CSS class name of the header Icon element */
  headerIconClassName?: string,
  /** Styles to be implemented as inline css */
  style?: Object,
  /** If true, the Card component will appear raised */
  raised: boolean,
}

const defaultProps = {
  // Card props
  id: '',
  children: [],
  className: '',
  classes: {},
  style: {},
  raised: true,

  // Card header props
  headerAvatar: null,
  headerClassName: '',
  headerClasses: {},

  // Card content props
  contentClassName: '',
  contentClasses: {},

  // Card actions props
  actionsClassName: '',
  actionsClasses: {},

  // Card actionArea props
  actionAreaClassName: '',
  actionAreaClasses: {},
};

/** Material UI Card component */
export default class Card extends Component<Props> {
  render() {
    const { id, className, classes,  style, headerAvatar, headerClasses, headerClassName,
            actionAreaClassName, actionAreaClasses, actionsClasses, actionsClassName,
            contentClasses, contentClassName, headerIconClassName, raised} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiCard
            className={className}
            style={style}
            classes={classes}
            raised={raised}
          >
            <CardHeader
              avatar={headerAvatar}
              className={headerClassName}>
              classes={headerClasses}>
              <span className={headerIconClassName}/>
            </CardHeader>
            <CardActionArea className={actionAreaClassName} classes={actionAreaClasses}/>
            <CardActions className={actionsClassName} classes={actionsClasses}/>
            <CardContent className={contentClassName} classes={contentClasses}/>
            {this.props.children}
          </MuiCard>
        </MuiThemeProvider>
      </div>
    );
  }
}

Card.defaultProps = defaultProps;
