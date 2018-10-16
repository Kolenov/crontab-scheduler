import React from 'react';
import classNames from 'classnames';

const Cell = (props) => {
  const clickHandler = () => props.onClickHandler(props.value, props.name);

  return (
    <span className={classNames('cell', props.className)} onClick={clickHandler}>
      {props.children}
    </span>
  );
};

export default Cell;
