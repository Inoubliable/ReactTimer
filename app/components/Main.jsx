var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin");
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