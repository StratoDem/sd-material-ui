// @flow

import React, { Component } from 'react';

import MuiAutoComplete from 'material-ui/AutoComplete';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Location of the anchor for the auto complete */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** If true, auto complete is animated as it is toggled */
  animated?: boolean,
  /** Array of strings or nodes used to populate the list */
  dataSource?: Array,
  /** Config for objects list dataSource */
  dataSourceConfig?: Object,
  /** Disables focus ripple when true */
  disableFocusRipple?: boolean,
  /** Override style prop for error */
  errorStyle?: Object,
  /** The error content to display */
  errorText?: Node,
  // filter?: function,
  /** The content to use for adding floating label element */
  floatingLabelText?: Node,
  /** If true, field receives the property width: 100% */
  fullWidth?: boolean,
  /** The hint content to display */
  hintText?: Node,
  /** Autocomplete ID */
  id: string,
  /** Override style for list */
  listStyle?: Object,
  /** The max number of search results to be shown. By default it shows
   * all the items which matches filter */
  maxSearchResults?: number,
  /** Delay for closing time of the menu */
  menuCloseDelay?: number,
  /** Props to be passed to menu */
  menuProps?: Object,
  /** Override style for menu */
  menuStyle?: Object,
  /** Auto complete menu is open if true */
  open?: boolean,
  /** If true, the list item is showed when a focus event triggers */
  openOnFocus?: boolean,
  /** Props to be passed to popover */
  popoverProps?: Object,
  /** Text being input to auto complete */
  searchText?: string,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** Origin for location of target */
  targetOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** Override the inline-styles of AutoComplete's TextField element */
  textFieldStyle?: Object,
};

const defaultProps = {
  anchorOrigin: {vertical: 'bottom', horizontal: 'left',},
  animated: true,
  dataSource: [],
  dataSourceConfig: {text: 'text', value: 'value',},
  disableFocusRipple: true,
  errorStyle: {},
  errorText: null,
  floatingLabelText: null,
  fullWidth: false,
  hintText: null,
  listStyle: {},
  menuCloseDelay: 300,
  menuProps: {},
  menuStyle: {},
  open: false,
  openOnFocus: false,
  popoverProps: {},
  searchText: "",
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left',},
  textFieldStyle: {},
};

export default class AutoComplete extends Component<Props> {
  // props: Props;

  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <MuiAutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>);
  }

  // render() {
  //   const { id, anchorOrigin, animated, dataSource, dataSourceConfig,
  //     disableFocusRipple, errorStyle, errorText, floatingLabelText,
  //     hintText, listStyle, maxSearchResults, menuCloseDelay, menuProps,
  //     menuStyle, open, openOnFocus, popoverProps, searchText, style,
  //     targetOrigin, textFieldStyle} = this.props;
  //
  //   return (
  //     <div id={id}>
  //       <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
  //         <MuiAutoComplete
  //           anchorOrigin={anchorOrigin}
  //           animated={animated}
  //           dataSource={dataSource}
  //           dataSourceConfig={dataSourceConfig}
  //           disableFocusRipple={disableFocusRipple}
  //           errorStyle={errorStyle}
  //           errorText={errorText}
  //           filter={AutoComplete.caseInsensitiveFilter}
  //           floatingLabelText={floatingLabelText}
  //           hintText={hintText}
  //           listStyle={listStyle}
  //           maxSearchResults={maxSearchResults}
  //           menuCloseDelay={menuCloseDelay}
  //           menuProps={menuProps}
  //           menuStyle={menuStyle}
  //           open={open}
  //           openOnFocus={openOnFocus}
  //           popoverProps={popoverProps}
  //           searchText={searchText}
  //           style={style}
  //           targetOrigin={targetOrigin}
  //           textFieldStyle={textFieldStyle}
  //         />
  //       </MuiThemeProvider>
  //     </div>);
  // }
}

AutoComplete.defaultProps = defaultProps;

