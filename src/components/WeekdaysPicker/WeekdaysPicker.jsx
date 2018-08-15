import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';
import './weekdays.css';

const WeekdaysPicker = (props) => {
  const NAMES = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const { days, handler, className } = props;

  const DAYS = NAMES.map((day, i) => {
    const cellStyle = classNames('weekdays__cell', days.has(`${i}`) ? 'is-active' : '');
    return (
      <Cell key={day} id={i} data-day={i} className={cellStyle} onClick={handler}>
        {day}
      </Cell>
    );
  });

  return (
    <div className={classNames('weekdays', className)}>
      {DAYS}
    </div>
  );
};

export default WeekdaysPicker;
