// @flow

import React, { Component } from 'react';

import MuiDialog from 'material-ui/Dialog';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CssBaseline from "@material-ui/core/CssBaseline";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  /** Dialog ID */
  id: string,
  /** Actions component or list of components for the Dialog */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** Is the dialog open?
   *
   * IMPORTANT: When using this component in Dash, a listener must be set up (either as state or
   * an input) for this component's props.open value in order to achieve the desired behavior.
   * If such a listener is not in place, the non-modal version of this dialog will contaminate
   * other callbacks in the browser
   */
  open?: boolean,
  /** If set to true, the body content of the Dialog will be scrollable. */
  // autoScrollBodyContent?: boolean,
  // /** The className to add to the actions container's root element. */
  // actionsContainerClassName?: string,
  // /** The className to add to the content's root element under the title. */
  // bodyClassName?: string,
  // /** The className to add to the content container */
  // contentClassName?: string,
  // /** The className to add to the Overlay component rendered behind the Dialog */
  // overlayClassName?: string,
  // /** CSS class name of the Paper element */
  // paperClassName?: string,
  // /** The className to add to the title's root container element */
  // titleClassName?: string,
  // /** Dash callback to update props on the server */
  setProps?: (props: {open?: boolean}) => void,
};

type State = {
  open: boolean,
};

const defaultProps = {
  children: null,
  className: '',
  open: false,
  setProps: () => {},
};

/** Material UI Dialog component */
export default class Dialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  changeDialogOpenStatus = (open: boolean): void => {
    const { setProps } = this.props;

    if (typeof setProps === 'function') {
      setProps({open});
    }
    this.setState({open});
  };

  openDialog = () => {
    this.changeDialogOpenStatus(true)
  }

  closeDialog = () => {
    this.changeDialogOpenStatus(false)
  }

  render() {
    return (
      <div id={this.props.id}>
        <CssBaseline/>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDialog aria-labelledby="simple-dialog-title" open={this.state.open}>
            <div>
              <IconButton
                color="inherit"
                onClick={this.closeDialog}
                edge="end"
                style={{"float": "right"}}
              >
                <CloseIcon/>
              </IconButton>
              {this.props.children}
            </div>
          </MuiDialog>
        </MuiThemeProvider>
        <button onClick={this.openDialog}>Open Dialog</button>

      </div>
  );
  }
}

Dialog.defaultProps = defaultProps;
