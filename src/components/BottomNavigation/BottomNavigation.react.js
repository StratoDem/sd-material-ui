// @flow

import React, { Component } from 'react';

import {
  BottomNavigationItem,
  BottomNavigation as MUIBottomNavigation,
} from 'material-ui/BottomNavigation';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type T_NAV_ITEM = {
  /** Label to use for the navigation item */
  label: string,
  /** Icon to display for the navigation item */
  icon: Node | string,
  /** Value for the navigation item */
  value: string | number,
  /** ID of component to jump to when this option is selected */
  targetId?: string,
  /** Class to apply to the icon span */
  iconClassName?: string,
}
type Props = {
  /** The ID used to identify this component in Dash callbacks */
  id: string,
  /** Array of navigation item props to pass to BottomNavigationItem */
  navItems: Array<T_NAV_ITEM>,
  /** Initial selected index for the BottomNavigation */
  selectedIndex?: number,
  /** Style to apply to the selected icon */
  selectedStyle?: Object,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps?: (props: { selectedIndex: number }) => void,
};
type State = {
  selectedIndex: number,
};

const defaultProps = {
  selectedIndex: 0,
  setProps: () => {},
  selectedStyle: {},
};

/**
 * BottomNavigationItem is an item in a BottomNavigation component
 */
export default class BottomNavigation extends Component<Props, State> {
  props: Props;
  state: State;

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

  buildBottomNavigationItem = (navItem: T_NAV_ITEM, selectedIndex: number) => {
    const {selectedStyle} = this.props;

    let navItemIcon;

    switch (typeof navItem.icon) {
      case 'string':
      case 'number':
      case 'undefined':
        navItemIcon = (
          <span
            style={selectedIndex === this.state.selectedIndex ? selectedStyle : {}}
            className={navItem.iconClassName}
          >
            {navItem.icon}
          </span>);
        break;
      case 'object':
        navItemIcon = navItem.icon;
        break;
      default:
        break;
    }

    return (
      <BottomNavigationItem
        key={navItem.label}
        label={navItem.label}
        icon={navItemIcon}
        onClick={() => {
          this.setState({selectedIndex: selectedIndex});

          if (typeof navItem.targetId === 'string') {
            const targetElement = document.getElementById(navItem.targetId);
            targetElement.scrollIntoView();
          }

          if (typeof this.props.setProps === 'function')
            this.props.setProps({selectedIndex: selectedIndex});
        }}
      />);
  };

  render() {
    const {id, navItems} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MUIBottomNavigation selectedIndex={this.state.selectedIndex}>
            {
              navItems.map(this.buildBottomNavigationItem)
            }
          </MUIBottomNavigation>
        </MuiThemeProvider>
      </div>);
  }
}

BottomNavigation.defaultProps = defaultProps;
