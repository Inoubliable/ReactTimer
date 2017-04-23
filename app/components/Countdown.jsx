var React = require('react');

class Countdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Countdown</h1>
      </div>
    );
  }
}

module.exports = Countdown;