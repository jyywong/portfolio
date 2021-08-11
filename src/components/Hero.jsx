import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import Layout from './Layout';

const Background = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(45deg, rgba(39, 38, 31, 1), rgba(39, 38, 31, 0.85));
	width: 100vw;
	height: 100vh;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const SurroundingText = styled(motion.h2)`
	font-weight: normal;
	color: rgba(246, 252, 236, 1);
	font-size: 4rem;
`;
const NameText = styled(motion.h1)`
	font-size: 8rem;
	color: rgba(101, 30, 38, 1);
`;

const TopLine = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 75vw;
	border-right: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
`;
const MidLine = styled(motion.div)`
    position: absolute;
    top: calc(75vh - 2px);
    right: calc(25vw - 1px);
	border-top: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
    width: 500px;
`;
const BotLine = styled(motion.div)`
	position: absolute;
    top: calc(75vh - 2px);
	left: 50vw;
	border-right: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
    height: 500px;
`;

const Hero = () => {
	const controlTop = useAnimation();
	const controlName = useAnimation();
	const controlBot = useAnimation();
	const controlTopLine = useAnimation();
	const controlMidLine = useAnimation();
	const controlBotLine = useAnimation();
	useEffect(() => {
		const sequence = async () => {
			await controlTopLine.start({
				height: '75vh',
				transition: { type: 'tween' }
			});
			await controlMidLine.start({
				width: '25vw',
				transition: { type: 'tween' }
			});
			await controlBotLine.start({
				height: '25vh',
				transition: { type: 'tween' }
			});
			await controlTop.start({
				y: 0,
				opacity: 1
			});
			await controlName.start({
				y: 0,
				opacity: 1,
				transition: { delay: 0.25 }
			});
			await controlBot.start({
				y: 0,
				opacity: 1,
				transition: { delay: 0.25 }
			});
		};
		sequence();
	}, []);
	return (
		<Layout>
			<Background>
				<TextContainer>
					<SurroundingText animate={controlTop} initial={{ y: -500, opacity: 0 }}>
						{"Hi, I'm "}
					</SurroundingText>
					<NameText animate={controlName} initial={{ y: -500, opacity: 0 }}>
						Jonathan Wong
					</NameText>
					<SurroundingText animate={controlBot} initial={{ y: -500, opacity: 0 }}>
						{'A front-end developer '}
					</SurroundingText>
				</TextContainer>
				<TopLine animate={controlTopLine} initial={{ height: 0 }} />
				<MidLine animate={controlMidLine} initial={{ width: 0 }} />
				<BotLine animate={controlBotLine} initial={{ height: 0 }} />
			</Background>
		</Layout>
	);
};

export default Hero;
