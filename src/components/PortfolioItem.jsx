import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Layout from './Layout';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Background = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-image: linear-gradient(rgba(39, 38, 31, 1), rgba(39, 38, 31, 0.85)); */
	background-color: rgba(39, 38, 31, 1);
	width: 100vw;
	height: 100vh;
`;

const TopLine = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 3.5vw;
	border-right: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
    /* height:65vh; */
`;

const ButtonLine = styled(motion.div)`
    position: absolute;
    top: 65vh;
    left: 3.5vw;
	border-top: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
    /* width: 35vw; */
`;
const ExitLine = styled(motion.div)`
    position: absolute;
    top: 65vh;
    left: 38.5vw;
    border-left: 2px solid rgba(147, 135, 88, 1);
    box-shadow: 0 0 6px rgba(251, 217, 87, 1);
    /* height:65vh; */
`;

const ContentContainer = styled.div`
	display: flex;
	width: 100%;
`;

const DescriptionContainer = styled(motion.div)`
	/* background-color: blue; */
    position: relative;
	display: flex;
	padding: 4rem;
	margin: 8rem;
	flex-direction: column;
	width: 50%;
`;

const ProjectName = styled.h1`
	color: rgba(246, 252, 236, 1);
	font-size: 10rem;
`;

const ProjectDescription = styled.h4`
	color: rgba(122, 138, 128, 1);
	font-size: 2rem;
`;
const ImagesContainer = styled.div`
	/* background-color: orangered; */
	position: relative;
	display: flex;
	width: 50%;
`;
const ForePolygonShadowWrap = styled.span`
	position: absolute;
	top: -5rem;
	right: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const ForePolygon = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: rgba(196, 196, 196, 1);
	width: 50vw;
	height: 55vh;
	clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const MidPolygonShadowWrap = styled.span`
	position: absolute;
	top: 0rem;
	right: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const MidPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 30rem; */
    height:30vh;
	/* width: 105rem; */
    width:54.5vw;
	clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const BackPolygonShadowWrap = styled(motion.span)`
	position: absolute;
	top: 18rem;
	right: -5rem;
	filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.83));
`;

const BackPolygon = styled(motion.div)`
	background-color: rgba(196, 196, 196, 1);
	/* height: 20rem; */
    height: 21vh;
    /* width:111rem; */
	width: 58vw;
	clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 0 100%);
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.83);
`;

const SiteButtonShape = styled(motion.div)`
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
const SiteButtonText = styled(motion.h5)`
	transform: skew(20deg);
	color: rgba(196, 196, 196, 1);
	font-size: 2.5rem;
	font-weight: normal;
    
`;

const GitButtonShape = styled(motion.div)`
    cursor: pointer;
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
const GitButtonText = styled(motion.h5)`
	transform: skew(20deg);
	color: rgba(196, 196, 196, 1);
	font-size: 2.5rem;
	font-weight: normal;
`;

const TrackContainer = styled(motion.div)`
position: absolute;
	top: 0;
	right:0;
	display: flex;
	transform: rotate(-10deg);
`;

const TopTrack = styled(motion.div)`
	position: absolute;
	top: 5vh;
	right: 0;
	border: 2px dashed rgba(122, 138, 128, 1);
	width: 28vw;
    
`;
const MidTrack = styled(motion.div)`
	position: absolute;
	top: 5vh;
	right: calc(28vw + 4px);
	border: 2px dashed rgba(122, 138, 128, 1);
	height: 35vw;
    
`;
const BotTrack = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(28vw + 8px);
	border: 2px dashed rgba(122, 138, 128, 1);
	width: 8vw;
`;

const LMarksTheSpot = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(35vw + 8px);
	border: 4px solid rgba(122, 138, 128, 1);
	width: 6vw;
	transform-origin: center;
	transform:rotate(45deg);
`;
const RMarksTheSpot = styled(motion.div)`
	position: absolute;
	top: calc(5vh + 35vw);
	right: calc(35vw + 8px);
	border: 4px solid rgba(122, 138, 128, 1);
	width: 6vw;
	transform-origin: center;
	transform:rotate(-45deg);
`;
// const TabContainer = styled(motion.div)`
// 	display: flex;
// 	width:100%;

// `;
// const TabText = styled(motion.h4)`
// 	font-size: 3rem;
// 	font-weight: normal;
// 	color:rgba(147, 135, 88, 1);
// 	margin-left: 10rem;
// `;
// const TabTextRight = styled(motion.h4)`
// 	font-size: 3rem;
// 	font-weight: normal;
// 	color:rgba(147, 135, 88, 1);
// 	margin-left: 10rem;

// 	&:hover ~ ${TabUnderline}{
// 		margin-left: 10rem;
// 	}
// `;
// const TabUnderline = styled(motion.hr)`
// 	height: .25rem;
//   	width: 20%;
//  	margin-left: 5rem;
//   	background: tomato;
//   	border: none;
//   	transition: .3s ease-in-out;

// `;

