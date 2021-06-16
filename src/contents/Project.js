import React, { Component } from 'react';

class Project extends Component {
	state = {};
	helper = () => {
		if (this.props.site) {
			return (
				<a href={this.props.site} target="_blank">
					<i className="external alternate icon small"></i>
				</a>
			);
		}
	};
	render() {
		return (
			<div class="widecard">
				<div class="compdet">
					<h3>
						{this.props.title + ' '}
						{this.helper()}
					</h3>
					<h4>{this.props.tech}</h4>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default Project;
