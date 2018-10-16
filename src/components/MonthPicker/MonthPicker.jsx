import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell';
import { MONTH_NAMES } from '../constants';

const MonthPicker = (props) => {
  const {
    id, months, handler, className,
  } = props;

  const MONTHS = MONTH_NAMES.map((month, index) => (
    <Cell
      id={id}
      key={month}
      value={index + 1}
      className={months.includes(index + 1) ? 'is-active' : ''}
      onClickHandler={handler}
    >
      {month}
    </Cell>
  ));

  return <div className={classNames('month-picker', className)}>{MONTHS}</div>;
};

export default MonthPicker;
