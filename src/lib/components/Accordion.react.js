// @flow

import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  /** Elements to render inside the accordion */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
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
  /** If true, expands the accordion by defaulgt */
  defaultExpanded: boolean,
  /** If true, the accordion will be displayed in a disabled state */
  disabled: boolean,
  /** If true, expands the accordion, otherwise collapse it. Setting this prop enables control
   * over the accordion */
  expanded: boolean,
  /** If true, rounded corners are disabled */
  square: boolean,
};

type State = {
  disabled: boolean,
  expanded: boolean,
};

const defaultProps = {
  autoWidth: false,
  classes: {},
  disabled: false,
  helperText: '',
  labelText: '',
  labelId: '',
  multiple: false,
  options: [],
  useGrouping: false,
  value: null,
  variant: "standard"
}

export default class Accordion extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {expanded: props.expanded};
  }

  handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  render() {
    const {} = this.props;

    return (
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>General settings</Typography>
            <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  };
}

Accordion.defaultProps = defaultProps;
