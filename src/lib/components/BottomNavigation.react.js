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
  /** Mapping from MUI Element name to the intended classname for that Element */
  /** See https://material-ui.com/api/bottom-navigation/#css*/
  classes?: Object,
  /** CSS class name of the root element */
  className?: string,
  /** If True, show the labels of unselected Items */
  displayLabels: boolean,
  /** Array of navigation item props to pass to BottomNavigationItem */
  navItems: Array<T_NAV_ITEM>,
  /** Initial selected value for the BottomNavigation */
  selectedValue?: number,
  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps?: (props: { selectedValue: number }) => void,
};
type State = {
  selectedValue: number,
};

const defaultProps = {
  classes: {},
  className: null,
  id: null,
  setProps: () => {},
  displayLabels: null,
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
      selectedValue: props.selectedValue,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props): void {
    const newValue = nextProps.selectedValue
    if (nextProps.selectedValue !== newValue) {
      this.setState({selectedValue: newValue});
      this.props.setProps({selectedValue: newValue})
    }
  }

  buildBottomNavigationItem = (navItem: T_NAV_ITEM, selectedValue: number) => {
    const navItemIcon = (<span className={navItem.iconClassName}/>);

    return (
      <BottomNavigationItem
        showLabel={this.props.displayLabels}
        key={navItem.label}
        label={navItem.label}
        icon={navItemIcon}
        onClick={() => {
          this.setState({selectedValue: selectedValue});
          this.props.setProps({selectedValue: selectedValue});
        }}
      />);
  };

  render() {
    const {id, navItems, className, selectedValue} = this.props;
    this.buildBottomNavigationItem = this.buildBottomNavigationItem.bind(this)

    return (
      <div id={id} className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiBottomNavigation value={selectedValue}>
            {
              navItems.map(this.buildBottomNavigationItem)
            }
          </MuiBottomNavigation>
        </MuiThemeProvider>
      </div>);
  }
}

BottomNavigation.defaultProps = defaultProps;
