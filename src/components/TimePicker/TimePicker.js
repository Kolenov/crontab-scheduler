import React from 'react';
import classNames from 'classnames';

import { KEY_CODE } from '../constants';

const TimePicker = (props) => {
  const {
    id, hours, minutes, meridiem, timeHandler, meridiemHandler, className,
  } = props;

  const onChangeHandler = () => {
    meridiemHandler(!meridiem);
  };

  const keyDownHandler = (e) => {
    if (e.keyCode === KEY_CODE.space) {
      meridiemHandler(!meridiem);
    }
    return true;
  };

  return (
    <div id={id} className={classNames('time-picker', className)}>
      <input
        type="text"
        name="hours"
        value={hours}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
        onChange={timeHandler}
      />
      <span className="time-picker__divider">:</span>
      <input
        type="text"
        name="minutes"
        value={minutes}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
        onChange={timeHandler}
      />
      <div className="time-picker__meridiem">
        <input type="checkbox" id="meridiem" checked={meridiem} onChange={onChangeHandler} />
        <label htmlFor="meridiem" tabIndex="0" onKeyDown={keyDownHandler}>
          {meridiem ? 'pm' : 'am'}
        </label>
      </div>
    </div>
  );
};

export default TimePicker;
