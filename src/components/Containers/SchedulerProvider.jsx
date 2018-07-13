import React, { Component } from 'react';

import SchedulerContext from './SchedulerContext';

export default class SchedulerProvider extends Component {
  state = {
    recurrence: 'monthly',
    dayOfWeek: {},
    hours: '0',
    minutes: '0',
    meridiem: 'pm',
  };

  dayOfWeekHandler = (event) => {
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
    return (
      <SchedulerContext.Provider
        value={{
          state: { ...this.state },
          actions: {
            dayOfWeekHandler: this.dayOfWeekHandler,
            recurrenceHandler: this.recurrenceHandler,
            timeSetter: this.timeSetter,
            meridiemSetter: this.meridiemSetter,
          },
        }}
      >
        {this.props.children}
      </SchedulerContext.Provider>
    );
  }
}
