import React from 'react';

import SchedulerContext from './SchedulerContext';

const RecurrenceConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {context => (
          <Component value={context.state.recurrence} handler={context.actions.recurrenceHandler} />
        )}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `RecurrenceConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default RecurrenceConsumer;
