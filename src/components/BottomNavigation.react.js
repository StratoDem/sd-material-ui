// @flow

import React from 'react';
import PropTypes from 'prop-types';

import {
  BottomNavigationItem,
  BottomNavigation as MUIBottomNavigation } from 'material-ui/BottomNavigation';


type Props = {
  navItems: Array<{
    label: string,
    icon: Element | string,
    value: string | number,
  }>,

  setProps?: (props: {selectedIndex: number}) => void,
  selectedIndex?: number,
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
  })).isRequired,

  /** Initial selected index for the BottomNavigation */
  selectedIndex: PropTypes.number,

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
    const { id, navItems } = this.props;

    return (
      <div id={id}>
        <MUIBottomNavigation selectedIndex={this.state.selectedIndex}>
          {
            navItems.map((navItem, selectedIndex) => (
              <BottomNavigationItem
                key={navItem.label}
                label={navItem.label}
                icon={navItem.icon}
                onClick={() => {
                  this.setState({selectedIndex});

                  if (typeof this.props.setProps === 'function')
                    this.props.setProps({selectedIndex});
                }}
              />))
          }
        </MUIBottomNavigation>
      </div>);
  }
}

BottomNavigation.propTypes = propTypes;
