import React from 'react';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';

const DayPicker = (props) => {
  const {
    name, id, days, handler, className,
  } = props;
  const MONTHS = [];

  for (let index = 1; index <= 31; index += 1) {
    MONTHS.push(
      <Cell
        name={name}
        key={`day${index}`}
        value={index}
        className={days.includes(index) ? 'is-active' : ''}
        onClickHandler={handler}
      >
        {index}
      </Cell>,
    );
  }

  return (
    <div id={id} className={classNames('daypicker', className)}>
      {MONTHS}
    </div>
  );
};

export default DayPicker;
