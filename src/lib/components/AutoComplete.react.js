// @flow

import React, { Component } from 'react';

import MuiAutoComplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import _ from 'lodash';

type Props = {
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   fullWidth
   *   focus
   *   tag
   *   tagSizeSmall
   *   hasPopupIcon
   *   hasClearIcon
   *   inputRoot
   *   input
   *   inputFocused
   *   endAdornment
   *   clearIndicator
   *   clearIndicatorDirty
   *   popupIndicator
   *   popupIndicatorOpen
   *   popper
   *   popperDisablePortal
   *   paper
   *   listbox
   *   loading
   *   noOptions
   *   option
   *   groupLabel
   *   groupUl
   * */
  classes?: {
    root?: string,
    fullWidth?: string,
    focus?: string,
    tag?: string,
    tagSizeSmall?: string,
    hasPopupIcon?: string,
    hasClearIcon?: string,
    inputRoot?: string,
    input?: string,
    inputFocused?: string,
    endAdornment?: string,
    clearIndicator?: string,
    clearIndicatorDirty?: string,
    popupIndicator?: string,
    popupIndicatorOpen?: string,
    popper?: string,
    popperDisablePortal?: string,
    paper?: string,
    listbox?: string,
    loading?: string,
    noOptions?: string,
    option?: string,
    groupLabel?: string,
    groupUl?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** Dash callback delay in ms - default is 500 ms */
  dashCallbackDelay?: number,
  /**
   * Array of strings or nodes used to populate the list
   * Alternatively, an Array of Objects with a structure like
   * {label: 'My label to render', value: 'My value to ship on match'}
   */
  dataSource?: Array<any>,
  /** Should the search text have to match exactly to update props server side? */
  exactMatch?: boolean,
  /** String name for filter to be applied to user input.
   * will later be mapped to function
   */
  filter?: 'caseInsensitiveFilter' | 'caseSensitiveFilter' | 'defaultFilter' |
    'fuzzyFilter' | 'levenshteinDistanceFilter' | 'noFilter',
  /** Dash-assigned callback that gets fired when the input changes. */
  fireEvent?: () => void,
  /** The hint content to display */
  hintText?: Node,
  /** Autocomplete ID */
  id: string,
  /** The max number of search results to be shown. By default it shows
   * all the items which matches filter */
  maxSearchResults?: number,
  /** Auto complete menu is open if true */
  open?: boolean,
  /** If true, the list item is showed when a focus event triggers */
  openOnFocus?: boolean,
  /** Text being input to auto complete */
  searchText?: string,
  /** Value in the dataSource found by using searchText
   * NOTE exactMatch must be true for this to work
   */
  searchValue?: any,
  /** Dash callback to update props on the server. */
  setProps?: () => void,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** If defined, the AutoComplete component hits this URL to search instead of string matching */
  searchEndpointAPI?: string,
  /** General JSON structure to send to the server */
  searchJSONStructure?: Object,
  /** The selected value of the input */
  selectedValue?: any,
};

type State = {
  searchText: string,
  dataSourceRender: Array<string>,
  selectedValue: string,
}

const defaultProps = {
  dashCallbackDelay: 500,
  dataSource: [],
  exactMatch: false,
  filter: "defaultFilter",
  fireEvent: () => {},
  hintText: "Search Here",
  maxSearchResults: 5,
  menuCloseDelay: 300,
  openOnFocus: false,
  searchText: "",
  setProps: () => {},
  style: {},
  searchValue: null,
  searchEndpointAPI: null,
  searchJSONStructure: {},
  selectedValue: null,
};

const levenshteinDistance = function (searchText, key) {
  let current = [];
  let prev = void 0;
  let value = void 0;

  for (let i = 0; i <= key.length; i++) {
    for (let j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;
        else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

const mapFilterToFunc = {
  caseInsensitiveFilter: function (searchText, key) {
       return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    },
  caseSensitiveFilter: function (searchText, key) {
      return searchText !== '' && key.indexOf(searchText) !== -1;
    },
  defaultFilter: function (searchText, key) {
       return searchText !== '' && key.indexOf(searchText) !== -1;
    },
  fuzzyFilter: function (searchText, key) {
    const compareString = key.toLowerCase();
    const searchTextLC = searchText.toLowerCase();

    let searchTextIndex = 0;
    for (let index = 0; index < key.length; index++) {
      if (compareString[index] === searchTextLC[searchTextIndex]) {
        searchTextIndex += 1;
      }
    }

    return searchTextIndex === searchTextLC.length;
  },
  levenshteinDistanceFilter: function (distanceLessThan) {
      if (distanceLessThan === null) {
        return levenshteinDistance;
      } else if (typeof distanceLessThan !== 'number') {
        throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
      }

      return function (s, k) {
        return levenshteinDistance(s, k) < distanceLessThan;
      };
    },
  noFilter: () => true,
};


/** Material UI AutoComplete component */
export default class AutoComplete extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: this.props.searchText,
      selectedValue: this.props.selectedValue,
      dataSourceRender: this.props.exactMatch
        ? this.props.dataSource.map(d => d.label)
        : this.props.dataSource,
    };
    /** _.debounce used to provide delay in callback to avoid firing callback every
     * time user input changes - waits this.props.dashCallbackDelay ms to fire callback */
    this.updateTextProps = _.debounce(this._updateTextProps, this.props.dashCallbackDelay);
  }

  /**
   * detects change in state (user-inputted search text) and fires callback event
   * @param nextProps
   */
  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.searchText !== null && nextProps.searchText !== this.props.searchText) {
      this.handleChange(this.props.dataSource, nextProps.searchText);
    }
    if (this.props.dataSource !== nextProps.dataSource)
      this.setState({dataSourceRender: this.getDataSource(nextProps)});
  }

  getDataSource = (props: Props): Array<any> => {
    if (props.exactMatch)
      return props.dataSource.map(d => d.label);
    return props.dataSource;
  };

  filterFunc = (maxResults: number, inputText: string, options: Array) : Array => {
    const filteredResults = options.filter((x) => mapFilterToFunc[this.props.filter](inputText, x.label))
    if (filteredResults.length <= maxResults) return filteredResults
    return filteredResults.slice(0, maxResults)
  }

  /**
   * calls function to fire callback and updates searchText in state
   * @param searchText
   * @param params
   */
  handleChange = (params: Object, searchText: string) => {
    const dataSource = this.props.dataSource
    console.log(dataSource)
    console.log(searchText)
    if (this.props.exactMatch) {
      // If we are looking for an exact match, then we want to update searchValue to pass
      // back data to the server at that index from the dataSource
      const filteredData = dataSource.filter(entry => entry.label === searchText);
      if (filteredData.length > 0 && typeof this.props.setProps === 'function')
        this.props.setProps({selectedValue: filteredData[0].value});
    }
    // Always want to handle searchText updates
    if ((typeof searchText) === 'string'){
      this.updateTextProps(searchText);
      this.setState({searchText});
    }
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
    if (this.props.searchEndpointAPI !== null)
      fetch(this.props.searchEndpointAPI, {
        body: JSON.stringify({...this.props.searchJSONStructure, searchTerm: searchText}),
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'client', // *client, no-referrer
      }).then(response => response.json()).then((response: {dataSource: Array<any>}) => {
        this.setState({dataSourceRender: response.dataSource});
      });

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };

  render() {
    const { id, className, classes, hintText, maxSearchResults, open, openOnFocus, style} = this.props;
    this.handleChange = this.handleChange.bind(this)
    this.filterFunc = this.filterFunc.bind(this)
    return (
      <div className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiAutoComplete
            classes={classes}
            id={id}
            filterOptions={(options, searchText) => {
                  return this.filterFunc(maxSearchResults, searchText.inputValue, options)
              }}
            open={open}
            openOnFocus={openOnFocus}
            style={style}
            getOptionLabel={(option) => option.label}
            options={this.state.dataSourceRender}
            onChange={(event => {
              const val = this.state.dataSourceRender.filter((opt) => {
                return event.target.textContent === opt.label
              })[0].value
              this.setState({selectedValue: val})
              this.props.setProps({selectedValue: val})
            })}
            onInputChange={(text) => {
              this.setState({searchText: text.target.value})
              this.updateTextProps(text.target.value)}}
            renderInput={(params) =>
              <TextField {...params} label={hintText} variant="outlined" />}/>
        </MuiThemeProvider>
      </div>);
  }
}

AutoComplete.defaultProps = defaultProps;

