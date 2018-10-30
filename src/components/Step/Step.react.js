// @flow

import React, { Component } from 'react';

import { Step as MuiStep, StepContent, StepLabel } from 'material-ui/Stepper';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Sets the step as active. Is passed to child components */
  active?: boolean,
  /** Should be Step sub-components such as StepLabel */
  children?: Node,
  /** Mark the step as completed. Is passed to child components */
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
  active: false,
  children: [],
  completed: false,
  setProps: () => {},
  stepLabelText: '',
};

export default class Step extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {completed: this.props.completed};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.completed !== this.state.completed)
      this.setState({completed: nextProps.completed});
    if (this.props.setProps) this.props.setProps({completed: nextProps.completed});
  }

  render() {
    const { id, style } = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiStep
            active={this.props.active}
            completed={this.props.completed}
          >
            <StepLabel style={style}>
              {this.props.stepLabelText}
            </StepLabel>
            <StepContent>
              {this.props.children}
            </StepContent>
          </MuiStep>
        </MuiThemeProvider>
      </div>
    );
  }
}

Step.defaultProps = defaultProps;
