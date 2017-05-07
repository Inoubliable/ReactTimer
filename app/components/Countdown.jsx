var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
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

  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0}); //no break, so on 'stopped' it also executes code under 'paused'
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
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
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
      }
    };

    return (
      <div className="text-center">
        <h1>Countdown</h1>
        <Clock totalSeconds={count}></Clock>
        {renderControlArea()}
      </div>
    );
  }
}

module.exports = Countdown;