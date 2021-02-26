// @flow

import React, { Component } from 'react';

import MuiStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Set the active step (zero based index). This will enable Step control helpers */
  activeStep?: number,
  /** If true, the labels will appear under the steps */
  alternativeLabel?: boolean,
  /** The style for the back button */
  backButtonStyle?: Object,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   horizontal
   *   vertical
   *   alternativeLabel
   * */
  classes?: {
    root?: string,
    horizontal?: string,
    vertical?: string,
    alternativeLabel?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** The style for the button displayed after all steps have been finished */
  finishedButtonStyle?: Object,
  /** The text to display on the final button when all steps have been completed */
  finishedText?: string,
  /** Dash event handler for click events */
  fireEvent?: () => void,
  /** Dash ID */
  id: string,
  /** If set to true, the Stepper will assist in controlling steps for linear flow */
  linear?: boolean,
  /** The style for the next button */
  nextButtonStyle?: Object,
  /** The stepper orientation (layout flow direction) */
  orientation?: 'horizontal' | 'vertical',
  /** Dash callback to update props on the server */
  setProps?: (props: {stepIndex?: number}) => void,
  /** The number of steps that this component will contain */
  stepCount?: number,
  /** The text labels that will be shown next to each step number. The length of this array must
   * match the total number of steps
   */
  stepLabels?: Array<string>,
  /** Override the inline-style of the root element */
  style?: Object,
};

type State = {
  finished: boolean,
  stepIndex: number,
};

const defaultProps = {
  activeStep: 0,
  backButtonStyle: {marginRight: 12},
  className: '',
  finishedButtonStyle: {},
  finishedText: 'Click here to view again',
  fireEvent: () => {},
  linear: true,
  nextButtonStyle: {},
  orientation: 'horizontal',
  setProps: () => {},
  stepCount: 3,
  stepLabels: ['Step 1', 'Step 2', 'Step 3'],
  style: {},
  alternativeLabel: true,
};

/** Material UI Stepper component */
export default class Stepper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stepIndex: props.activeStep,
      finished: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.activeStep !== this.state.stepIndex)
      this.setState({stepIndex: nextProps.activeStep});
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    const increased = stepIndex + 1;

    this.setState({
      stepIndex: increased,
      finished: increased >= this.props.stepCount,
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

  resetSteps = () => {
    this.setState({stepIndex: 0, finished: false});
    if (this.props.setProps) this.props.setProps({activeStep: 0});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  createSteps = (stepCount: number) => {
    const steps = [];

    for (let i = 0; i < stepCount; i += 1) {
      steps.push(<Step key={`step${i}`}><StepLabel>{this.props.stepLabels[i]}</StepLabel></Step>);
    }

    return steps;
  };

  render() {
    const { id, backButtonStyle, className, finishedButtonStyle, finishedText, linear,
      nextButtonStyle, orientation, stepCount, style, alternativeLabel, classes} = this.props;
    this.resetSteps = this.resetSteps.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    return (
      <div id={id} className={className} style={style}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <MuiStepper
              activeStep={this.state.stepIndex}
              alternativeLabel={alternativeLabel}
              nonLinear={!linear}
              orientation={orientation}
              classes={classes}
            >
              {this.createSteps(stepCount)}
            </MuiStepper>
            {this.state.finished ? (
              <Button
                variant={"contained"}
                disableElevation={false}
                onClick={this.resetSteps}
                style={finishedButtonStyle}
              >{finishedText}</Button>
            ) : (
              <div>
                <div style={{marginTop: 14}}>
                  <Button
                    variant={"contained"}
                    disableElevation={true}
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    style={backButtonStyle}>{"Back"}</Button>
                  <Button
                    variant={"contained"}
                    disableElevation={false}
                    onClick={this.handleNext}
                    style={nextButtonStyle}
                  >{this.state.stepIndex >= stepCount - 1 ? 'Finish' : 'Next'}</Button>
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
