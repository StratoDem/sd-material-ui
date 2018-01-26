// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiDialog from 'material-ui/Dialog';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  id: string,
  actions?: Node,
  children?: Node,
  className?: string,
  modal?: boolean,
  open?: boolean,
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

const propTypes = {
  /** Dialog ID */
  id: PropTypes.string.isRequired,

  /** Actions component or list of components for the Dialog */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,

  /** Is the Dialog a modal (must click on an action to close the Dialog)? */
  modal: PropTypes.bool,

  /** Is the dialog open?
 * IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
 * an input) for this component's props.open value in order to achieve the desired behavior.
 * If such a listener is not in place, the non-modal version of this dialog will contaminate
 * other callbacks in the browser
 */
  open: PropTypes.bool,

  /** Dash callback to update props on the server */
  setProps: PropTypes.func,

  /** children of the Dialog */
  children: PropTypes.node,
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
      this.changeDialogOpenStatus(nextProps.open);
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

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
