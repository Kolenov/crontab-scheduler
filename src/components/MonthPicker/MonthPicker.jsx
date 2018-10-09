import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell';
import { MONTH_NAMES } from '../constants';

const MonthPicker = (props) => {
  const { months, handler, className } = props;

  const MONTHS = MONTH_NAMES.map((month, index) => (
    <Cell
      key={month}
      data-month={index + 1}
      className={months.has(`${index + 1}`) ? 'is-active' : ''}
      onClick={handler}
    >
      {month}
    </Cell>
  ));

  return <div className={classNames('month-picker', className)}>{MONTHS}</div>;
};

export default MonthPicker;
