// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  action?: Node,
  autoHideDuration?: number,
  bodyStyle?: object,
  className?: string,
  contentStyle?: object,
  fireEvent?: () => void,
  id: string,
  message: Node,
  n_clicks?: number,
  open: boolean,
  setProps?: (props: {open?: boolean}) => void,
  style?: object,
};

const propTypes = {
  /**
   * The label for the action on the snackbar.
   */
  action: PropTypes.node,

  /**
   * The number of milliseconds to wait before automatically dismissing. If no value is specified
   * the snackbar will dismiss normally. If a value is provided the snackbar can still be dismissed
   * normally. If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration: PropTypes.number,

  /**
   * Override the inline-styles of the body element.
   */
  bodyStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,

  /**
   * Override the inline-styles of the content element.
   */
  contentStyle: PropTypes.objectOf(PropTypes.any),

  /**
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

  /**
   * The element's ID.
   */
  id: PropTypes.string.isRequired,

  /**
   * 	The message to be displayed.
   * 	(Note: If the message is an element or array, and the Snackbar may re-render while it is
   * 	still open, ensure that the same object remains as the message property if you want to avoid
   * 	the Snackbar hiding and showing again)
   */
  message: PropTypes.node.isRequired,

  /**
   * An integer that represents the number of times that action button has been clicked on.
   */
  n_clicks: PropTypes.number,

  /**
   * Controls whether the Snackbar is opened or not.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Dash callback to update props on the server
   */
  setProps: PropTypes.func,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.objectOf(PropTypes.any),
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

export default class SDSnackbar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== null && nextProps.open !== this.props.open) {
      if (nextProps.open === true) this.handleOpen();
      if (nextProps.open === false) this.handleClose();
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
            <Snackbar
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
    } else {
      return (
        <div id={id}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Snackbar
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
        </div>
      );
    }
  }
}

SDSnackbar.propTypes = propTypes;
SDSnackbar.defaultProps = defaultProps;
