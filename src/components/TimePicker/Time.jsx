import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Time = (props) => {
  const {
    id, name, label, checked, onChange,
  } = props;

  return (
    <Fragment>
      <input
        id={id}
        type="text"
        style={{ display: 'none' }}
        onChange={onChange}
        name={name}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </Fragment>
  );
};

export default Time;
