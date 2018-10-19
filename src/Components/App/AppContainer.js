import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import AppPresenter from './AppPresenter';
import axios from 'axios';
import reset from 'styled-reset';
import typography from '../../typography';
import { API_URL, WS_URL } from '../../constants';
import flatten from 'lodash.flatten';
import { parseMessage } from '../../utils';

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
		this._connectTows();
	};
	render() {
		baseStyle();
		return <AppPresenter {...this.state} />;
	}
	_getData = async () => {
		const request = await axios.get(`${API_URL}/blocks`);
		const blocks = request.data;
		const reverseBlocks = blocks.reverse();
		const txs = flatten(reverseBlocks.map(block => block.data));
		this.setState({
			blocks: reverseBlocks,
			transactions: txs,
			isLoading: false,
		});
	};
	_connectTows = () => {
		const ws = new WebSocket(WS_URL);
		///only blockchain message => why? 블록이 생성될 때마다 업데이트
		ws.addEventListener('message', message => {
			const parsedMessage = parseMessage(message);
			if (parsedMessage !== null && parsedMessage !== undefined) {
				this.setState(prevState => {
					return {
						...prevState,
						blocks: [...parsedMessage, ...prevState.blocks],
						transactions: [...parsedMessage[0].data, ...prevState.transactions],
					};
				});
			}
		});
	};
}

export default AppContainer;
