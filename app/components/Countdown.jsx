var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.state = {
      count: 0
    }
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    });
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