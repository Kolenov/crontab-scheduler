import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';

const DayPicker = (props) => {
  const { days, handler, className } = props;
  const MONTHS = [];

  for (let index = 1; index <= 31; index += 1) {
    MONTHS.push(
      <Cell
        key={`day${index}`}
        value={index}
        className={days.includes(index) ? 'is-active' : ''}
        onClickHandler={handler}
      >
        {index}
      </Cell>,
    );
  }

  return <div className={classNames('daypicker', className)}>{MONTHS}</div>;
};

export default DayPicker;
