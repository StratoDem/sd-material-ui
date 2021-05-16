// @flow

import React, { Component } from 'react';
import { default as MuiAppBar } from '@material-ui/core/AppBar';

type Props = {
  /** Appbar ID */
  id: string,
  /** Children to render inside of the Appbar */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   docked
   *   paper
   *   paperAnchorLeft
   *   paperAnchorRight
   *   paperAnchorTop
   *   paperAnchorBottom
   *   paperAnchorDockedLeft
   *   paperAnchorDockedTop
   *   paperAnchorDockedRight
   *   paperAnchorDockedBottom
   *   modal
   * */
  classes?: {
    root?: string,
    positionFixed?: string,
    positionAbsolute?: string,
    positionSticky?: string,
    positionStatic?: string,
    positionRelative?: string,
    colorDefault?: string,
    colorPrimary?: string,
    colorSecondary?: string,
    colorInherit?: string,
    colorTransparent?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?: string,
  /** The positioning type. Defaults to `fixed`*/
  position?: string,
};

const defaultProps = {
  children: null,
  classes: {},
  className: '',
  classNameRoot: '',
  color: 'primary',
  position: 'fixed',
  setProps: () => {},
};


export default class AppBar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {id, classes, className, color, position} = this.props;

    return (
      <div id={id}>
        <MuiAppBar
          classes={classes}
          className={className}
          color={color}
          position={position}
        >
          {this.props.children}
        </MuiAppBar>
      </div>
    );
  }
}

AppBar.defaultProps = defaultProps;
