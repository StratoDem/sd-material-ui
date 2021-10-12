// @flow

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props = {
  /** Override the progress's color */
  color?: string,
  /** LinearDeterminate component ID */
  id: string,
  /** The value of the progress buffer. Value between 0 and 100. */
  buffer: number,
  /** The value of the progress indicator. Value between 0 and 100. */
  value: number,
  /** Dash callback to update props on the server */
  setProps?: (props: { modal?: boolean, open?: boolean }) => void,
};

const defaultProps = {
  color: 'inherit',
  setProps: () => {},
};

export default class LinearBuffer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {value: props.value};
  }

  UNSAFE_componentWillReceiveProps = (nextProps: Props, nextContent: *): void => {
    if (nextProps.value !== this.state.value)
      this.setState({value: nextProps.value});

    if (nextProps.buffer !== this.state.buffer)
      this.setState({buffer: nextProps.buffer});
  }

  render() {
    const {color, id} = this.props;

    return (
      <div id={id}>
        <Box sx={{width: '100%', color: color}}>
          <LinearProgress
            color='inherit'
            variant='buffer'
            value={this.state.value}
            valueBuffer={this.state.buffer}
          />
        </Box>
      </div>
    );
  }
}

LinearBuffer.defaultProps = defaultProps;
