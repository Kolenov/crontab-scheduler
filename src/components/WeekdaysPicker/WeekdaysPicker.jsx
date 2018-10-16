import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';
import { DAY_NAMES } from '../constants';

const WeekdaysPicker = (props) => {
  const { days, handler, className } = props;

  const weekDays = DAY_NAMES.map((day, i) => (
    <Cell key={day} value={i} className={days.includes(i) ? 'is-active' : ''} onClickHandler={handler}>
      {day}
    </Cell>
  ));

  return <div className={classNames('weekdays', className)}>{weekDays}</div>;
};

export default WeekdaysPicker;
