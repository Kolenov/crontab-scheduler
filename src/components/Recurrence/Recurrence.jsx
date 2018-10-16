import React from 'react';
import classNames from 'classnames';

const Recurrence = (props) => {
  const {
    id, handler, value, className,
  } = props;

  return (
    <select
      id={id}
      value={value}
      onChange={handler}
      name="recurrence"
      className={classNames('form-control', className)}
    >
      <option value="once">Once</option>
      <option value="everyDay">Every Day</option>
      <option value="everyWeek">Every Week</option>
      <option value="everyMonth">Every Month</option>
      <option value="everyYear">Every Year</option>
    </select>
  );
};

export default Recurrence;
