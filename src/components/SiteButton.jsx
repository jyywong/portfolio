import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonShape = styled(motion.div)`
    cursor: pointer;
	position: absolute;
	top: 26vh;
	left: 3vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(101, 30, 38, 1);
	width: 175px;
	height: 50px;
	transform: skew(-20deg);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;
const ButtonText = styled(motion.h5)`
	transform: skew(20deg);
	color: rgba(196, 196, 196, 1);
	font-size: 2.5rem;
	font-weight: normal;
    
`;

const SiteButton = () => {
	return (
		<ButtonShape whileHover={{ scale: 1.1, skew: -20 }} initial={{ skew: -20 }}>
			<ButtonText whileHover={{ color: 'rgba(147, 135, 88, 1)', textShadow: '0 0 2px rgba(251, 217, 87, 1)' }}>
				Live Site
			</ButtonText>
		</ButtonShape>
	);
};

export default SiteButton;
