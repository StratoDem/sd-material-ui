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
  /** List of space separated id's of elements to use as aria labels  */
  ariaLabelledBy?: string,
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
  /** The className to add to the component container */
  componentContainerClassName?: string,
  /** The className to add to the content container */
  fullWidth?: boolean,
  /** The className to add to the Overlay component rendered behind the Dialog */
  /** If set to true, the Close Icon will show in the upper right corner of the dialog, closing the Dialog browser side*/
  useBrowserSideClose?: boolean,
  /** "paper" or "body", Determines scroll container */
  scroll?: Object,
  /** Styles to be implemented as inline css */
  style?: Object,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

type State = {
  open: boolean,
};

const defaultProps = {
  ariaLabelledBy: '',
  actions: null,
  children: null,
  className: '',
  open: false,
  setProps: () => {},
  autoScrollBodyContent: false,
  useBrowserSideClose: false,
  style: null,
  scroll: '',
  fullWidth: true
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
      ariaLabelledBy,
      componentContainerClassName,
      scroll,
      style,
      fullWidth,
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
      <div id={id} className={componentContainerClassName}>
        <CssBaseline/>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDialog aria-labelledby={ariaLabelledBy}
                     open={this.state.open}
                     scroll={scroll}
                     fullWidth={fullWidth}
                     onClose={this.closeDialog}
                     className={className}>
            <div style={style}>
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
