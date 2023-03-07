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

				<IconBicycle dragRotate zoom={ .75 } className="border rounded-5 shadow overflow-hidden m-4" />
				<IconGame dragRotate zoom={ .75 } className="border rounded-5 shadow overflow-hidden m-4" />

				</Col>
			</Row>
		</Container>
	);
}

export default App;
