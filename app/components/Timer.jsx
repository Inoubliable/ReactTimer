var React = require('react');
var Clock = require('Clock');

class Timer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Timer</h1>
        <Clock totalSeconds={45}></Clock>
      </div>
    );
  }
}

module.exports = Timer;