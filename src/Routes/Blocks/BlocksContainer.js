import React, { Component } from 'react';
import BlocksPresenter from './BlocksPresenter';
import PropTypes from 'prop-types';

class BlockContainer extends Component {
	render() {
		return <BlocksPresenter />;
	}
}

BlockContainer.typeProps = {
	blocks: PropTypes.array.isRequired
}

export default BlockContainer;
