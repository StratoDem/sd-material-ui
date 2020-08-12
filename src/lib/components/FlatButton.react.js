// @flow

import React, { Component } from 'react';
import {Button as MUIButton} from '@material-ui/core/Button';
import {IconButton as MUIIconButton} from '@material-ui/core/IconButton';

type Props = {
  /** Button ID */
  id: string,
  /** Children to render inside of the Button */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Is the Button raised? */
  raised?: boolean,
  /** Is the Button an IconButton? */
  useIcon?: boolean,
  /** Is the Button disabled? */
  disabled?: boolean,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

type State = {
  disabled: boolean,
};

const defaultProps = {
  children: null,
  className: '',
  disabled: false,
  setProps: () => {},
};

export default class Button extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {disabled: props.disabled};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});
  }

  render() {
    const {id, className, useIcon} = this.props;
    if (useIcon){
      return (
        <div id={id}>
          <MUIButton
            className={className}
            disabled={this.state.disabled}
            disableElevation={!this.props.raised}
          >
            {this.props.children}
          </MUIButton>
        </div>
      );
    }
    return (
      <div id={id}>
        <MUIIconButton
          className={className}
          disabled={this.state.disabled}
        >
          {this.props.children}
        </MUIIconButton>
      </div>
    );


  }
}

Button.defaultProps = defaultProps;
