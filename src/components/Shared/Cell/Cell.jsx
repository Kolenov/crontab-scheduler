import React from 'react';
import classNames from 'classnames';

import './cell.css';

const Cell = props => (
  <span {...props} className={classNames('cell', props.className)}>
    {props.children}
  </span>
);

export default Cell;
