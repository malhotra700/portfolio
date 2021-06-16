import React, { Component } from 'react';
import github from '../images/github.png';
import leetcode from '../images/leetcode.png';
import linkedin from '../images/linkedin.png';
import hackerrank from '../images/hackerrank.png';

class Social extends Component {
	state = {};
	render() {
		return (
			<div className="social">
				<a href="https://github.com/malhotra700" target="_blank">
					<img src={github} width="5%" height="auto"></img>
				</a>
				<a
					href="https://www.linkedin.com/in/anant-malhotra-95247018a/"
					target="_blank"
				>
					<img src={linkedin} width="5%" height="auto"></img>
				</a>
				<a href="https://leetcode.com/anantmal009/" target="_blank">
					<img src={leetcode} width="5%" height="auto"></img>
				</a>
				<a href="http://www.hackerrank.com/malhotra700" target="_blank">
					<img src={hackerrank} width="5%" height="auto"></img>
				</a>
			</div>
		);
	}
}

export default Social;
