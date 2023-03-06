import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import ZdogExample from './zdog-example';
import IconBicycle from './3d_icons/bicycle';

import './view/dist/style.css';

function App() {
	return (
		<Container>
			<Row>
				<Col>

				<IconBicycle />

				</Col>
			</Row>
		</Container>
	);
}

export default App;
