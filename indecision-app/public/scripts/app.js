'use strict';

var isHidden = true;
var buttonName = 'Show details';

var onVisibilityClick = function onVisibilityClick() {
	isHidden = !isHidden;
	buttonName = isHidden ? 'Show details' : 'Hide details';
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: onVisibilityClick },
			buttonName
		),
		React.createElement(
			'p',
			{ hidden: isHidden },
			'Hey. these are some details you can now see!'
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
