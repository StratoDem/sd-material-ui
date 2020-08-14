// @flow

import React, { Component } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Checkbox is checked if true */
  checked?: boolean,
  /** CSS class name of the root element */
  className?: string,
  /** Mapping from MUI Element name to the intended classname for that Element */
  classes?: Object,
  /** Checkbox is disabled if true */
  disabled?: boolean,
  /** A callback for firing events to dash */
  fireEvent?: () => void,
  /** The element's ID */
  id: string,
  /** The label for the checkbox */
  label: string,
  /** The name prop of the checkbox */
  name: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** Override the inline styles of the root element */
  style?: Object,
};

type State = {
  checked: boolean,
};

const defaultProps = {
  checked: false,
  disabled: false,
  classes: {},
  fireEvent: () => {},
  setProps: () => {},
  style: {},
  className: null,
  name: '',
  label: null
};

/** Material UI Checkbox component */
export default class Checkbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {checked: props.checked};
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
    if (nextProps.checked !== null && nextProps.checked !== this.props.checked) {
      this.props.setProps({checked: nextProps.checked})
      // this.setState({checked: nextProps.checked});
    }
  }

  handleClick = () => {
    const set_check = !this.state.checked
    if (this.setState) this.setState({checked: set_check})
    if (this.props.setProps) this.props.setProps({checked: set_check})
    if (this.props.fireEvent) this.props.fireEvent({event: 'click'});
  };

  render() {
    const { disabled, style, classes, id, className, name, label} = this.props;
    if (this.props.fireEvent || this.props.setProps) {
      this.handleClick = this.handleClick.bind(this)
      return (
        <div id={id} className={className}>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <FormControlLabel control={<MuiCheckbox
                checked={this.state.checked}
                disabled={disabled}
                style={style}
                classes={classes}
                name={name}
                onChange={this.handleClick}
              />} label={label}/>

          </MuiThemeProvider>
        </div>);
    }
    return (
      <div id={id} className={className}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <FormControlLabel control={ <MuiCheckbox
              checked={this.state.checked}
              disabled={disabled}
              className={className}
              style={style}
              classes={classes}
              name={name}
            />} label={label}/>
        </MuiThemeProvider>
      </div>);
  }
}

Checkbox.defaultProps = defaultProps;
