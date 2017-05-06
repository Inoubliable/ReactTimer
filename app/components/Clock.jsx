var React = require('react');
import CircularProgress from 'material-ui/CircularProgress';

class Clock extends React.Component {

  constructor(props) {
    super(props);
  }

  formatSeconds(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = (totalSeconds - seconds) / 60;

    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }

  render() {

    var {totalSeconds, countdownStatus} = this.props;
    var seconds = totalSeconds % 60;

    return (
      <div>
        <CircularProgress
          mode="determinate"
          max={60}
          value={seconds}
          size={200}
          thickness={20}
        />
        <h2>
          {this.formatSeconds(totalSeconds)}
        </h2>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
}

module.exports = Clock;