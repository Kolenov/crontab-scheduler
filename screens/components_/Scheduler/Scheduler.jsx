import React from 'react';

import SchedulerProvider from '../Containers/SchedulerProvider';
import DayPicker from '../weekDays';
import Recurrence from '../Recurrence';
import TimePicker from '../TimePicker';

const Scheduler = () => (
  <SchedulerProvider>
    <form>
      <Recurrence />
      <DayPicker />
      <TimePicker />
    </form>
  </SchedulerProvider>
);

export default Scheduler;
