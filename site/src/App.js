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

				<IconBicycle className="border rounded-5 overflow-hidden m-2" />
				<IconGame className="border rounded-5 overflow-hidden m-2" />

				</Col>
			</Row>
		</Container>
	);
}

export default App;
