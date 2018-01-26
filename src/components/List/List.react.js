// @flow

import React, { Component } from 'react';
import PropTyes from 'prop-types';

import {
  ListItem,
  List as MuiList,
} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  children?: Node,
  style?: Object,
}