const PortfolioItem = () => {
	const controlTopTrack = useAnimation();
	const controlMidTrack = useAnimation();
	const controlBotTrack = useAnimation();
	const controlLSpot = useAnimation();
	const controlRSpot = useAnimation();
	const controlSiteButton = useAnimation();
	const controlGitButton = useAnimation();
	const controlTopLine = useAnimation();
	const controlButtonLine = useAnimation();
	const controlExitLine = useAnimation();
	const controlDescription = useAnimation();
	const controlBackPoly = useAnimation();
	const controlMidPoly = useAnimation();
	const controlForePoly = useAnimation();

	const trailAnimateSeq = async () => {
		await controlTopTrack.start({
			width: '28vw',
			opacity: 1,
			transition: { type: 'tween', duration: 2 }
		});
		await controlMidTrack.start({
			height: '35vw',
			opacity: 1,
			transition: { type: 'tween', duration: 2 }
		});
		await controlBotTrack.start({
			width: '8vw',
			opacity: 1,
			transition: { type: 'tween', duration: 2 }
		});
		controlLSpot.start({
			opacity: 1,
			scale: 1,
			rotate: 45,
			transition: { duration: 2 }
		});
		await controlRSpot.start({
			opacity: 1,
			scale: 1,
			rotate: -45,
			transition: { duration: 2 }
		});
		await controlTopTrack.start({
			opacity: 0,
			transitionEnd: { width: 0 }
		});
		await controlMidTrack.start({
			opacity: 0,
			transitionEnd: { height: 0 }
		});
		await controlBotTrack.start({
			opacity: 0,
			transitionEnd: { width: 0 }
		});
		controlLSpot.start({
			opacity: 0
		});
		await controlRSpot.start({
			opacity: 0
		});
		trailAnimateSeq();
	};

	const lineAnimateSeq = async () => {
		await controlTopLine.start({
			height: '65vh',
			transition: { type: 'tween' }
		});
		await controlButtonLine.start({
			width: '35vw',
			transition: { type: 'tween' }
		});
		await controlExitLine.start({
			height: '65vh',
			transition: { type: 'tween' }
		});
	};

	const polyAnimateSeq = () => {
		controlBackPoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14 }
		});
		controlMidPoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.25 }
		});
		controlForePoly.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.5 }
		});
	};
	const allAnimateSeq = async () => {
		await controlDescription.start({
			x: [ 500, 500, 0 ],
			scale: [ 1.5, 1.5, 1 ],
			opacity: [ 0, 1, 1 ],
			transition: { duration: 4, times: [ 0, 0.65, 1 ] }
		});
		await lineAnimateSeq();
		polyAnimateSeq();
		controlSiteButton.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.6, duration: 1 }
		});
		controlGitButton.start({
			x: 0,
			transition: { type: 'spring', mass: 1, damping: 14, delay: 0.75, duration: 1 }
		});
		trailAnimateSeq();
	};

	useEffect(() => {
		allAnimateSeq();
	}, []);

	return (
		<Layout>
			<Background>
				<TrackContainer>
					<TopTrack animate={controlTopTrack} initial={{ width: 0 }} />
					<MidTrack animate={controlMidTrack} initial={{ height: 0 }} />
					<BotTrack animate={controlBotTrack} initial={{ width: 0 }} />
					<LMarksTheSpot animate={controlLSpot} initial={{ scale: 0, rotate: 45 }} />
					<RMarksTheSpot animate={controlRSpot} initial={{ scale: 0, rotate: -45 }} />
				</TrackContainer>

				<TopLine animate={controlTopLine} />
				<ButtonLine animate={controlButtonLine} />
				<ExitLine animate={controlExitLine} />
				<ContentContainer>
					<DescriptionContainer animate={controlDescription}>
						<div>
							<ProjectName>Trip Planner</ProjectName>
							{/* <TabContainer>
								<TabText>Hello</TabText>
								<TabTextRight>Hello</TabTextRight>
								<TabUnderline />
							</TabContainer> */}
						</div>

						<ProjectDescription>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex sint animi deleniti
							explicabo a quibusdam minima alias veritatis repudiandae!
						</ProjectDescription>
						<SiteButtonShape
							animate={controlSiteButton}
							whileHover={{ scale: 1.1, skew: -20 }}
							initial={{ skew: -20, x: 2000 }}
						>
							<SiteButtonText
								whileHover={{
									color: 'rgba(147, 135, 88, 1)',
									textShadow: '0 0 2px rgba(251, 217, 87, 1)'
								}}
							>
								Live Site
							</SiteButtonText>
						</SiteButtonShape>
						<GitButtonShape
							animate={controlGitButton}
							whileHover={{ scale: 1.1, skew: -20 }}
							initial={{ skew: -20, x: 2000 }}
						>
							<GitButtonText>Github</GitButtonText>
						</GitButtonShape>
					</DescriptionContainer>
					<ImagesContainer>
						<BackPolygonShadowWrap>
							<BackPolygon
								whileHover={{
									scale: 1.05,
									transition: { type: 'spring', mass: 1 }
								}}
								animate={controlBackPoly}
								initial={{ x: 1100 }}
							/>
						</BackPolygonShadowWrap>
						<MidPolygonShadowWrap>
							<MidPolygon
								whileHover={{
									scale: 1.05,
									transition: { type: 'spring', mass: 1 }
								}}
								animate={controlMidPoly}
								initial={{ x: 1100 }}
							/>
						</MidPolygonShadowWrap>
						<ForePolygonShadowWrap>
							<ForePolygon
								whileHover={{
									scale: 1.05,
									transition: { type: 'spring', mass: 1 }
								}}
								animate={controlForePoly}
								initial={{ x: 1100 }}
							>
								<StaticImage height={450} src="../images/TripPlannerLaptop.png" alt="website" />
							</ForePolygon>
						</ForePolygonShadowWrap>
					</ImagesContainer>
				</ContentContainer>
			</Background>
		</Layout>
	);
};

export default PortfolioItem;
