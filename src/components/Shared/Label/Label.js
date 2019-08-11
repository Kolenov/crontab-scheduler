import React from 'react';
import PropTypes from 'prop-types';
import { childrenPropType } from '../../../utils';

const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: childrenPropType.isRequired,
  className: PropTypes.string,
};

export default Label;
