import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Cell from '../Shared/Cell/Cell';
import { MONTH_NAMES } from '../constants';

const MonthPicker = (props) => {
  const {
    name, id, months, handler, className,
  } = props;

  /* const cellClasses = value => {
     classNames({ 'is-partial': days.includes(value) },
     { 'is-active': days.includes(value) }
   )}; */

  const MONTHS = MONTH_NAMES.map((month, index) => (
    <Cell
      name={name}
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

MonthPicker.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  months: PropTypes.oneOfType([PropTypes.array]),
  handler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MonthPicker.defaultProps = {
  months: '[]',
  className: '',
};

export default MonthPicker;
