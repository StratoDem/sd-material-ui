// @flow

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

type Props = {
  /** Override the progress's color */
  color?: string,
  /** LinearDeterminate component ID */
  id: string,
  /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. */
  value: number,
  /** The variant to use. Options are "label" or "no-label".*/
  variant?: 'label' | 'no-label',
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

const defaultProps = {
  color: 'inherit',
  variant: 'no-label',
  setProps: () => {},
};

export default class LinearDeterminate extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {value: props.value};
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.value !== this.state.value)
      this.setState({value: nextProps.value});
  }

  render() {
    const {color, id, variant} = this.props;

    return variant === 'no-label' ? (
      <div id={id}>
        <Box sx={{width: '100%', color: color}}>
          <LinearProgress
            color='inherit'
            variant='determinate'
            value={this.state.value}
          />
        </Box>
      </div>
    ) : (
      <div id={id} style={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '100%', color: color, mr: 1}}>
          <LinearProgress
            color='inherit'
            variant='determinate'
            value={this.state.value}
          />
        </Box>
        <Box sx={{ minWidth: 35}}>
          <Typography variant='body2'>{`${Math.round(this.state.value)}%`}</Typography>
        </Box>
      </div>
    );
  }
}

LinearDeterminate.defaultProps = defaultProps;
