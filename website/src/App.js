import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { Counter } from './features/counter/Counter';
import { Works } from './features/work/works';
import ZDog from './components/zdog';
import './view/dist/style.css';
import { ReactSVG } from 'react-svg';
import logo from './view/images/logo.svg';

function App() {
	return (
		<Container>

			<Row>
				<Col>
					zdog
					<ZDog />
				</Col>
			</Row>

			<Row>
				<Col>
					<div className="logo-wrapper d-flex align-items-center justify-content-center py-5 w-100">
						<ReactSVG src={ logo } className="logo" />
					</div>
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
