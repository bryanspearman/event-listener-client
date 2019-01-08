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

  changeTargetDate() {
    this.setState({ targetDate: this.props.targetDate });
  }

  render() {
    return (
      <div className="counter">
        <div className="clock-days">{this.state.days}</div>
        <div className="clock-hours">{this.state.hours}</div>
        <div className="clock-minutes">{this.state.minutes}</div>
        <div className="clock-seconds">{this.state.seconds}</div>
      </div>
    );
  }
}

export default Counter;
