// @flow

import React from 'react';
import PropTypes from 'prop-types';

import {
  BottomNavigationItem,
  BottomNavigation as MUIBottomNavigation } from 'material-ui/BottomNavigation';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  navItems: Array<{
    label: string,
    icon: Element | string,
    value: string | number,
    url?: string,
  }>,

  setProps?: (props: {selectedIndex: number}) => void,
  selectedIndex?: number,
  selectedStyle?: Object,
};
type State = {
  selectedIndex: number,
};

const propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: PropTypes.string.isRequired,

  /** Array of navigation item props to pass to BottomNavigationItem */
  navItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** URL to jump to when this option is selected */
    url: PropTypes.string,
  })).isRequired,

  /** Initial selected index for the BottomNavigation */
  selectedIndex: PropTypes.number,

  /** Style to apply to the selected icon */
  selectedStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: PropTypes.func.isRequired,
};

/**
 * BottomNavigationItem is an item in a BottomNavigation component
 */
export default class BottomNavigation extends React.Component<Props, State> {
  props: Props;
  state: State;

  static defaultProps = {
    selectedIndex: 0,
    setProps: () => {},
    selectedStyle: {},
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.selectedIndex !== this.props.selectedIndex)
      this.setState({selectedIndex: nextProps.selectedIndex});
  }

  render() {
    const { id, navItems, selectedStyle } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIBottomNavigation selectedIndex={this.state.selectedIndex}>
            {
              navItems.map((navItem, selectedIndex) => (
                <BottomNavigationItem
                  key={navItem.label}
                  label={navItem.label}
                  icon={
                    typeof navItem.icon === 'string'
                      ? (
                        <span
                          style={selectedIndex === this.state.selectedIndex ? selectedStyle : {}}
                        >
                          {navItem.icon}
                        </span>)
                      : navItem.icon}
                  onClick={() => {
                    this.setState({selectedIndex});

                    if (typeof navItem.url === 'string')
                      window.location.hash = navItem.url;
                    if (typeof this.props.setProps === 'function')
                      this.props.setProps({selectedIndex});
                  }}
                />))
            }
          </MUIBottomNavigation>
        </MuiThemeProvider>
      </div>);
  }
}

BottomNavigation.propTypes = propTypes;
