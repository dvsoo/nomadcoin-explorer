import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sum from 'lodash.sum';
import { makeDateSexy } from '../../utils';
import { Card, BlocksHeader, BlocksRow, TxHeader, TxsRow } from 'Components/Shared';

const TableContainer = styled.div`
	margin-top: 50px;
	margin-bottom: 100px;
`;

const HomePresenter = ({ blocks, transactions }) => (
	<Fragment>
		<TableContainer>
			<h2>Latest Blocks</h2>
			<Card>
				<BlocksHeader />
				{blocks.map((block, index) => (
					<BlocksRow
						index={block.index}
						hash={block.hash}
						timestamp={makeDateSexy(block.timestamp)}
						difficulty={block.difficulty}
						key={index}
					/>
				))}
			</Card>
		</TableContainer>
		<TableContainer>
			<h2>Latest Transactions</h2>
			<Card>
				<TxHeader />
				{transactions.map((transaction, index) => (
					<TxsRow
						id={transaction.id}
						insOuts={`${transaction.txIns.length}/${transaction.txOuts.length}`}
						amount={sum(transaction.txOuts.map(txOut => txOut.amount))}
						timestamp={makeDateSexy(transaction.timestamp)}
						key={index}
					/>
				))}
			</Card>
		</TableContainer>
	</Fragment>
);

export default HomePresenter;
