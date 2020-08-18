// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

type Props = {
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   edgeStart
   *   edgeEnd
   *   switchBase
   *   colorPrimary
   *   colorSecondary
   *   sizeSmall
   *   checked
   *   disabled
   *   input
   *   thumb
   *   tract
   */
  classes?: {
    root?: string,
    edgeStart?: string,
    edgeEnd?: string,
    switchBase?: string,
    colorPrimary?: string,
    colorSecondary?: string,
    sizeSmall?: string,
    checked?: string,
    disabled?: string,
    input?: string,
    thumb?: string,
    tract?: string
  },
  /** CSS class name of the root element */
  className?: string,
  /** Whether the toggle is disabled (true) or not (false) */
  disabled?: boolean,
  /** Toggle ID */
  id: string,
  /** The label for the toggle */
  label?: string,
  /** If using a single label, its position can be: "top", "start", "bottom", or "end" */
  labelPlacement?: string,
  /** The space between the label(s) and toggle */
  labelSpacing?: int,
  /**
   * A second label for the toggle. If this is used, the labelPlacement value is ignored, and the
   * secondaryLabel will be positioned to the right of the toggle, and the first label to the left
   */
  secondaryLabel?: string,
  /** Dash callback to update props on the server */
  setProps?: () => void,
  /** Whether toggle is on (true) or off (false) */
  toggled: boolean,
};

type State = {
  disabled: boolean,
  toggled: boolean,
};

const defaultProps = {
  className: '',
  classes: {},
  disabled: false,
  labelPlacement: "right",
  label: '',
  labelSpacing: 1,
  secondaryLabel: '',
  setProps: () => {},
}

export default class Toggle extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {disabled: props.disabled, toggled: props.toggled};
  }

  handleChange = (event) => {
    this.setState({toggled: event.target.checked });

    if (typeof this.props.setProps === 'function') {
      this.props.setProps({toggled: event.target.checked});
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.disabled !== this.state.disabled)
      this.setState({disabled: nextProps.disabled});
  }

  render() {
    const {
      id,
      classes,
      className,
      disabled,
      label,
      secondaryLabel,
      labelPlacement} = this.props;

    return secondaryLabel ? (
      <div id={id} className={className}>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>{label}</Grid>
            <Grid item>
              <Switch
                checked={this.state.toggled}
                onChange={this.handleChange}
                disabled={this.state.disabled}
                classes={classes}
              />
            </Grid>
            <Grid item>{secondaryLabel}</Grid>
          </Grid>
        </Typography>
      </div>
    ) : (
      <div id={id} className={className}>
        <FormControlLabel
          control={<Switch
            checked={this.state.toggled}
            onChange={this.handleChange}
            disabled={this.state.disabled}
            classes={classes}
          />}
          label={label}
          labelPlacement={labelPlacement}
          value={labelPlacement}
        />
      </div>
    );
  }
};

Toggle.defaultProps = defaultProps;
