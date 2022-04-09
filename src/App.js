import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div>
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
		</div>
	);
}

export default App;
