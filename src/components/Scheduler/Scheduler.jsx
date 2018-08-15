import React, { Fragment } from 'react';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/en-au';

import WeekdaysPicker from '../WeekdaysPicker';
import Recurrence from '../Recurrence';
import TimePicker from '../TimePicker';
import MonthPicker from '../MonthPicker';
import DayPicker from '../DayPicker';

import './scheduler.css';
import '../Shared/form-control.css';

moment.locale('en');
const dateFormat = 'MM/DD/YYYY';

class Scheduler extends React.Component {
  state = {
    recurrence: '1',
    dayOfWeek: new Set(),
    hours: 0,
    minutes: 0,
    meridiem: 'pm',
    startDate: moment(),
    dayOfMonth: new Set(),
    months: new Set(),
  };

  dayOfWeekSetter = (event) => {
    const {
      dataset: { day },
    } = event.target;

    this.setState((prevState) => {
      const { dayOfWeek } = prevState;
      if (dayOfWeek.has(day)) {
        dayOfWeek.delete(day);
      } else {
        dayOfWeek.add(day);
      }
      return { dayOfWeek };
    });
  };

  recurrenceSeter = (event) => {
    const { value } = event.target;
    this.setState({ recurrence: value });
  };

  meridiemSetter = (event) => {
    const { checked } = event.target;
    const value = checked ? 'pm' : 'am';

    this.setState({ meridiem: value });
  };

  timeSetter = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  dateSetter = (val) => {
    this.setState({ startDate: val });
  };

  monthSetter = (event) => {
    const {
      dataset: { month },
    } = event.target;

    this.setState((prevState) => {
      const { months } = prevState;
      if (months.has(month)) {
        months.delete(month);
      } else {
        months.add(month);
      }
      return { months };
    });
  };

  daySetter = (event) => {
    const {
      dataset: { day },
    } = event.target;

    this.setState((prevState) => {
      const { dayOfMonth } = prevState;
      if (dayOfMonth.has(day)) {
        dayOfMonth.delete(day);
      } else {
        dayOfMonth.add(day);
      }
      return { dayOfMonth };
    });
  };

  render() {
    const {
      recurrence,
      dayOfWeek,
      hours,
      minutes,
      meridiem,
      startDate,
      dayOfMonth,
      months,
    } = this.state;

    return (
      <div className="scheduler">
        <Recurrence
          className="scheduler__recurrence"
          value={recurrence}
          handler={this.recurrenceSeter}
        />

        {recurrence > 2 && (
          <WeekdaysPicker
            className="scheduler__weekdays"
            days={dayOfWeek}
            handler={this.dayOfWeekSetter}
          />
        )}

        {recurrence > 1 && (
          <Fragment>
            <TimePicker
              className="scheduler__timepicker"
              hours={hours}
              minutes={minutes}
              meridiem={meridiem}
              timeSetter={this.timeSetter}
              meridiemSetter={this.meridiemSetter}
            />

            <DateTime
              className="scheduler__datepicker"
              value={moment(startDate, dateFormat)}
              dateFormat={dateFormat}
              timeFormat={false}
              onChange={this.dateSetter}
            />
          </Fragment>
        )}

        {recurrence > 4 && (
          <MonthPicker
            className="scheduler__monthpicker"
            months={months}
            handler={this.monthSetter}
          />
        )}

        {recurrence > 3 && (
          <DayPicker className="scheduler__daypicker" days={dayOfMonth} handler={this.daySetter} />
        )}
      </div>
    );
  }
}

export default Scheduler;
