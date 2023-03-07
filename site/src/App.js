import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';

import {
	IconBicycle,
	IconGame,
} from './3d_icons';

import './view/dist/style.css';

function App() {
	return (
		<Container className="my-5">
			<Row>
				<Col className="d-flex align-items-baseline">

				<IconBicycle dragRotate zoom={ .75 } className="m-3" />
				<IconGame dragRotate zoom={ .75 } className="m-3" />

				</Col>
			</Row>
		</Container>
	);
}

export default App;
