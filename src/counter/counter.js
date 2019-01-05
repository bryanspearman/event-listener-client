import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: null
    };
  }

  changeTargetDate() {
    this.setState({ targetDate: this.props.targetDate });
  }

  render() {
    return (
      <div className="counter">
        <div className="clock-days">{props.days}</div>
        <div className="clock-hours">{props.hours}</div>
        <div className="clock-minutes">{props.minutes}</div>
        <div className="clock-seconds">{props.seconds}</div>
      </div>
    );
  }
}

export default Counter;
