var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// app css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="timer" component={Timer}></Route>
				<Route path="countdown" component={Countdown}></Route>
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('app')
);