import React from 'react';
import classNames from 'classnames';

const Recurrence = (props) => {
  const { handler, value, className } = props;

  return (
    <div className={classNames('recurrence', className)}>
      <span>Recurrence pattern:</span>
      <select
        value={value}
        onChange={handler}
        name="recurrence"
        id="recurrence"
        className="form-control"
      >
        <option value="once">Once</option>
        <option value="everyDay">Every Day</option>
        <option value="everyWeek">Every Week</option>
        <option value="everyMonth">Every Month</option>
        <option value="everyYear">Every Year</option>
      </select>
    </div>
  );
};

export default Recurrence;
