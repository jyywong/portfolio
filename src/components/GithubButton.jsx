import React from 'react';
import styled from 'styled-components';

const ButtonShape = styled.div`
	position: absolute;
	top: 26vh;
	left: 18vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(122, 138, 128, 1);
	width: 175px;
	height: 50px;
	transform: skew(-20deg);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;
const ButtonText = styled.h5`
	transform: skew(20deg);
	color: rgba(196, 196, 196, 1);
	font-size: 2.5rem;
	font-weight: normal;
`;
const GithubButton = () => {
	return (
		<ButtonShape>
			<ButtonText>Live Site</ButtonText>
		</ButtonShape>
	);
};

export default GithubButton;
