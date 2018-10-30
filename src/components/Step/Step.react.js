// @flow

import React, { Component } from 'react';

import { Step as MuiStep, StepLabel } from 'material-ui/Stepper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Mark the step as completed */
  completed?: boolean,
  /** Step ID */
  id: string,
  /** Dash callback to update props on the server */
  setProps?: (props: { active?: boolean, completed?: boolean }) => void,
  /** The text to display for this step */
  stepLabelText?: string,
  /** Override the inline-style of the root element */
  style?: Object,
};

type State = {
  completed: boolean,
};

const defaultProps = {
  completed: false,
  setProps: () => {},
  stepLabelText: '',
  style: {},
};

export default class Step extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {completed: this.props.completed};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.completed !== this.state.completed)
      this.setState({completed: nextProps.completed});
    if (this.props.setProps)
      this.props.setProps({completed: nextProps.completed});
  }

  render() {
    const { id, stepLabelText, style } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiStep
            completed={this.state.completed}
          >
            <StepLabel style={style}>
              {stepLabelText}
            </StepLabel>
          </MuiStep>
        </MuiThemeProvider>
      </div>
    );
  }
}

Step.defaultProps = defaultProps;
