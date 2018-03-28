// @flow

import React, { Component } from 'react';

import MuiAutoComplete from 'material-ui/AutoComplete';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import _ from 'lodash';

type Props = {
  /** Location of the anchor for the auto complete */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  /** If true, auto complete is animated as it is toggled */
  animated?: boolean,
  /** Dash callback delay in ms - default is 500 ms */
  dashCallbackDelay?: number,
  /** Array of strings or nodes used to populate the list */
  dataSource?: Array<any>,
  /** Config for objects list dataSource */
  dataSourceConfig?: Object,
  /** Disables focus ripple when true */
  disableFocusRipple?: boolean,
  /** Override style prop for error */
  errorStyle?: Object,
  /** The error content to display */
  errorText?: Node,
  /** String name for filter to be applied to user input.
   * will later be mapped to function
   */
  filter?: 'caseInsensitiveFilter' | 'caseSensitiveFilter' | 'defaultFilter' |
    'fuzzyFilter' | 'levenshteinDistanceFilter' | 'noFilter',
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
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
  /** Dash callback to update props on the server. */
  setProps?: () => void,
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

type State = {
  searchText: string,
}

const defaultProps = {
  anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
  animated: true,
  dashCallbackDelay: 500,
  dataSource: [],
  dataSourceConfig: {text: 'text', value: 'value'},
  disableFocusRipple: true,
  errorStyle: {},
  errorText: null,
  filter: "defaultFilter",
  fireEvent: () => {},
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
  setProps: () => {},
  style: {},
  targetOrigin: {vertical: 'top', horizontal: 'left'},
  textFieldStyle: {},
};

export default class AutoComplete extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {searchText: this.props.searchText};
    /** _.debounce used to provide delay in callback to avoid firing callback every
     * time user input changes - waits this.props.dashCallbackDelay ms to fire callback */
    this.updateTextProps = _.debounce(this._updateTextProps, this.props.dashCallbackDelay);
  }

  /**
   * detects change in state (user-inputted search text) and fires callback event
   * @param nextProps
   */
  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.searchText !== null && nextProps.searchText !== this.props.searchText) {
      this.handleChange(nextProps.searchText, this.props.dataSource, {});
    }
  }

  /**
   * calls function to fire callback and updates searchText in state
   * @param searchText
   * @param dataSource
   * @param params
   */
  handleChange = (searchText: string, dataSource: Array, params: Object) => {

    this.updateTextProps(searchText);

    this.setState({searchText});
  };

  /**
   * executes setProps function with searchText to update searchText in props;
   * fires Dash callback event
   * @param searchText
   * @private
   */
  _updateTextProps = (searchText: string) => {

    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({searchText});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  }

  const mapFilterToFunc = {
      'caseInsensitiveFilter': MuiAutoComplete.caseInsensitiveFilter,
      'caseSensitiveFilter': MuiAutoComplete.caseSensitiveFilter,
      'defaultFilter': MuiAutoComplete.defaultFilter,
      'fuzzyFilter': MuiAutoComplete.fuzzyFilter,
      'levenshteinDistanceFilter': MuiAutoComplete.levenshteinDistanceFilter,
      'noFilter': MuiAutoComplete.noFilter,
    };

  render() {

    const { id, anchorOrigin, animated, dataSource, dataSourceConfig,
      disableFocusRipple, errorStyle, errorText, filter, floatingLabelText,
      hintText, listStyle, maxSearchResults, menuCloseDelay, menuProps,
      menuStyle, open, openOnFocus, popoverProps, style,
      targetOrigin, textFieldStyle} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiAutoComplete
            anchorOrigin={anchorOrigin}
            animated={animated}
            dataSource={dataSource}
            dataSourceConfig={dataSourceConfig}
            disableFocusRipple={disableFocusRipple}
            errorStyle={errorStyle}
            errorText={errorText}
            filter={this.mapFilterToFunc[filter]}
            floatingLabelText={floatingLabelText}
            hintText={hintText}
            listStyle={listStyle}
            maxSearchResults={maxSearchResults}
            menuCloseDelay={menuCloseDelay}
            menuProps={menuProps}
            menuStyle={menuStyle}
            onUpdateInput={(searchText: string, dataSource: Array, params: Object) =>
              this.handleChange(searchText, dataSource, params)}
            open={open}
            openOnFocus={openOnFocus}
            popoverProps={popoverProps}
            searchText={this.state.searchText}
            style={style}
            targetOrigin={targetOrigin}
            textFieldStyle={textFieldStyle}
          />
        </MuiThemeProvider>
      </div>);
  }
}

AutoComplete.defaultProps = defaultProps;

