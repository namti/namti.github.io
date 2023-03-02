import React from 'react';
import { 
	Routes, 
	Route, 
	Link,
	useLocation,
} from "react-router-dom";
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";

function App() {
	let location = useLocation();

	return (
		<div>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>

			<TransitionGroup>
				<CSSTransition
					key={ location.pathname }
					classNames="fade"
					timeout={3000}
				>
					<Routes>
						<Route path="/" element={ 
							<header>
								<h5>Hello World! XD</h5>
							</header>
							} />
						<Route exact path="/about" element={ 
							<h1>About</h1>
							} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>

		</div>
	);
}

export default App;
