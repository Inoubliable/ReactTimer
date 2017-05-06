var React = require('react');
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CountdownForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.getValue();

    if(strSeconds && strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {

    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <TextField ref="seconds" hintText="Enter time in seconds"/>
          <br/>
          <RaisedButton type="submit" label="Start" primary={true} />
        </form>
      </div>
    );
  }
}

module.exports = CountdownForm;