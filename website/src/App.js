import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { Counter } from './features/counter/Counter';
import { Works } from './features/work/works';
import './view/dist/style.css';
import { ReactSVG } from 'react-svg';
import logo from './view/images/logo.svg';

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<ReactSVG src={ logo } className="logo" />
				</Col>
			</Row>
			<Row>
				<Col>
					<header>
						<Works />
					</header>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
