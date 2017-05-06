var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  render() {
    var {count} = this.state;

    return (
      <div className="text-center">
        <h1>Countdown</h1>
        <Clock totalSeconds={count}></Clock>
        <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
      </div>
    );
  }
}

module.exports = Countdown;