console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template

var app = {
	title: 'Indecision app',
	subtitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name: 'Schead',
	age: 26,
	location: 'Florianpolx'
};

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);