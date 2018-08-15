import React from 'react';
import classNames from 'classnames';

const Recurrence = (props) => {
  const { handler, value, className } = props;

  return (
    <div className={classNames('recurrence', className)}>
      <select value={value} onChange={handler} name="recurrence" className="form-control">
        <option value="1">
        Once
        </option>
        <option value="2">
        Every Day
        </option>
        <option value="3">
        Every Week
        </option>
        <option value="4">
        Every Month
        </option>
        <option value="5">
        Every Year
        </option>
      </select>
    </div>
  );
};

export default Recurrence;
