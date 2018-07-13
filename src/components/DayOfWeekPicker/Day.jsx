import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Day = (props) => {
  const {
    id, name, label, checked, onChange,
  } = props;

  return (
    <Fragment>
      <input
        id={id}
        type="checkbox"
        style={{ display: 'none' }}
        onChange={onChange}
        name={name}
        checked={checked}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </Fragment>
  );
};

Day.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Day;
