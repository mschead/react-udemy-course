'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

// Create a templateTwo var JSX expression
// div
// 	h1 -> Marcos Schead
// 	p -> Age: 26
// 	p -> Location: Florianoplx
// Render templateTwo instead of template

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Marcos Schead'
	),
	React.createElement(
		'p',
		null,
		'Age: 26'
	),
	React.createElement(
		'p',
		null,
		'Location: Florianoplx'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
