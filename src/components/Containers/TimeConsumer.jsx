import React from 'react';

import SchedulerContext from './SchedulerContext';

const TimeConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const { timeSetter } = context.actions;
          const { hours, minutes } = context.state;
          return <Component minutes={minutes} hours={hours} timeSetter={timeSetter} />;
        }}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `TimeConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default TimeConsumer;
