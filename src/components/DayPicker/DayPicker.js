import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Cell from '../Shared/Cell/Cell';

const DayPicker = (props) => {
  const {
    name, id, days, handler, className, minDays,
  } = props;

  const MONTHS = [];

  const cellClasses = value => classNames(
    { 'is-partial': minDays < value },
    { 'is-active': days.includes(value) },
  );

  for (let index = 1; index <= 31; index += 1) {
    MONTHS.push(
      <Cell
        name={name}
        key={`day${index}`}
        value={index}
        className={cellClasses(index)}
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

DayPicker.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  days: PropTypes.oneOfType([PropTypes.array]),
  handler: PropTypes.func.isRequired,
  className: PropTypes.string,
  minDays: PropTypes.number.isRequired,
};

DayPicker.defaultProps = {
  id: '',
  days: [],
  className: '',
};

export default DayPicker;
