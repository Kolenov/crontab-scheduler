import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';
import './daypicker.css';

const DayPicker = (props) => {
  const { days, handler, className } = props;
  const MONTHS = [];

  for (let index = 1; index <= 31; index += 1) {
    MONTHS.push(
      <Cell
        key={`day${index}`}
        data-day={index}
        className={classNames('daypicker__cell', days.has(`${index}`) ? 'is-active' : '')}
        onClick={handler}
      >
        {index}
      </Cell>,
    );
  }

  return (
    <div className={classNames('daypicker', className)}>
      {MONTHS}
    </div>
  );
};

export default DayPicker;
