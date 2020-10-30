// @flow

import React, {useEffect, useState} from 'react';

import { default as MUIPagination } from '@material-ui/lab/Pagination';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
  /** Component ID */
  id: string,
  /** Page number */
  page?: number,
  /** Number of pages */
  count: number,
  /** Dash callback to update props on the server */
  setProps?: (props: { stepIndex?: number }) => void,
  /** Dash event handler for click events */
  fireEvent?: () => void,
};

const defaultProps = {
  page: 1,
  setProps: () => {
  },
};

/** Material UI Pagination component */
const Pagination = (props: Props) => {
  const [page, setPage] = useState(props.page);

  // Update the page number in state and props when user interacts with component
  const handlePageChange = (event, value) => {
    setPage(value);
    if (props.setProps) {
      props.setProps({page: value});
      props.fireEvent({event: 'click'});
    }
  }

  // Update the page when the Dash component receives a new prop update
  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  return (
    <div id={props.id}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <MUIPagination
          count={props.count}
          page={page}
          onChange={handlePageChange}
        />
      </MuiThemeProvider>
    </div>
  )
};

Pagination.defaultProps = defaultProps;
export default Pagination;
