import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

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
    const { hours, minutes } = nextProps;
    this.setState({
      hours: moment(hours, 'HH').format('h'),
      minutes,
      meridiem: moment(hours, 'HH').format('a'),
    });
  }

  meridiemHandler = (event) => {
    const { id: name, value } = event.target;
    // set state for meridiem
    // convert state to moment
    // push to context state
    this.setState({ [name]: value }, () => {
      timeHandler();
    });
  };

  timeHandler = (event) => {
    const { id: name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { timeSetter } = this.props;
      const [hours, minutes] = moment({ ...this.state })
        .format('HH:mm')
        .split(':');
      timeSetter({ hours, minutes });
    });
  };

  render() {
    const { hours, minutes, meridiem } = this.state;

    return (
      <div>
        <input type="text" id="hours" value={hours} onChange={this.timeHandler} />
        {' : '}
        <input type="text" id="minutes" value={minutes} onInput={this.timeHandler} />
        <input
          type="checkbox"
          id="meridiem"
          checked={meridiem === 'pm'}
          onChange={this.meridiemHandler}
          value={meridiem}
        />
        <label htmlFor="meridiem">
          {meridiem}
        </label>
      </div>
    );
  }
}

export default TimeConsumer(TimePicker);
