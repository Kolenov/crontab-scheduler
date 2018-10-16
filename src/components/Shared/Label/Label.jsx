import React from 'react';

const Label = (props) => {
  const { htmlFor, children, className } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
