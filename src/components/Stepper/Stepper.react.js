// @flow

import React, { Component } from 'react';

import {Step as MuiStep, StepLabel, Stepper as MuiStepper} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Set the active step (zero based index). This will enable Step control helpers */
  activeStep?: number,
  /** The style for the back button */
  backButtonStyle?: Object,
  /** Should be two or more <Step /> components */
  children: Node,
  /** CSS class name of the root element */
  className?: string,
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
  style: {},
};

const EnhancedStep = ({
  id,
  icon,
  stepLabelText,
  style,
}) => (
  <div id={id}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <MuiStep>
        <StepLabel style={style} icon={icon}>
          {stepLabelText}
        </StepLabel>
      </MuiStep>
    </MuiThemeProvider>
  </div>
);

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
      finished: increased >= this.props.children.length,
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

  render() {
    const { id, backButtonStyle, children, className, finishedButtonStyle, finishedText, linear,
      nextButtonStyle, orientation, style } = this.props;
    const EnhancedSteps = children.map(child => (
      <EnhancedStep
        id={child.id}
        icon={child.icon}
        stepLabelText={child.stepLabelText}
        style={child.style}
      />
    ));

    return (
      <div id={id} className={className} style={style}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <MuiStepper
              activeStep={this.state.stepIndex}
              linear={linear}
              orientation={orientation}
            >
              {EnhancedSteps}
            </MuiStepper>
            {this.state.finished ? (
              <RaisedButton
                label={finishedText}
                onClick={this.resetSteps}
                style={finishedButtonStyle}
              />
            ) : (
              <div>
                <div style={{marginTop: 14}}>
                  <FlatButton
                    label="Back"
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    style={backButtonStyle}
                  />
                  <RaisedButton
                    label={this.state.stepIndex >= this.props.children.length - 1 ? 'Finish' : 'Next'}
                    primary={true}
                    onClick={this.handleNext}
                    style={nextButtonStyle}
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
