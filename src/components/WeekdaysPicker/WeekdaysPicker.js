import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';
import { DAY_NAMES } from '../constants';

const WeekdaysPicker = (props) => {
  const {
    name, days, handler, className,
  } = props;

  const weekDays = DAY_NAMES.map((day, i) => (
    <Cell
      name={name}
      key={day}
      value={i}
      className={days.includes(i) ? 'is-active' : ''}
      onClickHandler={handler}
    >
      {day}
    </Cell>
  ));

  return <div className={classNames('weekdays', className)}>{weekDays}</div>;
};

WeekdaysPicker.defaultProps = {
  className: '',
};

WeekdaysPicker.propTypes = {
  name: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default WeekdaysPicker;
