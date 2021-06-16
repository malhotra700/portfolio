import React, { Component } from 'react';
class Widecard extends Component {
	render() {
		return (
			<div class="widecard">
				<div class="compdet">
					<h3>{this.props.title}</h3>
					<h4>
						<a href={this.props.site} target="_blank">
							{this.props.where}
							{'  '}
							<span style={{ color: '#61892f' }}>
								[{this.props.from} - {this.props.to}]
							</span>
						</a>
					</h4>
					{this.props.description}
				</div>
			</div>
		);
	}
}
export default Widecard;
