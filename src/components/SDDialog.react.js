// @flow

import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  actions?: Node,
  children: Node,
  modal?: boolean,
  open?: boolean,
  setProps?: (props: { modal: boolean, open: boolean }) => void,
};

const defaultProps = {
  open: false,
  modal: false,
  setProps: () => {},
};

export default class SDDialog extends React.Component<Props> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.open !== this.state.open)
      this.setState({open: nextProps.open});
  }

  render() {
    const { id, modal, children, setProps } = this.props;
    const { open } = this.state;

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
            title={<h5>Share this page:</h5>}
            actions={actions}
            modal={this.props.modal}
            open={this.state.open}
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

SDDialog.defaultProps = defaultProps;
