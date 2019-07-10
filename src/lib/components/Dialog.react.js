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
  /** Is the Dialog a modal (must click on an action to close)?
   *
   * NOTE: If the Dialog is created with modal=False, the callback that controls opening and closing
   * the Dialog should include the component's open value as a state, and check whether it is either
   * already open or closed before attempting to open or close it. See comments for the open prop.
   */
  modal?: boolean,
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
  actionsContainerClassName: null,
  bodyClassName: null,
  contentClassName: null,
  overlayClassName: null,
  paperClassName: null,
  titleClassName: null,
  autoScrollBodyContent: false,
};

/** Material UI Dialog component */
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
    const {
      id,
      className,
      modal,
      actions,
      actionsContainerClassName,
      bodyClassName,
      contentClassName,
      overlayClassName,
      paperClassName,
      titleClassName } = this.props;

    return (
      <div id={id} className="sd-dialog">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiDialog
            actions={actions}
            className={className}
            actionsContainerClassName={actionsContainerClassName}
            bodyClassName={bodyClassName}
            contentClassName={contentClassName}
            overlayClassName={overlayClassName}
            paperClassName={paperClassName}
            titleClassName={titleClassName}
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
