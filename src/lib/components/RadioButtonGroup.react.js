// @flow

import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

type SD_RADIO_BUTTON = {
    /** If true, the radio button is disabled */
  disabled?: boolean,
  /** Label to appear next to button */
  label?: string,
  /** Specify the location of the label relative to the radio button
   * Must be one of: "top", "start", "bottom", or "end". Defaults to "end" */
  labelPlacement?: string,
  /** value of the the radio button */
  value?: any,
}

type Props = {
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name */
  classes?: Object,
  /** the css class name of the root element */
  className?: string,
  /** a callback for firng events to dash */
  fireEvent?: () => void,
  /** the element's ID */
  id: string,
  /** the name that will be applied to the group of radio buttons */
  name: string,
  /**
   * used to create the RadioButtons to populate the RadioButtonGroup with. A Dash user passes in a
   * list of dict items, each one having at least a `value` and `label`. If that value is selected,
   * valueSelected will be updated
   */
  options?: Array<SD_RADIO_BUTTON>,
  /** dash callback to update props on the server */
  setProps?: () => void,
  /** Initial value selected */
  valueSelected: string,
};

type State = {
  value: string,
};

const defaultProps = {
  classes: {},
  className: '',
  fireEvent: () => {},
  options: [],
  setProps: () => {},
}

export default class RadioButtonGroup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {value: this.props.valueSelected};
  }

  buildRadioButton = (buttonItem: SD_RADIO_BUTTON) => {
    return buttonItem.disabled ? (
      <FormControlLabel
        key={buttonItem.value}
        value={buttonItem.value}
        disabled
        control={<Radio classes={this.props.classes}/>}
        label={buttonItem.label}
        labelPlacement={buttonItem.labelPlacement ? buttonItem.labelPlacement : "end"}
      />
    ) : (
      <FormControlLabel
        key={buttonItem.value}
        value={buttonItem.value}
        control={<Radio classes={this.props.classes}/>}
        label={buttonItem.label}
        labelPlacement={buttonItem.labelPlacement ? buttonItem.labelPlacement : "end"}
      />
    );
  };

  handleChange = (event: Object) => {
    this.setState({value: event.target.value});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
    if (typeof this.props.setProps === 'function') {
      this.props.setProps({value: event.target.value});
    }
  };

  render() {
    const { id, className, name, options, valueSelected} = this.props;

    return (
      <FormControl id={id} className={className} component="fieldset">
        <FormLabel component="legend">{name}</FormLabel>
        <RadioGroup
          aria-label={name}
          name={name}
          value={this.state.value}
          defaultValue={valueSelected}
          onChange={this.handleChange}
        >
          {options.map(this.buildRadioButton)}
        </RadioGroup>
      </FormControl>
    );
  }
};

RadioButtonGroup.defaultProps = defaultProps;
