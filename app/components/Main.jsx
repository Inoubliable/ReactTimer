var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
import RaisedButton from 'material-ui/RaisedButton';
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Nav');

injectTapEventPlugin();

var Main = (props) => {
	return (
		<div>
			<Nav></Nav>
		</div>
	);
}

module.exports = Main;