var React = require('react');

class Timer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Timer</h1>
      </div>
    );
  }
}

module.exports = Timer;