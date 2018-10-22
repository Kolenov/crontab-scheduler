import React, { Fragment } from 'react';

import DateTime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/en-au';
import { hasSate, addLeadingZerro } from '../../utils';

import WeekdaysPicker from '../../components/WeekdaysPicker';
import Recurrence from '../../components/Recurrence';
import TimePicker from '../../components/TimePicker';
import MonthPicker from '../../components/MonthPicker';
import DayPicker from '../../components/DayPicker';
import Label from '../../components/Shared/Label';

moment.locale('en');
const dateFormat = 'MM/DD/YYYY';

const initialState = {
  recurrence: 'once',
  hours: 0,
  minutes: 0,
  monthDays: [],
  meridiem: 'pm',
  startDate: moment(),
  weekDays: [],
  months: [],
};

class Scheduler extends React.Component {
  state = { ...initialState };

  recurrenceHandler = (e) => {
    const { value } = e.target;
    this.setState({ ...initialState, recurrence: value });
  };

  meridiemHandler = (e) => {
    const { checked } = e.target;
    const value = checked ? 'pm' : 'am';
    this.setState({ meridiem: value });
  };

  timeHandler = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: addLeadingZerro(value) });
  };

  dateHandler = (value) => {
    this.setState({ startDate: value });
  };

  cellClickhandler = (value, name) => {
    this.setState((prevState) => {
      const oldValue = prevState[name];

      const newValue = oldValue.includes(value)
        ? oldValue.filter(el => el !== value)
        : [...oldValue, value];

      return { [name]: [...newValue] };
    });
  };

  render() {
    const {
      recurrence,
      weekDays,
      hours,
      minutes,
      meridiem,
      startDate,
      monthDays,
      months,
    } = this.state;

    return (
      <div className="scheduler">
        <div className="form-field scheduler__item">
          <Label htmlFor="recurrence" className="form-field__label">
            Recurrence Pattern:
          </Label>
          <Recurrence
            id="recurrence"
            className="form-field__control"
            value={recurrence}
            handler={this.recurrenceHandler}
          />
        </div>

        {hasSate(recurrence, 'weekDays') && (
          <div className="form-field scheduler__item">
            <Label htmlFor="weekdays" className="form-field__label">
              On Days of the Week *:
            </Label>
            <WeekdaysPicker
              name="weekDays"
              id="weekdays"
              className="form-field__control"
              days={weekDays}
              handler={this.cellClickhandler}
            />
          </div>
        )}

        {hasSate(recurrence, 'months') && (
          <div className="form-field top scheduler__item">
            <Label htmlFor="month" className="form-field__label">
              On Months *:
            </Label>
            <MonthPicker
              name="months"
              id="month"
              className="form-field__control"
              months={months}
              handler={this.cellClickhandler}
            />
          </div>
        )}

        {hasSate(recurrence, 'monthDays') && (
          <div className="form-field top scheduler__item">
            <Label htmlFor="mothdays" className="form-field__label">
              On Days *:
            </Label>
            <DayPicker
              name="monthDays"
              id="mothdays"
              className="form-field__control"
              days={monthDays}
              handler={this.cellClickhandler}
            />
          </div>
        )}

        {hasSate(recurrence, 'dateTime') && (
          <Fragment>
            <div className="form-field scheduler__item">
              <Label htmlFor="time" className="form-field__label">
                At Time:
              </Label>
              <TimePicker
                id="time"
                className="form-field__control"
                hours={hours}
                minutes={minutes}
                meridiem={meridiem}
                timeHandler={this.timeHandler}
                meridiemHandler={this.meridiemHandler}

              />
            </div>
            <div className="form-field scheduler__item">
              <Label htmlFor="date" className="form-field__label">
                Start From Date:
              </Label>
              <DateTime
                id="date"
                value={moment(startDate, dateFormat)}
                dateFormat={dateFormat}
                timeFormat={false}
                onChange={this.dateHandler}
                className="form-field__control"

              />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Scheduler;
