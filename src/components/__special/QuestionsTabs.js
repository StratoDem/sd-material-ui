// @flow

import React from 'react';
import { Tabs as MuiTabs, Tab as MuiTab } from 'material-ui/Tabs';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


type QuestionProps = {
  questionText: string,
  value: string,
  clickHandler: (value: string) => void,
};

const Question = (props: QuestionProps) => (
  <button
    onClick={(event) => { event.preventDefault(); props.clickHandler(props.value); }}
    className="question"
  >
    <span className="question-text">{props.questionText}</span>
  </button>
);


type QuestionSectionProps = {
  questionProps: Array<QuestionProps>,
  headerTitle: string,
  clickHandler: (value: string) => void,
};


type Props = {
  /** Component ID */
  id: string,
  /** Array of props for each QuestionSection */
  questionSectionProps: Array<QuestionSectionProps>,
  /** Number of clicks by the user on the Questions component */
  n_clicks?: number,
  /** The previous number of clicks from the Questions component */
  n_clicks_previous?: number,
  /** The value currently selected by clicking on a question answer prompt */
  value: any,
  /** Tabs props */
  tabsProps: Object,
  /** Dash callback to update props */
  setProps?: () => void,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
};
type State = {};

export default class QuestionsTabs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(questionValue: string) {
    if (this.props.setProps) this.props.setProps({
      n_clicks: this.props.n_clicks + 1,
      value: questionValue,
    });
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
    if (this.props.setProps) this.props.setProps({n_clicks_previous: this.props.n_clicks + 1});
  }

  render() {
    return (
      <div className="question-wrapper" id={this.props.id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiTabs {...this.props.tabsProps}>
            {this.props.questionSectionProps.map(qsp => (
              <MuiTab
                label={qsp.headerTitle}
                className="question-section-tab"
              >
                {qsp.questionProps.map(
                  qp => <Question clickHandler={this.handleClick} {...qp} />)}
              </MuiTab>))}
          </MuiTabs>
        </MuiThemeProvider>
      </div>);
  }
}
QuestionsTabs.defaultProps = {
  n_clicks: 0,
  n_clicks_previous: 0,
  setProps: () => {},
  fireEvent: () => {},
  tabsProps: {},
};
