import React, { Component, shallowEqual } from 'react';
import PropTypes from 'prop-types';

import whyDidYouUpdate from 'why-did-you-update';
import TimeConsumer from '../Containers/TimeConsumer';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

class TimePicker extends Component {
  static propTypes = {
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    meridiem: PropTypes.string.isRequired,
    meridiemSetter: PropTypes.func.isRequired,
    timeSetter: PropTypes.func.isRequired,
  };

  state = {
    hours: '0',
    minutes: '0',
    meridiem: 'pm',
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
        <input type="text" id="hours" value={hours} onChange={this.timeHandler} />
        {' : '}
        <input type="text" id="minutes" value={minutes} onInput={this.timeHandler} />
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
