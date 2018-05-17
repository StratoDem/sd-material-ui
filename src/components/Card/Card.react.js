// @flow

import React, { Component } from 'react';

import { Card as MuiCard, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  // Card properties
  /** Can be used to render elements inside the Card. */
  children?: Node,
  /** The CSS class name of the root element */
  className?: string,
  /** Override the inline-styles of the container element. */
  containerStyle?: Object,
  /** If true, this card component is expandable. */
  expandable?: boolean,
  /** Set to null to keep the component uncontrolled. */
  _expanded?: boolean,
  /** Whether this card is initially expanded. */
  initiallyExpanded?: boolean,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /** If true, this card component will include a button to expand the card. */
  showExpandableButton?: boolean,

  // Card header properties
  /** If true, a click on this card component expands the card. */
  headerActAsExpander?: boolean,
  /** This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
   * other element, it will be rendered. If avatar is a string, it will be used as the image src
   * for an Avatar. */
  headerAvatar?: Node,
  /** Override the inline-styles of the root element. */
  headerStyle?: Object,
  /** Can be used to render a subtitle in Card Header. */
  headerSubtitle?: Node,
  /** Override the subtitle color. */
  headerSubtitleColor?: string,
  /** Override the inline-styles of the subtitle. */
  headerSubtitleStyle?: Object,
  /** Override the inline-styles of the text. */
  headerTextStyle?: Object,
  /** Can be used to render a title in Card Header. */
  headerTitle?: Node,
  /** Override the title color. */
  headerTitleColor?: string,
  /** Override the inline-styles of the title. */
  headerTitleStyle?: Object,

  // Card title properties
  /** If true, this card component is expandable. */
  titleExpandable?: boolean,
  /** Override the inline-styles of the root element. */
  titleStyle?: Object,
  /** Can be used to render a subtitle in the Card Title. */
  titleSubtitle?: Node,
  /** Override the subtitle color. */
  titleSubtitleColor?: string,
  /** Override the inline-styles of the subtitle. */
  titleSubtitleStyle?: Object,
  /** Can be used to render a title in the Card Title. */
  titleTitle?: Node,
  /** Override the title color. */
  titleColor?: string,
  /** Override the inline-styles of the title. */
  titleTitleStyle?: Object,

  // Card text properties
  /** If true, this card component is expandable. */
  textExpandable?: boolean,
  /** Override the CardText color. */
  textColor?: string,
  /** Override the inline-styles of the root element. */
  textStyle?: Object,
}

const defaultProps = {
  // Card props
  children: [],
  className: '',
  containerStyle: {},
  expandable: false,
  _expanded: null,
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

export default class Card extends Component<Props> {
  render() {
    const { className, containerStyle, expandable, _expanded, initiallyExpanded, style,
      showExpandableButton, headerAvatar, headerActAsExpander, headerStyle, headerSubtitle,
      headerSubtitleColor, headerSubtitleStyle, headerTextStyle, headerTitle, headerTitleColor,
      headerTitleStyle, textExpandable, textColor, textStyle, titleStyle, titleSubtitle,
      titleSubtitleColor, titleSubtitleStyle, titleTitle, titleColor,
      titleTitleStyle, titleExpandable} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiCard
            className={className}
            containerStyle={containerStyle}
            expandable={expandable}
            expanded={_expanded}
            initialyExpanded={initiallyExpanded}
            style={style}
          >
            <CardHeader
              actAsExpander={headerActAsExpander}
              avatar={headerAvatar}
              showExpandableButton={showExpandableButton}
              style={headerStyle}
              subtitle={headerSubtitle}
              subtitleColor={headerSubtitleColor}
              subtitleStyle={headerSubtitleStyle}
              textStyle={headerTextStyle}
              title={headerTitle}
              titleColor={headerTitleColor}
              titleStyle={headerTitleStyle}
            />
            <CardTitle
              expandable={titleExpandable}
              style={titleStyle}
              subtitle={titleSubtitle}
              subtitleColor={titleSubtitleColor}
              subtitleStyle={titleSubtitleStyle}
              title={titleTitle}
              color={titleColor}
              titleStyle={titleTitleStyle}
            />
            <CardText
              expandable={textExpandable}
              textColor={textColor}
              textStyle={textStyle}
            >
              {this.props.children}
            </CardText>
          </MuiCard>
        </MuiThemeProvider>
      </div>
    );
  }
}

Card.defaultProps = defaultProps;
