import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
	margin: 0;
`;

const TitleLink = styled(Link)`
	color: inherit;
`;

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 20px;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	display: flex;
	max-width: 1000px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`;

const List = styled.ul`
	display: flex;
	margin: 0;
	align-items: center;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	margin-bottom: 0;
	margin-right: 50px;
`;

const SLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: ${props => (props.isActive ? 'black' : '#676767')};
	display: inline-block;
`;

const HeaderPresenter = props => {
	console.log(props);
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<Title>
					<TitleLink to="/">NomadCoin</TitleLink>
				</Title>
				<Nav>
					<List>
						<ListItem>
							<SLink to="/" isActive={window.location.pathname === '/'}>
								Home
							</SLink>
						</ListItem>
						<ListItem>
							<SLink to="/blocks" isActive={window.location.pathname === '/blocks'}>
								Blocks
							</SLink>
						</ListItem>
						<ListItem>
							<SLink to="/transactions" isActive={window.location.pathname === '/transactions'}>
								Transactions
							</SLink>
						</ListItem>
					</List>
				</Nav>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default HeaderPresenter;
