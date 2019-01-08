import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    setTargetDate();
  }

  setTargetDate() {
    this.setState({ targetDate: this.props.targetDate });
  }

  render() {
    return (
      <div className="counter">
        <div className="clock-days">{this.state.days} Days</div>
        <div className="clock-hours">{this.state.hours} Hours</div>
        <div className="clock-minutes">{this.state.minutes} Minutes</div>
        <div className="clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    );
  }
}

export default Counter;
