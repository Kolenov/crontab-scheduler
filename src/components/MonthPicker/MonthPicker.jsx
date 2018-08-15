import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell';
import { MONTH_NAMES } from '../constants';
import './month-picker.css';

const MonthPicker = (props) => {
  const { months, handler, className } = props;

  const MONTHS = MONTH_NAMES.map((month, i) => (
    <Cell
      key={month}
      data-month={i + 1}
      className={classNames('day-month__cell', months.has(`${i + 1}`) ? 'is-active' : '')}
      onClick={handler}
    >
      {month}
    </Cell>
  ));

  return (
    <div className={classNames('month-picker', className)}>
      {MONTHS}
    </div>
  );
};

export default MonthPicker;
