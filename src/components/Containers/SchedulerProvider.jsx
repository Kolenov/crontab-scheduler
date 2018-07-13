import React, { Component } from 'react';

import SchedulerContext from './SchedulerContext';

export default class SchedulerProvider extends Component {
  state = {
    recurrence: 'monthly',
    dayOfWeek: {},
    hours: '19',
    minutes: '00',
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
          },
        }}
      >
        {this.props.children}
      </SchedulerContext.Provider>
    );
  }
}
