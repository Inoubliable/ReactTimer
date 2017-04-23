var React = require('react');
var {Link, IndexLink} = require('react-router');
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {open: true};
  }

  handleToggle() {
		this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          className="drawer-btn"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem><h2>React Timer App</h2></MenuItem>
          <MenuItem>
          	<IndexLink to="/">Timer</IndexLink>
          </MenuItem>
          <MenuItem>
          	<Link to="/">Countdown</Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

module.exports = Nav;