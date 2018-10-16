import React from 'react';
import classNames from 'classnames';

const TimePicker = (props) => {
  const {
    id, hours, minutes, meridiem, timeHandler, meridiemHandler, className,
  } = props;

  return (
    <div id={id} className={classNames('time-picker', className)}>
      <input
        type="text"
        id="hours"
        value={hours}
        onChange={timeHandler}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
      />
      <span className="time-picker__divider">:</span>
      <input
        type="text"
        id="minutes"
        value={minutes}
        onChange={timeHandler}
        autoComplete="off"
        className={classNames('time-picker__control', 'form-control')}
      />
      <div className="time-picker__meridiem">
        <input
          type="checkbox"
          id="meridiem"
          checked={meridiem === 'pm'}
          onChange={meridiemHandler}
        />
        <label htmlFor="meridiem">{meridiem}</label>
      </div>
    </div>
  );
};

export default TimePicker;
