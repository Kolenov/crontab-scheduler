import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { KEY_CODE } from '../../constants';

const Cell = (props) => {
  const {
    value, name, onClickHandler, className, children,
  } = props;

  const clickHandler = () => onClickHandler(value, name);

  const keyDownHandler = (e) => {
    if (e.keyCode === KEY_CODE.space) {
      e.preventDefault();
      onClickHandler(value, name);
    }
    return true;
  };

  return (
    <div
      className={classNames('cell', className)}
      onClick={clickHandler}
      role="gridcell"
      aria-selected="true"
      tabIndex="0"
      onKeyDown={keyDownHandler}
    >
      {children}
    </div>
  );
};

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Cell.defaultProps = {
  className: '',
};

export default Cell;
