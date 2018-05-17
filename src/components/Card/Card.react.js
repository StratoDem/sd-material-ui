// @flow

import React, { Component } from 'react';

import { Card as MuiCard, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type NESTED_CARD = {
  // Card properties
  nestedChildren?: node,
  /** The CSS class name of the root element */
  nestedClassName?: string,
  /** Override the inline-styles of the container element. */
  nestedContainerStyle?: Object,
  /** If true, this card component is expandable. */
  nestedExpandable?: boolean,
  /** Whether this card is expanded.
   * If true or false the component is controlled. if null the component is uncontrolled.
   */
  nestedExpanded?: boolean,
  /** Whether this card is initially expanded. */
  nestedInitiallyExpanded?: boolean,
  /** Override the inline-styles of the root element. */
  nestedStyle?: Object,
  /** */
  nestedShowExpandableButton?: boolean,

  // Card header properties
  /**
   * If true, a click on this card component expands the card.
   */
  nestedHeaderActAsExpander?: boolean,
  /** This is the Avatar element to be displayed on the Card Header. If avatar is an Avatar or
   * other element, it will be rendered. If avatar is a string, it will be used as the image src
   * for an Avatar. */
  nestedHeaderAvatar?: Node,
  /** Override the inline-styles of the root element. */
  nestedHeaderStyle?: Object,
  /** Can be used to render a subtitle in Card Header. */
  nestedHeaderSubtitle?: Node,
  /** Override the subtitle color. */
  nestedHeaderSubtitleColor?: string,
  /** Override the inline-styles of the subtitle. */
  nestedHeaderSubtitleStyle?: Object,
  /** Override the inline-styles of the text. */
  nestedHeaderTextStyle?: Object,
  /** Can be used to render a title in Card Header. */
  nestedHeaderTitle?: Node,
  /** Override the title color. */
  nestedHeaderTitleColor?: string,
  /** Override the inline-styles of the title. */
  nestedHeaderTitleStyle?: Object,
  /** If true, this card component is expandable. */
  nestedTextExpandable?: boolean,

  // Card title properties
  /** If true, this card component is expandable. */
  nestedTitleExpandable?: boolean,
  /** Override the inline-styles of the root element. */
  nestedTitleStyle?: Object,
  /** Can be used to render a subtitle in the Card Title. */
  nestedTitleSubtitle?: Node,
  /** Override the subtitle color. */
  nestedTitleSubtitleColor?: string,
  /** Override the inline-styles of the subtitle. */
  nestedTitleSubtitleStyle?: Object,
  /** Can be used to render a title in the Card Title. */
  nestedTitleTitle?: Node,
  /** Override the title color. */
  nestedTitleColor?: string,
  /** Override the inline-styles of the title. */
  nestedTitleTitleStyle?: Object,
}

type Props = {
  // Card properties
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
  /** The information to build cards nested inside the parent card. */
  nestedCards?: Array<NESTED_CARD>,
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
  textExpandable?: boolean,
  /** Override the CardText color. */
  textColor?: string,
  /** Override the inline-styles of the root element. */
  textStyle?: Object,

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
}

// type State ={
//   expanded: boolean,
// };

const defaultProps = {
  // Card props
  className: '',
  containerStyle: {},
  expanded: null,
  initiallyExpanded: false,
  nestedCards: [],
  style: {},
  showExpandableButton: true,

  // Card header props
  headerAvatar: [],
  headerActAsExpander: true,
  headerStyle: {},
  headerSubtitle: [],
  headerSubtitleColor: '',
  headerSubtitleStyle: {},
  headerTextStyle: {},
  headerTitle: [],
  headerTitleColor: '',
  headerTitleStyle: {},

  // Card text props
  textExpandable: true,
  textColor: '',
  textStyle: {},

  // Card title props
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
  buildNestedCards = (nestedCard: NESTED_CARD) => {
    expanded: false;

    return (
      <MuiCard
        expandable={nestedCard.nestedExpandable}
        expanded={nestedCard.nestedExpanded}
        initialyExpanded={nestedCard.nestedInitialyExpanded}
        onExpandChange={this.setState({})}
      >
        <CardHeader
          actAsExpander={nestedCard.nestedHeaderActAsExpander}
          subtitle={nestedCard.nestedHeaderSubtitle}
          showExpandableButton={nestedCard.nestedShowExpandableButton}
          title={nestedCard.nestedHeaderTitle}
        />
        <CardTitle
          expandable={nestedCard.nestedTitleExpandable}
          title={nestedCard.nestedTitleTitle}
        />
        <CardText
          expandable={nestedCard.nestedTextExpandable}
        >
          children={nestedCard.nestedChildren}
        </CardText>
      </MuiCard>
    );
  };

  render() {
    const { className, containerStyle, expandable, initiallyExpanded, style, expanded,
      showExpandableButton, headerAvatar, headerActAsExpander, headerStyle, headerSubtitle,
      headerSubtitleColor, nestedCards,
      headerSubtitleStyle, headerTextStyle, headerTitle, headerTitleColor, headerTitleStyle,
      textExpandable, textColor, textStyle,
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
              {
                nestedCards.map(this.buildNestedCards)
              }
            </CardText>
          </MuiCard>
        </MuiThemeProvider>
      </div>
    );
  }
}

Card.defaultProps = defaultProps;
