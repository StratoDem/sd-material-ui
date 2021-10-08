// @flow

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props = {
  /** Override the progress's color */
  color?: string,
};

const defaultProps = {
  color: 'inherit',
};

export default class LinearIndeterminate extends Component<Props> {
  props: Props;

  render() {
    const {color} = this.props;

    return (
      <div>
        <Box sx={{width: '100%', color: color}}>
          <LinearProgress color="inherit" />
        </Box>
      </div>
    );
  }
}

LinearIndeterminate.defaultProps = defaultProps;
