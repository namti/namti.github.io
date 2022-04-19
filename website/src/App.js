import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { Counter } from './features/counter/Counter';
import './view/dist/style.css';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<header>
						<Counter />
					</header>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
