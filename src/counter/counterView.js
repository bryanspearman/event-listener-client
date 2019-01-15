import React from 'react';

export class CounterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.setTimer(this.props.targetDate);
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setTimer(this.props.targetDate);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getLeadingZeroCalc(num) {
    const leadingZero = num => {
      return num < 10 ? '0' + num : num;
    };
    return num < 0 ? num : leadingZero(num);
  }

  setTimer(targetDate) {
    let time;
    const now = new Date();
    if (new Date(targetDate).getTime() < now.getTime()) {
      // targetDate is in the past
      time = Date.parse(now) - Date.parse(targetDate);
    } else {
      // targetDate is in the future
      time = Date.parse(targetDate) - Date.parse(now);
    }

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div className="counter">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="clock-number">
                  {this.getLeadingZeroCalc(this.state.days)}
                </div>
              </td>
              <td>
                <div className="clock-number">
                  {this.getLeadingZeroCalc(this.state.hours)}
                </div>
              </td>
              <td>
                <div className="clock-number">
                  {this.getLeadingZeroCalc(this.state.minutes)}
                </div>
              </td>
              <td>
                <div className="clock-number">
                  {this.getLeadingZeroCalc(this.state.seconds)}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="number-label">Days</div>
              </td>
              <td>
                <div className="number-label">Hours</div>
              </td>
              <td>
                <div className="number-label">Minutes</div>
              </td>
              <td>
                <div className="number-label">Seconds</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CounterView;
