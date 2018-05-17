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
  /** Whether this card is expanded.
   * If true or false the component is controlled. if null the component is uncontrolled.
   */
  expanded?: boolean,
  /** Whether this card is initially expanded. */
  initiallyExpanded?: boolean,
  // /** Dash callback to update props */
  // setProps?: () => void,
  /** Override the inline-styles of the root element. */
  style?: Object,
  /** */
  showExpandableButton?: boolean,

  // Card header properties
  /**
   * If true, a click on this card component expands the card.
   */
  headerActAsExpander?: boolean,
  /** This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
   * other element, it will be rendered. If avatar is a string, it will be used as the image src
   * for an Avatar. */
  headerAvatar?: Node,
  /** Can be used to render elements inside the Card Header. */
  headerChildren?: Node,
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

  // Card text properties
  /** If true, this card component is expandable. */
  textExpandableAfterMedia?: boolean,
  /** Override the CardText color. */
  textColorAfterMedia?: string,
  /** Override the inline-styles of the root element. */
  textStyleAfterMedia?: Object,

  // Card title properties
  /** Can be used to render elements inside the Card Title. */
  titleChildren?: Node,
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
}

const defaultProps = {
  // Card props
  children: [],
  className: '',
  containerStyle: {},
  expanded: null,
  initiallyExpanded: false,
  // setProps: () => {},
  style: {},
  showExpandableButton: true,

  // Card header props
  headerAvatar: [],
  headerActAsExpander: true,
  headerChildren: [],
  headerStyle: {},
  headerSubtitle: [],
  headerSubtitleColor: '',
  headerSubtitleStyle: {},
  headerTextStyle: {},
  headerTitle: [],
  headerTitleColor: '',
  headerTitleStyle: {},

  // Card text props
  textExpandableAfterMedia: true,
  textColorAfterMedia: '',
  textStyleAfterMedia: {},

  // Card title props
  titleChildren: [],
  titleExpandable: true,
  titleStyle: {},
  titleSubtitle: [],
  titleSubtitleColor: '',
  titleSubtitleStyle: {},
  titleTitle: [],
  titleColor: '',
  titleTitleStyle: {},
};

export default class Card extends Component<Props, State> {
  render() {
    const { className, containerStyle, expandable, initiallyExpanded, style, expanded,
      showExpandableButton, headerAvatar, headerActAsExpander, headerStyle, headerSubtitle,
      headerSubtitleColor,
      headerSubtitleStyle, headerTextStyle, headerTitle, headerTitleColor, headerTitleStyle,
      textExpandableAfterMedia, textColorAfterMedia, textStyleAfterMedia,
      titleStyle, titleSubtitle, titleSubtitleColor, titleSubtitleStyle, titleTitle, titleColor,
      titleTitleStyle, titleExpandable} = this.props;

    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiCard
            className={className}
            containerStyle={containerStyle}
            expandable={expandable}
            expanded={expanded}
            initialyExpanded={initiallyExpanded}
            onExpandChange={this.handleExpandChange}
            style={style}
            showExpandableButton={showExpandableButton}
          >
            <CardHeader
              avatar={headerAvatar}
              actAsExpander={headerActAsExpander}
              style={headerStyle}
              subtitle={headerSubtitle}
              subtitleColor={headerSubtitleColor}
              subtitleStyle={headerSubtitleStyle}
              showExpandableButton={showExpandableButton}
              textStyle={headerTextStyle}
              title={headerTitle}
              titleColor={headerTitleColor}
              titleStyle={headerTitleStyle}
            >
              {this.props.headerChildren}
            </CardHeader>
            <CardTitle
              expandable={titleExpandable}
              style={titleStyle}
              subtitle={titleSubtitle}
              subtitleColor={titleSubtitleColor}
              subtitleStyle={titleSubtitleStyle}
              title={titleTitle}
              color={titleColor}
              titleStyle={titleTitleStyle}
            >
              {this.props.titleChildren}
            </CardTitle>
            <CardText
              expandable={textExpandableAfterMedia}
              textColor={textColorAfterMedia}
              textStyle={textStyleAfterMedia}
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
