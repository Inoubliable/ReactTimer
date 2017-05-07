var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
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
          this.setState({
            count: 0,
            countdownStatus: 'paused'
          }); //no break, so on 'stopped' it also executes code under 'paused'
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  render() {
    var {count, countdownStatus} = this.state;

    return (
      <div className="text-center">
        <h1>Timer</h1>
        <Clock totalSeconds={count}></Clock>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>
      </div>
    );
  }
}

module.exports = Timer;