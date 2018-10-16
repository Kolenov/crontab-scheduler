import React, { Component } from 'react';
import PropTypes from 'prop-types';
import whyDidYouUpdate from 'why-did-you-update';

import SchedulerConsumer from '../Containers/WeekDayConsumer';
import Day from './Day';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class weekDaysPicker extends Component {
  static propTypes = {
    days: PropTypes.oneOfType([PropTypes.object]).isRequired,
    weekDaysHandler: PropTypes.func.isRequired,
  };

  render() {
    const { weekDaysHandler, days } = this.props;
    const NAMES = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const DAYS = NAMES.map((val, i) => (
      <Day
        name="day[]"
        label={val}
        key={val}
        id={i}
        onChange={weekDaysHandler}
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

export default SchedulerConsumer(weekDaysPicker);
