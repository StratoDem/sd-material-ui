// @flow

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Card from './Card.react';


type QuestionProps = {
  questionType: string,
  questionText: string,
  answerPrompt: string,
  value: string,
  clickHandler: (value: string) => void,
};

const Question = (props: QuestionProps) => (
  <div className="question">
    <div className="question-type">{props.questionType}</div>
    <div className="question-text">
      <strong>Q</strong>
      <span>{props.questionText}</span>
    </div>
    <div className="ask">
      <FlatButton
        label={props.answerPrompt}
        primary
        onClick={() => props.clickHandler(props.value)}
      />
    </div>
  </div>
);


type QuestionSectionProps = {
  questionProps: Array<QuestionProps>,
  headerTitle: string,
  titleStyle?: Object,
  headerTitleStyle?: Object,
  headerIconStyle?: Object,
  initiallyExpanded: boolean,
  clickHandler: (value: string) => void,
};
const defaultQuestionSectionProps = {
  titleStyle: {},
  headerTitleStyle: {},
  headerIconStyle: {},
  initiallyExpanded: false,
};

const QuestionSection = (props: QuestionSectionProps) => (
  <div className="wrapper-card">
    <Card
      headerTitle={props.headerTitle}
      titleStyle={props.titleStyle}
      headerTitleStyle={props.headerTitleStyle}
      headerIconStyle={props.headerIconStyle}
      initiallyExpanded={props.initiallyExpanded}
    >
      {props.questionProps.map(qp => <Question clickHandler={props.clickHandler} {...qp} />)}
    </Card>
  </div>);
QuestionSection.defaultProps = defaultQuestionSectionProps;


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
  /** Dash callback to update props */
  setProps?: () => void,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
};
type State = {};

/** Questions wrapper copmonent */
export default class QuestionsReact extends React.Component<Props, State> {
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
        {this.props.questionSectionProps.map(qsp => (
          <QuestionSection clickHandler={this.handleClick} {...qsp} />))}
      </div>);
  }
}
QuestionsReact.defaultProps = {
  n_clicks: 0,
  n_clicks_previous: 0,
  setProps: () => {},
  fireEvent: () => {},
};
