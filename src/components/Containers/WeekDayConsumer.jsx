import React from 'react';

import SchedulerContext from './SchedulerContext';

const WeekDayConsumer = (Component) => {
  function Consumer() {
    return (
      <SchedulerContext.Consumer>
        {context => (
          <Component days={context.state.dayOfWeek} handler={context.actions.dayOfWeekHandler} />
        )}
      </SchedulerContext.Consumer>
    );
  }

  Consumer.displayName = `WeekDayConsumer(${Component.displayName || Component.name})`;

  return Consumer;
};

export default WeekDayConsumer;
