import {
	Container,
	Row,
	Col,
} from 'reactstrap';

import logo from './logo.svg';
import './view/dist/style.css';

function App() {
	return (
		<Container>
			<Row>
				<Col>

					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>

				</Col>
			</Row>
		</Container>
	);
}

export default App;
