import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			NavItemActive: '',
		};
	}
	activeitem = (x) => {
		if (this.state.NavItemActive.length > 0) {
			document
				.getElementById(this.state.NavItemActive)
				.classList.remove('active');
			document.getElementById(this.state.NavItemActive).classList.add('Normal');
		}
		//console.log(x);
		this.setState({ NavItemActive: x }, () => {
			document.getElementById(this.state.NavItemActive).classList.add('active');
			document
				.getElementById(this.state.NavItemActive)
				.classList.remove('Normal');
		});
	};
	componentDidMount() {
		this.activeitem('Home');
	}
	render() {
		return (
			<nav>
				<ul>
					<Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
					<Navitem
						item="Skills"
						tolink="/skills"
						activec={this.activeitem}
					></Navitem>
					<Navitem
						item="Projects"
						tolink="/projects"
						activec={this.activeitem}
					></Navitem>
					<Navitem
						item="Experience"
						tolink="/experience"
						activec={this.activeitem}
					></Navitem>
					<Navitem
						item="Achievements"
						tolink="/achievements"
						activec={this.activeitem}
					></Navitem>
				</ul>
			</nav>
		);
	}
}
//<ParticlesBg num={[20, 30]} type="cobweb" bg={true} color="#61892f" />
//<ParticlesBg type="custom" config={config} bg={true} color="#61892f" />
export default Navbar;
