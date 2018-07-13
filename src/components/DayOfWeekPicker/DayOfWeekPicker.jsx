import React from 'react';
import PropTypes from 'prop-types';
import whyDidYouUpdate from 'why-did-you-update';

import SchedulerConsumer from '../Containers/WeekDayConsumer';
import Day from './Day';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class DayOfWeekPicker extends React.Component {
  static propTypes = {
    days: PropTypes.oneOfType([PropTypes.object]).isRequired,
    handler: PropTypes.func.isRequired,
  };

  render() {
    const { handler, days } = this.props;
    const NAMES = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const DAYS = NAMES.map((val, i) => (
      <Day
        name="day[]"
        label={val}
        key={val}
        id={i}
        onChange={handler}
        checked={Boolean(days[i])}
      />
    ));

    return (
      <div>
        {DAYS}
      </div>
    );
  }
}

export default SchedulerConsumer(DayOfWeekPicker);
