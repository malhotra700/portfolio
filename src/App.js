import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Skills from './contents/Skills';
import Achievements from './contents/Achievements';
import Experience from './contents/Experience';
import Projects from './contents/Projects';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className="App">
				<Navbar />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/experience">
					<Experience />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
				<Route path="/achievements">
					<Achievements />
				</Route>
			</div>
		</Router>
	);
}
export default App;
