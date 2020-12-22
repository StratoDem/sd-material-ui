// @flow

import React, {Component} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

type Props = {
  /** Picker ID */
  id: string,
  /** Label for the date or time picker */
  label?: string,
  /** Type of date or time picker, "time", "date", or "date-dialog" */
  type?: string,
  /** Representation of date or time, either YYYY-MM-DD or HH:MM:SS */
  value?: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
};

type State = {
  open: boolean,
};

const defaultProps = {
  label: "",
  value: "01-01-2020",
  type: "date",
  setProps: () => {},
};

export default class Picker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {open: props.open};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.value !== this.state.value)
      this.setState({value: nextProps.value})
  }

  handleChange = (event) => {
    const selectedDate = event
    this.setState({value: selectedDate });

    if (typeof this.props.setProps === 'function') {
      this.props.setProps({value: selectedDate});
    }
  };

  render() {
    const {id, label, type, value} = this.props;
    const selectedDate = new Date(value);

    if(type === "date"){
      return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id={id}
            label={label}
            value={selectedDate}
            onChange={this.handleChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}/>
    </MuiPickersUtilsProvider>);
    }else if(type === "date-dialog") {
      return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>);}else if(type === "time"){
      return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={this.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>);}
      return (<div/>)
    }
}
Picker.defaultProps = defaultProps;
