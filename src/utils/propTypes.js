import PropTypes from 'prop-types';

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.node),
]);

export const numberOrStringPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
