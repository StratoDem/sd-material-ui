// @flow

import React, { Component } from 'react';

import MuiCard from 'material-ui/Card';
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
  expandable: boolean,
  /** Whether this card is expanded. */
  expanded: boolean,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** Component ID */
  id: string,
  /** Whether this card is initially expanded. */
  initiallyExpanded?: boolean,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Override the inline-styles of the root element. */
  style?: Object,

  // Card header properties
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

  // Card media properties
  /** Can be used to render elements inside the Card Media. */
  mediaChildren?: Node,
  /** Override the inline-styles of the Card Media. */
  mediaMediaStyle?: Object,
  /** Can be used to render overlay element in Card Media. */
  mediaOverlay?: Node,
  /** Override the inline-styles of the overlay container. */
  mediaOverlayContainerStyle?: Object,
  /** Override the inline-styles of the overlay content. */
  mediaContentStyle?: Object,
  /** Override the inline-styles of the overlay element. */
  mediaOverlayStyle?: Object,
  /** Override the inline-styles of the root element. */
  mediaStyle?: Object,

  // Card text properties
  /** Can be used to render elements inside the Card Text. */
  textChildren?: Node,
  /** Override the CardText color. */
  textColor?: string,
  /** Override the inline-styles of the root element. */
  textStyle?: Object,

  // Card title properties
  /** Can be used to render elements inside the Card Title. */
  titleChildren?: Node,
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

type State ={
  open: boolean,
};

const defaultProps = {
  // Card props
  children: [],
  className: '',
  containerStyle: {},
  fireEvent: () => {},
  initiallyExpanded: false,
  setProps: () => {},
  style: {},

  // Card header props
  headerAvatar: [],
  headerChildren: [],
  headerStyle: {},
  headerSubtitle: [],
  headerSubtitlColor: '',
  headerSubtitleStyle: {},
  headerTextStyle: {},
  headerTitle: [],
  headerTitleColor: '',
  headerTitleStyle: {},

  // Card media props
  mediaChildren: [],
  mediaMediaStyle: {},
  mediaOverlay: [],
  mediaOverlayContainerStyle: {},
  mediaContentStyle: {},
  mediaOverlayStyle: {},
  mediaStyle: {},

  // Card text props
  textChildren: [],
  textColor: '',
  textStyle: {},

  // Card title props
  titleChildren: [],
  titleStyle: {},
  titleSubtitle: [],
  titleSubtitleColor: '',
  titleSubtitleStyle: {},
  titleTitle: [],
  titleColor: '',
  titleTitleStyle: {},
};

