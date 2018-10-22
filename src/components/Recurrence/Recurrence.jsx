import React from 'react';
import PropTypes from 'prop-types';
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

Recurrence.propTypes = {
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

Recurrence.defaultProps = {
  value: '',
  className: '',
};

export default Recurrence;
