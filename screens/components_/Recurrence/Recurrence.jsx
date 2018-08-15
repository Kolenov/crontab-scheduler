import React, { Component } from 'react';
import PropTypes from 'prop-types';

import whyDidYouUpdate from 'why-did-you-update';
import RecurrenceConsumer from '../Containers/RecurrenceConsumer';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class Recurrence extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  };

  render() {
    const { handler, value } = this.props;

    return (
      <select value={value} onChange={handler} name="recurrence">
        <option value="once">
Once
        </option>
        <option value="daily">
Every Day
        </option>
        <option value="weekly">
Every Week
        </option>
        <option value="monthly">
Every Month
        </option>
        <option value="yearly">
Every Year
        </option>
      </select>
    );
  }
}

export default RecurrenceConsumer(Recurrence);
