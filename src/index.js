import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from "@yulintu/freesia-design";

import templates from "./templates";
import './css/index.less';

ReactDOM.render(
	<Application global={{}} templates={templates} />,
	document.getElementById('root')
);

