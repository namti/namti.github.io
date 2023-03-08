import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';

import {
	IconBicycle,
	IconGame,
	IconCamp,
} from './3d_icons';

import './view/dist/style.css';

function App() {
	return (
		<Container className="my-5">
			<Row>
				<Col className="d-flex align-items-baseline">

				<IconBicycle dragRotate zoom={ 1 } className="m-3" />
				<IconGame dragRotate zoom={ 1 } className="m-3" />
				<IconCamp dragRotate zoom={ 1 } className="m-3" _showCoordinateSpace />

				</Col>
			</Row>
		</Container>
	);
}

export default App;
