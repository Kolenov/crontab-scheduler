import React from 'react';

import SchedulerContext from './SchedulerContext';

const TimeConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const { timeHandler, meridiemHandler } = context.actions;
          const { hours, minutes, meridiem } = context.store;
          return (
            <Component
              minutes={minutes}
              hours={hours}
              meridiem={meridiem}
              timeHandler={timeHandler}
              meridiemHandler={meridiemHandler}
            />
          );
        }}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `TimeConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default TimeConsumer;
