import React from 'react';
import classNames from 'classnames';

import './time-picker.css';

const TimePicker = (props) => {
  const {
    hours, minutes, meridiem, timeSetter, meridiemSetter, className,
  } = props;

  return (
    <div className={classNames('time-picker', className)}>
      <input
        type="text"
        id="hours"
        value={hours}
        onChange={timeSetter}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
      />
      <span className="time-picker__divider">
        {':'}
      </span>
      <input
        type="text"
        id="minutes"
        value={minutes}
        onChange={timeSetter}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
      />
      <div className="time-picker__meridiem">
        <input
          type="checkbox"
          id="meridiem"
          checked={meridiem === 'pm'}
          onChange={meridiemSetter}
        />
        <label htmlFor="meridiem">
          {meridiem}
        </label>
      </div>
    </div>
  );
};

export default TimePicker;
