// @flow

import React, { Component } from 'react';

import MuiStepper from 'material-ui/Stepper';
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
  /** The text that will be made into a link to click after finishing the stepper */
  finished?: boolean,
  finishedTextLink?: string,
  /** Any unlinked text to follow finishedTextLink */
  finishedTextRemainder?: string,
  /** Override the inline-style of the finished text */
  finishedStyle?: Object,
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
  finished: false,
  finishedTextLink: 'Click here',
  finishedTextRemainder: ' to view again.',
  finishedStyle: {},
  fireEvent: () => {},
  linear: true,
  orientation: 'horizontal',
  setProps: () => {},
  stepTextList: [],
  style: {},
};

export default class Stepper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      stepIndex: props.activeStep,
      finished: props.finished,
    };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.props.children.length,
    });
    if (this.props.setProps) this.props.setProps({activeStep: stepIndex + 1});
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
      if (this.props.setProps) this.props.setProps({activeStep: stepIndex - 1});
      if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    }
  };

  getStepText = (stepIndex: number) => this.props.stepTextList[stepIndex];

  render() {
    const { id, className, finishedStyle, linear, orientation, style } = this.props;

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
              <p style={finishedStyle}>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}
                >
                  {this.props.finishedTextLink}
                </a> {this.props.finishedTextRemainder}
              </p>
            ) : (
              <div>
                <p>
                  {this.getStepText(this.state.stepIndex)}
                </p>
                <div style={{marginTop: 14}}>
                  <FlatButton
                    label="Back"
                    disabled={this.state.stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={this.state.stepIndex === this.props.children.length ? 'Finish' : 'Next'}
                    primary={true}
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
