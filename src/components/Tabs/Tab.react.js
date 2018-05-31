// @flow

import React, { Component } from 'react';

import { Tab as MuiTab } from 'material-ui/Tabs';
import FontIcon from "../FontIcon/FontIcon.react";

type Props = {
  /** Element ID */
  id: string,
  /** Override the inline-styles of the button element */
  buttonStyle?: Object,
  /** The css class name of the root element */
  className?: string,
  /** Icon class name to use for the FontIcon in the tab */
  iconClassName?: string,
  /** Text value of the tab item */
  label?: string,
  /** Override the inline-styles of the root element */
  style: Object,
  /**
   * If value prop passed to Tabs component, this value prop is also required.
   * It assigns a value to the tab so that it can be selected by the Tabs
   */
  value?: any,
};

type State = {
};

const defaultProps = {
  buttonStyle: {},
  className: undefined,
  iconClassName: undefined,
  label: undefined,
  style: {},
  value: undefined,
};

export default class Tab extends Component<Props, State> {
  render() {
    const { iconClassName, ...otherProps } = this.props;

    const icon = typeof iconClassName !== 'undefined'
      ? <FontIcon className={iconClassName} />
      : undefined;

    return <MuiTab {...otherProps} icon={icon} />;
  }
}

Tab.defaultProps = defaultProps;
