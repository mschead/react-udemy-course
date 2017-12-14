console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

// Create a templateTwo var JSX expression
// div
// 	h1 -> Marcos Schead
// 	p -> Age: 26
// 	p -> Location: Florianoplx
// Render templateTwo instead of template

var templateTwo = (
	<div>
		<h1>Marcos Schead</h1>
		<p>Age: 26</p>
		<p>Location: Florianoplx</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);