import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../images/2.png';
import Social from '../contents/Social';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="condiv home">
				<div className="cont1">
					<img
						src={profilepic}
						className="profilepic"
						width="15%"
						height="auto"
					></img>
					<br />
					<ReactTypingEffect
						className="typingeffect"
						text={['Hi There!', "I'm Anant Malhotra", 'Nice to meet you.']}
						speed={70}
						eraseDelay={1000}
					/>
				</div>
				<div className="cont2">
					<p>
						I am a 3rd year student pursuing B.Tech in
						<span style={{ color: '#86c232' }}>
							{' '}
							Computer Science and Engineering{' '}
						</span>
						at NIT Patna. I enjoy being challenged and engaging with projects
						that require me to work outside my comfort and knowledge set.
					</p>
					<p>
						My interests lie in building new
						<span style={{ color: '#86c232' }}> Mobile/Web Technologies </span>
						and in solving problems related to
						<span style={{ color: '#86c232' }}> Machine Learning </span>and
						<span style={{ color: '#86c232' }}> Information Security.</span>
					</p>
				</div>
				<div className="cont1">
					<Social />
				</div>
			</div>
		);
	}
}

export default Home;
