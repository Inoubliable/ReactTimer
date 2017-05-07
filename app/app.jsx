var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500, white} from 'material-ui/styles/colors';
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: red500,
	},
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="timer" component={Timer}></Route>
				<Route path="countdown" component={Countdown}></Route>
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('app')
);