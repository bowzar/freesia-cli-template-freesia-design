import './setupPublicPath';
import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from "@yulintu/freesia-design";

import templates from "./templates";
import './css/index.less';

function render(props = {}) {
	let { container } = props;
	container = container ? container.querySelector('#root') : document.querySelector('#root');

	ReactDOM.render((
		<Application global={{}} templates={templates} {...props} options={{
			// svgIconPrefix: "xxxx"
		}} />
	), container);
}

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log('microapp bootstrap');
}

export async function mount(props) {
	console.log('microapp mount', props);
	render(props);
}

export async function unmount(props) {
	console.log('microapp unmount', props);
	const { container } = props;
	ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}