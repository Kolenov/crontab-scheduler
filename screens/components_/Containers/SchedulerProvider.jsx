import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchedulerContext from './SchedulerContext';

export default class SchedulerProvider extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    recurrence: 'monthly',
    weekDays: {},
    hours: '0',
    minutes: '0',
    meridiem: 'pm',
  };

  weekDaysHandler = (event) => {
    const { id, checked } = event.target;
    this.setState((prevState) => {
      const { weekDays } = prevState;
      weekDays[id] = checked;
      return { weekDays };
    });
  };

  recurrenceHandler = (event) => {
    const { value } = event.target;
    this.setState({ recurrence: value });
  };

  meridiemHandler = (meridiem) => {
    this.setState({ ...meridiem });
  };

  timeHandler = (time) => {
    this.setState({ ...time });
  };

  render() {
    const { children } = this.props;
    return (
      <SchedulerContext.Provider
        value={{
          store: { ...this.state },
          actions: {
            weekDaysHandler: this.weekDaysHandler,
            recurrenceHandler: this.recurrenceHandler,
            timeHandler: this.timeHandler,
            meridiemHandler: this.meridiemHandler,
          },
        }}
      >
        {children}
      </SchedulerContext.Provider>
    );
  }
}
