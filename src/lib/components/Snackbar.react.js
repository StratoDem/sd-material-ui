// @flow

import React, { Component } from 'react';

import MuiSnackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** The text of the action button inside the snackbar. If empty, no action button will be added */
  action?: string,
  /** Styles to be applied to the action button */
  actionStyles?: Object,
  /**
   * The number of milliseconds to wait before automatically dismissing. If no value is specified
   * the snackbar will dismiss normally. If a value is provided the snackbar can still be dismissed
   * normally. If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration?: number,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   anchorOriginTopCenter
   *   anchorOriginBottomCenter
   *   anchorOriginTopRight
   *   anchorOriginBottomRight
   *   anchorOriginTopLeft
   *   anchorOriginBottomLeft
   */
  classes?: {
    root?: string,
    anchorOriginTopCenter?: string,
    anchorOriginBottomCenter?: string,
    anchorOriginTopRight?: string,
    anchorOriginBottomRight?: string,
    anchorOriginTopLeft?: string,
    anchorOriginBottomLeft?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** The element's ID */
  id: string,
  /**
   * The message to be displayed.
   * (Note: If the message is an element or array, and the Snackbar may re-render while it is
   * still open, ensure that the same object remains as the message property if you want to avoid
   * the Snackbar hiding and showing again)
   */
  message: Node,
  /** An integer that represents the number of times that action button has been clicked */
  n_clicks?: number,
  /** Controls whether the Snackbar is opened or not */
  open: boolean,
  /** Dash callback to update props on the server */
  setProps?: (props: {open?: boolean}) => void,
  /** Override the inline styles of the root element */
  style?: Object,
};

type State = {
  open: boolean,
};

const defaultProps = {
  action: '',
  autoHideDuration: 3000,
  bodyStyle: {},
  className: '',
  contentStyle: {},
  fireEvent: () => {},
  n_clicks: 0,
  open: false,
  setProps: () => {},
  style: {},
};

/** Material UI Snackbar component */
export default class Snackbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    const _open = nextProps.open
    if (nextProps.open !== null){
      this.setState({open: _open});
      this.props.setProps({open: _open})
    }
  }

  handleClose = () => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open: false});

    this.setState({open: false});
  };

  handleActionClick = () => {
    if (this.props.setProps) this.props.setProps({n_clicks: this.props.n_clicks + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const {action, actionStyles, autoHideDuration, className, id, message, style } = this.props;

    return action ? (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiSnackbar
            autoHideDuration={autoHideDuration}
            className={className}
            message={message}
            onClose={this.handleClose}
            open={this.state.open}
            style={style}
            action={
              <Button onClick={this.handleActionClick} style={actionStyles}>
                {action}
              </Button>
            }
          />
        </MuiThemeProvider>
      </div>
    ) : (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiSnackbar
            autoHideDuration={autoHideDuration}
            className={className}
            message={message}
            onClose={this.handleClose}
            open={this.state.open}
            style={style}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

Snackbar.defaultProps = defaultProps;
