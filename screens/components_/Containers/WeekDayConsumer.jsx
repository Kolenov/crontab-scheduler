import React from 'react';

import SchedulerContext from './SchedulerContext';

const WeekDayConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const {
            store: { dayOfWeek },
            actions: { dayOfWeekSetter },
          } = context;
          return <Component days={{ ...dayOfWeek }} dayOfWeekSetter={dayOfWeekSetter} />;
        }}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `WeekDayConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default WeekDayConsumer;
