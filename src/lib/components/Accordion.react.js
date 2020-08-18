// @flow

import React, { Component } from 'react';
import { default as MuiAccordion } from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  /** Elements to render inside the accordion */
  children?: Node,
  /** The classes to be applied to this component. The keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   rounded
   *   expanded
   *   disabled
   */
  classes?: {
    root?: string,
    rounded?: string,
    expanded?: string,
    disabled?: string
  },
  /** The className of the root element */
  className?: string,
  /** If true, expands the accordion by defaulgt */
  defaultExpanded?: boolean,
  /** The classes to be applied to the details component (the element containing the accordion's
   * children. The keys in this object must be valid CSS rule names, and the values must be strings
   * for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   */
  detailClasses?: {
    root?: string,
  },
  /** If true, the accordion will be displayed in a disabled state */
  disabled?: boolean,
  /** If true, expands the accordion, otherwise collapse it. Setting this prop enables control
   * over the accordion */
  expanded?: boolean,
  /** Dash callback to trigger an event handler */
  fireEvent?: () => void,
  /** The ID of the root element */
  id: string,
  /** The text displayed at the top of the accordion, regardless of expanded state*/
  label?: string,
  /** If true, rounded corners are disabled */
  square?: boolean,
};

type State = {
  disabled: boolean,
  expanded: boolean,
};

const defaultProps = {
  children: null,
  classes: {},
  defaultExpanded: false,
  disabled: false,
  expanded: false,
  fireEvent: () => {},
  label: '',
  setProps: () => {},
  square: false
}

export default class Accordion extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {expanded: props.defaultExpanded};
  }

  handleChange = (event, isExpanded) => {
    this.setState({expanded: isExpanded});

    if (typeof this.props.setProps === 'function') {
      this.props.setProps({expanded: isExpanded});
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});
    if (nextProps.expanded !== this.state.expanded)
      this.setState({expanded: nextProps.expanded});
  };

  render() {
    const { id, className, classes, label, square } = this.props;

    return (
      <div key={`accordion-${id}`} id={id} className={className}>
        <MuiAccordion
          classes={classes}
          expanded={this.state.expanded}
          onChange={this.handleChange}
          square={square}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>{label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {this.props.children}
          </AccordionDetails>
        </MuiAccordion>
      </div>
    )
  };
}

Accordion.defaultProps = defaultProps;
