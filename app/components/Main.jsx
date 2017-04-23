var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
import RaisedButton from 'material-ui/RaisedButton';
var Nav = require('Nav');

injectTapEventPlugin();

var Main = (props) => {
	return (
		<div>
			<Nav></Nav>
			<div>
				{props.children}
			</div>
		</div>
	);
}

module.exports = Main;