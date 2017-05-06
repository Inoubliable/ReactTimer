var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';

class Controls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      switch(countdownStatus) {
        case 'started':
          return <RaisedButton>Pause</RaisedButton>;
        case 'paused':
          return <RaisedButton>Start</RaisedButton>;
      }
    }

    return (
      <div>
        {renderStartStopButton()}
        <RaisedButton secondary={true}>Clear</RaisedButton>
      </div>
    );
  }
}

module.exports = Controls;