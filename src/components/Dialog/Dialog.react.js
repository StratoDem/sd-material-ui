// @flow

import React, { Component } from 'react';

import MuiDialog from 'material-ui/Dialog';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Dialog ID */
  id: string,
  /** Actions component or list of components for the Dialog */
  actions?: Node | Array<Node>,
  /** Children to render inside of the Dialog */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Is the Dialog a modal (must click on an action to close)? */
  modal?: boolean,
  /** Is the dialog open?
   * IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
   * an input) for this component's props.open value in order to achieve the desired behavior.
   * If such a listener is not in place, the non-modal version of this dialog will contaminate
   * other callbacks in the browser
   */
  open?: boolean,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

type State = {
  open: boolean,
};

const defaultProps = {
  actions: null,
  children: null,
  className: '',
  open: false,
  modal: false,
  setProps: () => {},
};

export default class Dialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== this.state.open)
      this.setState({open: nextProps.open});
  }

  changeDialogOpenStatus = (open: boolean): void => {
    const { setProps } = this.props;

    if (typeof setProps === 'function') {
      setProps({open});
    }

    this.setState({open});
  };

  render() {
    const { id, className, modal, actions } = this.props;

    return (
      <div id={id} className="sd-dialog">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDialog
            actions={actions}
            className={className}
            modal={modal}
            open={this.state.open}
            onRequestClose={() => { this.changeDialogOpenStatus(false); }}
          >
            {this.props.children}
          </MuiDialog>
        </MuiThemeProvider>
      </div>);
  }
}

Dialog.defaultProps = defaultProps;
