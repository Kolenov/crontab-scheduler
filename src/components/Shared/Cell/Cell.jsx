import React from 'react';
import classNames from 'classnames';

const Cell = props => (
  <span {...props} className={classNames('cell', props.className)}>
    {props.children}
  </span>
);

export default Cell;
