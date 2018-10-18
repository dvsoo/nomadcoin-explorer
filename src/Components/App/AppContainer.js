import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import AppPresenter from './AppPresenter';
import axios from 'axios';
import reset from 'styled-reset';
import typography from '../../typography';
import { API_URL } from '../../constants';

const baseStyle = () => injectGlobal`
    ${reset};
	${typography};
	a{
		text-decoration: none!important;
	}
`;

class AppContainer extends Component {
	state = {
		isLoading: true,
	};
	componentDidMount = () => {
		this._getData();
	};
	render() {
		baseStyle();
		return <AppPresenter {...this.state} />;
	}
	_getData = async () => {
		const request = await axios.get(`${API_URL}/blocks`);
	};
}

export default AppContainer;
