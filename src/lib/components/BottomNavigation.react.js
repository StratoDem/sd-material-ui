// @flow

import React, { Component } from 'react';

import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationItem from "@material-ui/core/BottomNavigationAction";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type T_NAV_ITEM = {
  /** Label to use for the navigation item */
  label: string,
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
  /** CSS class name of the root element */
  className?: string,
  /** Array of navigation item props to pass to BottomNavigationItem */
  navItems: Array<T_NAV_ITEM>,
  /** Initial selected index for the BottomNavigation */
  selectedIndex?: number,
  /** Style to apply to the selected icon */
  classes?: Object,
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
  classes: {},
  className: null,
  id: null,
  setProps: () => {},
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

  UNSAFE_componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.selectedIndex !== this.props.selectedIndex)
      this.setState({selectedIndex: nextProps.selectedIndex});
  }

  buildBottomNavigationItem = (navItem: T_NAV_ITEM, selectedIndex: number) => {
    const navItemIcon = (<span className={navItem.iconClassName}/>);

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
    const {id, navItems, className} = this.props;
    this.buildBottomNavigationItem = this.buildBottomNavigationItem.bind(this)

    return (
      <div id={id} className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiBottomNavigation value={this.state.selectedIndex}>
            {
              navItems.map(this.buildBottomNavigationItem)
            }
          </MuiBottomNavigation>
        </MuiThemeProvider>
      </div>);
  }
}

BottomNavigation.defaultProps = defaultProps;
