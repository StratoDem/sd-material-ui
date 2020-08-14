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
}

const defaultProps = {
  // Card props
  id: '',
  children: [],
  className: '',
  containerStyle: {},
  expandable: false,
  expanded: null,
  initiallyExpanded: false,
  style: {},
  showExpandableButton: true,

  // Card header props
  headerAvatar: null,
  headerActAsExpander: true,
  headerStyle: {},
  headerSubtitle: [],
  headerSubtitleColor: '',
  headerSubtitleStyle: {},
  headerTextStyle: {},
  headerTitle: [],
  headerTitleColor: '',
  headerTitleStyle: {},
  headerIconStyle: {},

  // Card title props
  titleExpandable: true,
  titleStyle: {},
  titleSubtitle: [],
  titleSubtitleColor: '',
  titleSubtitleStyle: {},
  titleTitle: [],
  titleColor: '',
  titleTitleStyle: {},

  // Card text props
  textExpandable: true,
  textColor: '',
  textStyle: {},
};

/** Material UI Card component */
export default class Card extends Component<Props> {
  render() {
    const { id, className, containerStyle, expandable, expanded, initiallyExpanded, style,
      showExpandableButton, headerAvatar, headerActAsExpander, headerStyle, headerSubtitle,
      headerSubtitleColor, headerSubtitleStyle, headerTextStyle, headerTitle, headerTitleColor,
      headerTitleStyle, textExpandable, textColor, textStyle, titleStyle, titleSubtitle,
      headerIconStyle, titleSubtitleColor, titleSubtitleStyle, titleTitle, titleColor,
      titleTitleStyle, titleExpandable} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiCard
            className={className}
            style={style}
          >
            <CardHeader
              avatar={headerAvatar}
              className={headerClass}>
              <span className={headerIconClass}/>
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
