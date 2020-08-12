// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  /** Button ID */
  id: string,
  /** Children to render inside of the Button */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
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

export default class FlatButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {disabled: props.disabled};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});
  }

  render() {
    const {id, className} = this.props;

    return (
      <div id={id}>
        <Button
          className={className}
          disabled={this.state.disabled}
          disableElevation={true}
        >
          {this.props.children}
        </Button>
      </div>
    );
  }
}

FlatButton.defaultProps = defaultProps;
