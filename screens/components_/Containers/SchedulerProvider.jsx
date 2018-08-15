import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchedulerContext from './SchedulerContext';

export default class SchedulerProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    recurrence: 'monthly',
    dayOfWeek: {},
    hours: '0',
    minutes: '0',
    meridiem: 'pm',
  };

  dayOfWeekSetter = (event) => {
    const { id, checked } = event.target;
    this.setState((prevState) => {
      const { dayOfWeek } = prevState;
      dayOfWeek[id] = checked;
      return { dayOfWeek };
    });
  };

  recurrenceHandler = (event) => {
    const { value } = event.target;
    this.setState({ recurrence: value });
  };

  meridiemSetter = (meridiem) => {
    this.setState({ ...meridiem });
  };

  timeSetter = (time) => {
    this.setState({ ...time });
  };

  render() {
    const { children } = this.props;
    return (
      <SchedulerContext.Provider
        value={{
          store: { ...this.state },
          actions: {
            dayOfWeekSetter: this.dayOfWeekSetter,
            recurrenceHandler: this.recurrenceHandler,
            timeSetter: this.timeSetter,
            meridiemSetter: this.meridiemSetter,
          },
        }}
      >
        {children}
      </SchedulerContext.Provider>
    );
  }
}
