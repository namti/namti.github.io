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
	IconSuitcase,
} from './3d_icons';

import './view/dist/style.css';

function App() {
	return (
		<Container className="my-5">
			<Row>
				<Col>
					<IconBicycle dragRotate zoom={ 1 } className="m-3 border" />
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
			</Row>
		</Container>
	);
}

export default App;
