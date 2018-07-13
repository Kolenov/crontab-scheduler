import React from 'react';

import SchedulerContext from './SchedulerContext';

const TimeConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const { timeSetter, meridiemSetter } = context.actions;
          const { hours, minutes, meridiem } = context.state;
          return (
            <Component
              minutes={minutes}
              hours={hours}
              meridiem={meridiem}
              timeSetter={timeSetter}
              meridiemSetter={meridiemSetter}
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
