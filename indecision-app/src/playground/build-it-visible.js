let isHidden = true;
let buttonName = 'Show details';

const onVisibilityClick = () => {
	isHidden = !isHidden;
	buttonName = isHidden ? 'Show details' : 'Hide details'
	render(); 
};

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onVisibilityClick}>{buttonName}</button>
			<p hidden={isHidden}>Hey. these are some details you can now see!</p>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();