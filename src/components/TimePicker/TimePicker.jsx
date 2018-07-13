import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import whyDidYouUpdate from 'why-did-you-update';
import TimeConsumer from '../Containers/TimeConsumer';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class TimePicker extends PureComponent {
  state = {
    hours: '12',
    minutes: '00',
    meridiem: 'am',
  };

  componentWillReceiveProps(nextProps) {
    const { hours, minutes, meridiem } = nextProps;
    this.setState({
      hours,
      minutes,
      meridiem,
    });
  }

  meridiemHandler = (event) => {
    const { checked } = event.target;
    const value = checked ? 'pm' : 'am';
    this.setState({ meridiem: value }, () => {
      const { meridiemSetter } = this.props;
      meridiemSetter({ meridiem: value });
    });
  };

  timeHandler = (event) => {
    const { id: name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { timeSetter } = this.props;
      timeSetter({ [name]: value });
    });
  };

  render() {
    const { hours, minutes, meridiem } = this.state;

    return (
      <div>
        <input
          type="text"
          id="hours"
          value={hours}
          onChange={this.timeHandler}
        />
        {' : '}
        <input
          type="text"
          id="minutes"
          value={minutes}
          onInput={this.timeHandler}
        />
        <input
          type="checkbox"
          id="meridiem"
          checked={meridiem === 'pm'}
          onChange={this.meridiemHandler}
        />
        <label htmlFor="meridiem">
          {meridiem}
        </label>
      </div>
    );
  }
}

export default TimeConsumer(TimePicker);
