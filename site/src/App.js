import React, { useEffect, useRef } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { useScroll, animated } from '@react-spring/web';

import {
	IconBicycle,
	IconGame,
	IconCamp,
	IconSuitcase,
} from './3d_icons';

import Header from './components/header';

import './view/dist/style.css';

function App() {

	const refBicycle = React.createRef();
	const header = useRef(null);

	const { scrollYProgress } = useScroll();

	// useEffect(() => {
	// 	scrollYProgress.interpolate(val => console.log('scrollYProgress interpolate', val));
	// }, [ scrollYProgress ]);

	return (
		<div>
			<Header />

			<gradients class="bg-gradient">
				<div class="gradient-red"></div>
				<div class="gradient-blue"></div>
				<div class="gradient-orange"></div>
			</gradients>

			<Container className="my-5">

				<Row>
					<Col>
						<h1 ref={ header }>Jasper Yan</h1>
					</Col>
				</Row>

				<animated.div className="row" style={ { opacity: scrollYProgress } }>
					<Col>
						<IconBicycle dragRotate zoom={ 1 } className="m-3 border" ref={ refBicycle } />
					</Col>
					<Col>
						<IconGame dragRotate zoom={ 1 } className="m-3 border" />
					</Col>
					<Col>
						<IconCamp dragRotate zoom={ 1 } className="m-3 border" />
					</Col>
					<Col>
						<IconSuitcase dragRotate zoom={ 1 } className="m-3 border" />
					</Col>
				</animated.div>
			</Container>
		</div>
	);
}

export default App;
