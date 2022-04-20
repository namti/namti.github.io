import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { Counter } from './features/counter/Counter';
import { Works } from './features/work/works';
import './view/dist/style.css';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<header>
						<Counter />
						<Works />
					</header>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
