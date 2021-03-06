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
          <Link to="/timer" activeClassName="active-link">
	          <MenuItem>
	          	Timer
	          </MenuItem>
          </Link>
          <Link to="/countdown" activeClassName="active-link">
          	<MenuItem>
          		Countdown
          	</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

module.exports = Nav;