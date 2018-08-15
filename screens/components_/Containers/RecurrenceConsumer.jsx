import React from 'react';

import SchedulerContext from './SchedulerContext';

const RecurrenceConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {(context) => {
          const { recurrence } = context.store;
          const { recurrenceHandler } = context.actions;
          return <Component value={recurrence} handler={recurrenceHandler} />;
        }}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `RecurrenceConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default RecurrenceConsumer;
