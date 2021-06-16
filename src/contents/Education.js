import React, { Component } from 'react';
import Widecard from '../contents/Widecard';
class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">My Education</h1>
				<Widecard
					title="B.Tech | Computer Science and Engineering (8.98 CGPA)"
					where="National Institute of Technology, Patna"
					from="2018"
					to="Present"
				/>
				<Widecard
					title="XII | C.B.S.E. (96%)"
					where="Delhi Public School Ghaziabad"
					from="2015"
					to="2017"
				/>
				<Widecard
					title="X | I.C.S.E. (94.6%)"
					where=" St. Teresa’s Academy, Modinagar"
					from="2003"
					to="2015"
				/>
			</div>
		);
	}
}
export default Education;
