var React = require('react');
var Clock = require('Clock');

class Countdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Countdown</h1>
        <Clock totalSeconds={117}></Clock>
      </div>
    );
  }
}

module.exports = Countdown;