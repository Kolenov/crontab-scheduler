import React from 'react'

import DateTime from 'react-datetime'
import moment from 'moment'
import 'moment/locale/en-au'
import { hasSate, addLeadingZerro } from '../../utils/utils'

import WeekdaysPicker from '../../components/WeekdaysPicker/WeekdaysPicker'
import Recurrence from '../../components/Recurrence/Recurrence'
import TimePicker from '../../components/TimePicker/TimePicker'
import MonthPicker from '../../components/MonthPicker/MonthPicker'
import DayPicker from '../../components/DayPicker/DayPicker'
import Label from '../../components/Shared/Label/Label'

moment.locale('en')
const dateFormat = 'MM/DD/YYYY'

const initialState = {
  recurrence: 'once',
  hours: 0,
  minutes: 0,
  monthDays: [],
  meridiem: true,
  startDate: moment(),
  weekDays: [],
  months: []
}

class Scheduler extends React.Component {
  state = { ...initialState }

  recurrenceHandler = e => {
    const { value } = e.target
    this.setState({ ...initialState, recurrence: value })
  }

  meridiemHandler = value => {
    this.setState({ meridiem: value })
  }

  timeHandler = e => {
    const { value, name } = e.target
    this.setState({ [name]: addLeadingZerro(value) })
  }

  dateHandler = value => {
    this.setState({ startDate: value })
  }

  cellClickhandler = (value, name) => {
    this.setState(prevState => {
      const oldValue = prevState[name]

      const newValue = oldValue.includes(value) ? oldValue.filter(el => el !== value) : [...oldValue, value]

      return { [name]: [...newValue] }
    })
  }

  render() {
    const { recurrence, weekDays, hours, minutes, meridiem, startDate, monthDays, months } = this.state

    const minDaysInMonth = Math.min(...months.map(value => moment(value, 'MM').daysInMonth()))

    return (
      <div className='scheduler'>
        <div className='form-field scheduler__item'>
          <Recurrence
            id='recurrence'
            className='form-field__control'
            value={recurrence}
            handler={this.recurrenceHandler}
          />
          <Label htmlFor='recurrence' className='form-field__label'>
            Recurrence Pattern:
          </Label>
        </div>

        {hasSate(recurrence, 'weekDays') && (
          <div className='form-field scheduler__item'>
            <WeekdaysPicker
              name='weekDays'
              id='weekdays'
              className='form-field__control'
              days={weekDays}
              handler={this.cellClickhandler}
            />
            <Label htmlFor='weekdays' className='form-field__label'>
              On Days of the Week *:
            </Label>
          </div>
        )}

        {hasSate(recurrence, 'months') && (
          <div className='form-field top scheduler__item'>
            <MonthPicker
              name='months'
              id='month'
              className='form-field__control'
              months={months}
              handler={this.cellClickhandler}
            />
            <Label htmlFor='month' className='form-field__label'>
              On Months *:
            </Label>
          </div>
        )}

        {hasSate(recurrence, 'monthDays') && (
          <div className='form-field top scheduler__item'>
            <DayPicker
              name='monthDays'
              id='mothdays'
              className='form-field__control'
              days={monthDays}
              handler={this.cellClickhandler}
              minDays={minDaysInMonth}
            />
            <Label htmlFor='mothdays' className='form-field__label'>
              On Days *:
            </Label>
          </div>
        )}

        {minDaysInMonth < Math.max(...monthDays) && (
          <div className='form-field top scheduler__item'>
            <p className='form-field__error'>Some jobs will not be started on selected days of selected months</p>
          </div>
        )}

        {hasSate(recurrence, 'dateTime') && (
          <>
            <div className='form-field scheduler__item'>
              <TimePicker
                id='time'
                className='form-field__control'
                hours={hours}
                minutes={minutes}
                meridiem={meridiem}
                timeHandler={this.timeHandler}
                meridiemHandler={this.meridiemHandler}
              />
              <Label htmlFor='time' className='form-field__label'>
                At Time:
              </Label>
            </div>

            <div className='form-field scheduler__item'>
              <DateTime
                id='date'
                value={moment(startDate, dateFormat)}
                dateFormat={dateFormat}
                timeFormat={false}
                onChange={this.dateHandler}
                className='form-field__control'
              />
              <Label htmlFor='date' className='form-field__label'>
                Start From Date:
              </Label>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Scheduler
