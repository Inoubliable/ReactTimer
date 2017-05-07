var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';

const whiteText = {
  color: 'white'
}

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  render() {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      switch(countdownStatus) {
        case 'started':
          return <RaisedButton primary={true} onClick={this.onStatusChange('paused')} className="pause-start-btn" buttonStyle={whiteText}>Pause</RaisedButton>;
        case 'paused':
          return <RaisedButton primary={true} onClick={this.onStatusChange('started')} className="pause-start-btn" buttonStyle={whiteText}>Start</RaisedButton>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <RaisedButton secondary={true} onClick={this.onStatusChange('stopped')} buttonStyle={whiteText}>Clear</RaisedButton>
      </div>
    );
  }
}

module.exports = Controls;