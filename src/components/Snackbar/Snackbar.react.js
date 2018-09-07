// @flow

import React, { Component } from 'react';

import MuiSnackbar from 'material-ui/Snackbar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Label for the action on the snackbar */
  action?: Node,
  /**
   * The number of milliseconds to wait before automatically dismissing. If no value is specified
   * the snackbar will dismiss normally. If a value is provided the snackbar can still be dismissed
   * normally. If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration?: number,
  /** Override the inline styles of the body element */
  bodyStyle?: object,
  /** CSS class name of the root element */
  className?: string,
  /** Override the inline styles of the content element */
  contentStyle?: object,
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
  style?: object,
};

type State = {
  open: boolean,
};

const defaultProps = {
  action: null,
  autoHideDuration: 3000,
  bodyStyle: {},
  className: '',
  contentStyle: {},
  fireEvent: () => {},
  n_clicks: 0,
  setProps: () => {},
  style: {},
};

export default class Snackbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      this.setState({open: nextProps.open});
    }
  }

  handleOpen = () => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open: true});

    this.setState({open: true});
  };

  handleClose = () => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({open: false});

    this.setState({open: false});
  };

  handleActionClick = () => {
    console.log('handling click event');
    if (this.props.setProps) this.props.setProps({n_clicks: this.props.n_clicks + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const { action, autoHideDuration, bodyStyle, className, contentStyle, id,
      message, style } = this.props;

    if (this.props.fireEvent) {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <MuiSnackbar
              action={action}
              autoHideDuration={autoHideDuration}
              bodyStyle={bodyStyle}
              className={className}
              contentStyle={contentStyle}
              message={message}
              onActionClick={this.handleActionClick}
              onRequestClose={this.handleClose}
              open={this.state.open}
              style={style}
            />
          </MuiThemeProvider>
        </div>
      );
    }
    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiSnackbar
            action={action}
            autoHideDuration={autoHideDuration}
            bodyStyle={bodyStyle}
            className={className}
            contentStyle={contentStyle}
            message={message}
            onRequestClose={this.handleClose}
            open={this.state.open}
            style={style}
          />
        </MuiThemeProvider>
      </div>);
  }
}

Snackbar.defaultProps = defaultProps;
