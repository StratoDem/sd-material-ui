// @flow

import React from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  actions: Node,
  children: Node,
  modal: boolean,
  open: boolean,
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

const propTypes = {
  /** The ID used to identify this component in Dash callbacks */
  id: PropTypes.string.isRequired,

  /** The button that will close the window */
  actions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /** Dialog children, usually the included sub-components */
  children: PropTypes.node.isRequired,

  /** A boolean indicating whether the Dialog window can only be closed by
   * selecting an action button inside the window */
  modal: PropTypes.bool,

  /** If `true`, the Dialog is open */
  open: PropTypes.bool,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: PropTypes.func,
};

const defaultProps = {
  open: false,
  modal: false,
  setProps: () => {
  },
};

export default class SDDialog extends React.Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== this.props.open)
      this.setState({open: nextProps.open});
  }

  render() {
    const {id, modal, setProps} = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={() => { this.setProps({open: false}); }}
      />
    ];

    return (
      <div id={id} className="sd-dialog">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog
            actions={actions}
            modal={this.props.modal}
            open={this.props.open}
            onRequestClose={() => { this.setProps({open: false}); }}
          >
            {
              this.props.children
            }
          </Dialog>
        </MuiThemeProvider>
      </div>);
  }
}

SDDialog.propTypes = propTypes;
SDDialog.defaultProps = defaultProps;