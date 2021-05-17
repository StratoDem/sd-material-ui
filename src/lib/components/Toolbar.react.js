// @flow

import React, { Component } from 'react';
import { default as MuiToolbar } from '@material-ui/core/Toolbar';

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
  /** The component used for the root node. Defaults to `div`. */
  component?: string,
  /** If true, disables gutter padding.. Defaults to `false`*/
  disableGutters?: boolean,
  /** The variant to use. Defaults to `regular`*/
  variant?: 'regular' | 'dense',
};

const defaultProps = {
  children: null,
  classes: {},
  className: '',
  classNameRoot: '',
  component: 'div',
  disableGutters: false,
  variant: 'regular',
  setProps: () => {},
};


export default class Toolbar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {id, classes, className, component, disableGutters, variant} = this.props;

    return (
      <div id={id}>
        <MuiToolbar
          classes={classes}
          className={className}
          component={component}
          disableGutters={disableGutters}
          variant={variant}
        >
          {this.props.children}
        </MuiToolbar>
      </div>
    );
  }
}

Toolbar.defaultProps = defaultProps;
