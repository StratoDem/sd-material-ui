// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  id: string,
  actions?: Node,
  children?: Node,
  modal?: boolean,
  open?: boolean,
  setProps?: (props: { modal: boolean, open: boolean }) => void,
};

const propTypes = {
  /** Dialog ID */
  id: PropTypes.string.isRequired,

  /** Actions component or list of components for the Dialog */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),

  /** Is the Dialog a modal (must click on an action to close the Dialog)? */
  modal: PropTypes.bool,

  /** Is the Dialog open? */
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
  open: false,
  modal: false,
  setProps: () => {},
};

export default class SDDialog extends Component<Props, State> {
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

    if (typeof setProps === 'function')
      setProps({open});

    this.setState({open});
  };

  render() {
    const { id, modal, actions } = this.props;

    return (
      <div id={id} className="sd-dialog">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog
            actions={actions}
            modal={modal}
            open={this.state.open}
            onRequestClose={() => { this.changeDialogOpenStatus(false); }}
          >
            {this.props.children}
          </Dialog>
        </MuiThemeProvider>
      </div>);
  }
}

SDDialog.propTypes = propTypes;
SDDialog.defaultProps = defaultProps;
