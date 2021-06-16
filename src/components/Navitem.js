import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navitem extends Component {
	state = {};
	render() {
		return (
			<li
				className="Normal"
				id={this.props.item}
				onClick={this.props.activec.bind(this, this.props.item)}
			>
				<Link
					to={this.props.tolink}
					//style={{ }}
				>
					{this.props.item}{' '}
				</Link>
			</li>
		);
	}
}

export default Navitem;
