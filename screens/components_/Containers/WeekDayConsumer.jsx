import React from 'react';

import SchedulerContext from './SchedulerContext';

const WeekDayConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const {
            store: { weekDays },
            actions: { weekDaysHandler },
          } = context;
          return <Component days={{ ...weekDays }} weekDaysHandler={weekDaysHandler} />;
        }}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `WeekDayConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default WeekDayConsumer;
