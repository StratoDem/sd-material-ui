// @flow

import React from 'react';

type Props = {
  /** Step ID */
  id: string,
  icon?: string | number,
  /** The text to display for this step */
  stepLabelText?: string,
  /** Override the inline-style of the root element */
  style?: Object,
};

const defaultProps = {
  icon: '',
  stepLabelText: '',
  style: {},
};

const Step = () => <div />;

Step.defaultProps = defaultProps;

export default Step;
