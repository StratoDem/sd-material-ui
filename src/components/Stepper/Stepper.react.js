// @flow

import React, { Component } from 'react';

import { Stepper as MuiStepper } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Set the active step (zero based index). This will enable Step control helpers */
  activeStep?: number,
  /** Should be two or more <Step /> components */
  children?: Node,
  /** CSS class name of the root element */
  className?: string,
  /** The text to display on the final button when all steps have been completed */
  finishedText?: string,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** Dash ID */
  id: string,
  /** If set to true, the Stepper will assist in controlling steps for linear flow */
  linear?: boolean,
  /** The stepper orientation (layout flow direction) */
  orientation?: 'horizontal' | 'vertical',
  /** Dash callback to update props on the server */
  setProps?: (props: {stepIndex?: number}) => void,
  /** A list of content to display when each step is active */
  stepContentList?: Array<Node>,
  /** The text that should be associated with each step */
  stepTextList?: Array<string>,
  /** Override the inline-style of the root element */
  style?: Object,
};

type State = {
  finished: boolean,
  stepIndex: number,
};

const defaultProps = {
  activeStep: 0,
  children: [],
  className: '',
  finishedText: 'Click here to view again',
  fireEvent: () => {},
  linear: true,
  orientation: 'horizontal',
  setProps: () => {},
  stepContentList: [],
  stepTextList: [],
  style: {},
};

export default class Stepper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stepIndex: props.activeStep,
      finished: false,
    };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    const increased = stepIndex + 1;

    this.setState({
      stepIndex: increased,
      finished: stepIndex >= this.props.children.length,
    });
    if (this.props.setProps) this.props.setProps({activeStep: increased});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    const decreased = stepIndex - 1;

    if (stepIndex > 0) {
      this.setState({stepIndex: decreased});
      if (this.props.setProps) this.props.setProps({activeStep: decreased});
      if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    }
  };

  getStepText = (stepIndex: number) => this.props.stepTextList[stepIndex];

  getStepContent = (stepIndex: number) => this.props.stepContentList[stepIndex];

  render() {
    const { id, className, finishedText, linear, orientation, style } = this.props;

    return (
      <div id={id} className={className} style={style}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <MuiStepper
              activeStep={this.state.stepIndex}
              linear={linear}
              orientation={orientation}
            >
              {this.props.children}
            </MuiStepper>
            {this.state.finished ? (
              <RaisedButton
                label={finishedText}
                onClick={() => this.setState({stepIndex: 0, finished: false})}
              />
            ) : (
              <div>
                <p>
                  {this.getStepText(this.state.stepIndex)}
                </p>
                {this.getStepContent(this.state.stepIndex)}
                <div style={{marginTop: 14}}>
                  <FlatButton
                    label="Back"
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={this.state.stepIndex === this.props.children.length ? 'Finish' : 'Next'}
                    onClick={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

Stepper.defaultProps = defaultProps;
