// @flow

import React, { Component } from 'react';

import { RadioButtonGroup as MuiRadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
// import RadioButton from 'material-ui/RadioButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type SD_RADIO_BUTTON = {
  /** If true, the radio button is disabled */
  disabled?: boolean,
  /** Override the inline-styles of the icon element */
  iconStyle?: Object,
  /** Override the inline-styles of the input element */
  inputStyle?: Object,
  /** Label to appear next to button */
  label?: string,
  /** Override the inline-styles of the label element */
  labelStyle?: Object,
  /** Override the inline-styles of the root element */
  style?: Object,
  /** value of the the radio button */
  value?: any,
};

type Props = {
  /** should be used to pass RadioButton components */
  children?: Node,
  /** the css class name of the root element */
  className?: string,
  /** the value property of the radio button that will
   * be selected by default */
  defaultSelected?: any,
  /** a callback for firng events to dash */
  fireEvent?: () => void,
  /** the element's ID */
  id: string,
  /** where the label will be placed for all child radio buttons;
   * takes precedence over labelPosition property of the RadioButton elements */
  labelPosition?: 'left' | 'right',
  /** the name that will be applied to all child radio buttons */
  name: string,
  /**
   * used to create the RadioButtons to populate the RadioButtonGroup with. A Dash user passes in a
   * list of dict items, each one having at least a `value` and `label`. If that value is selected,
   * valueSelected will be updated
   */
  options?: Array<SD_RADIO_BUTTON>,
  /** dash callback to update props on the server */
  setProps?: () => void,
  /** override the inline-styles of the root element */
  style?: {},
  /** value of the currently selected radio button */
  valueSelected?: any,
};

type State = {
  valueSelected?: any,
};

const defaultProps = {
  children: null,
  className: '',
  defaultSelected: '',
  fireEvent: () => {},
  labelPosition: 'right',
  options: [],
  setProps: () => {},
  style: {},
  valueSelected: '',
};

export default class RadioButtonGroup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {valueSelected: this.props.valueSelected};
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.valueSelected !== null && nextProps.valueSelected !== this.props.valueSelected) {
      this.handleChange({}, nextProps.valueSelected);
    }
  }

  handleChange = (event: Object, valueSelected: undefined) => {
    const { setProps } = this.props;

    if (typeof setProps === 'function')
      setProps({valueSelected});

    this.setState({valueSelected});

    if (this.props.fireEvent) {
      this.props.fireEvent({event: 'change'});
    }
  };

  buildRadioButton = (item: SD_RADIO_BUTTON) => (
    <RadioButton
      disabled={item.disabled}
      iconStyle={item.iconStyle}
      inputStyle={item.inputStyle}
      label={item.label}
      labelStyle={item.labelStyle}
      style={item.style}
      value={item.value}
    />
  );

  render() {
    const { id, className, defaultSelected, labelPosition, name,
      style} = this.props;

    return (
      <div id={id}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <MuiRadioButtonGroup
            className={className}
            defaultSelected={defaultSelected}
            labelPosition={labelPosition}
            name={name}
            onChange={this.handleChange}
            style={style}
            valueSelected={this.state.valueSelected}
          >
            {this.props.options.map(this.buildRadioButton)}
          </MuiRadioButtonGroup>
        </MuiThemeProvider>
      </div>);
  }
}

RadioButtonGroup.defaultProps = defaultProps;
