// @flow

import React, { Component } from 'react';

import MuiDialog from '@material-ui/core/Dialog';
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
  actions?: Node | Array<Node>,
  /** Children to render inside of the Dialog */
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
  autoScrollBodyContent?: boolean,
  /** The className to add to the actions container's root element. */
  actionsContainerClassName?: string,
  /** The className to add to the content's root element under the title. */
  bodyClassName?: string,
  /** The className to add to the content container */
  contentClassName?: string,
  /** The className to add to the Overlay component rendered behind the Dialog */
  overlayClassName?: string,
  /** CSS class name of the Paper element */
  paperClassName?: string,
  /** The className to add to the title's root container element */
  titleClassName?: string,
  /** If set to true, the Close Icon will show in the upper right corner of the dialog, closing the Dialog browser side*/
  useBrowserSideClose?: boolean,
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
  setProps: () => {},
  actionsContainerClassName: null,
  bodyClassName: null,
  contentClassName: null,
  overlayClassName: null,
  paperClassName: null,
  titleClassName: null,
  autoScrollBodyContent: false,
  useBrowserSideClose: false,
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

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.open !== this.state.open)
      this.setState({open: nextProps.open});
  }

  render() {
    const {
      id,
      className,
      actions,
      actionsContainerClassName,
      bodyClassName,
      contentClassName,
      overlayClassName,
      paperClassName,
      titleClassName,
      useBrowserSideClose} = this.props;

    if (useBrowserSideClose) {
       this.browserSideClose = <IconButton
                color="inherit"
                onClick={this.closeDialog}
                style={{"float": "right",
                        "margin-top": "-16px",
                        "margin-right": "-12px",}}
              >
                <CloseIcon/>
              </IconButton>
    } else {
      this.browserSideClose = <div/>
    }

    return (
      <div id={id} className="sd-dialog">
        <CssBaseline/>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDialog aria-labelledby="simple-dialog-title"
                     open={this.state.open}
                     scroll="body"
                     fullWidth={true}
                     onClose={this.closeDialog}
                     actions={actions}
                     className={className}
                     actionsContainerClassName={actionsContainerClassName}
                     bodyClassName={bodyClassName}
                     contentClassName={contentClassName}
                     overlayClassName={overlayClassName}
                     paperClassName={paperClassName}
                     titleClassName={titleClassName}>
            <div style={{"margin": "14px"}}>
              {this.browserSideClose}
              {this.props.children}
            </div>
          </MuiDialog>
        </MuiThemeProvider>
      </div>
  );
  }
}

Dialog.defaultProps = defaultProps;
