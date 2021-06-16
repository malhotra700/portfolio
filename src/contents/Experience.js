import React, { Component } from 'react';
import Widecard from '../contents/Widecard';
class Experience extends Component {
	render() {
		return (
			<div className="condiv">
				<div className="cont1" style={{ marginBottom: '2%' }}>
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						Where I’ve Worked
					</h1>
				</div>
				<Widecard
					title="Data Engineering Analyst Intern"
					where="Accenture AI"
					from="May 2021"
					to="July 2021"
					site="https://www.accenture.com/"
					description={[
						<p>
							<span style={{ color: '#86c232' }}>» </span>Performed data
							scraping & transformation using python and created dimensionally
							modelled schemas using Snowflake that helped guide important
							business decisions.
						</p>,
						<p>
							<span style={{ color: '#86c232' }}>» </span>Learned and worked on
							latest technologies and tools such as Snowflake, Power BI, AWS
							Services, DevSecOps, MLOps, etc.
						</p>,
					]}
				/>
				<Widecard
					title="Mobile Application Development Intern"
					where="SpanishBOLO.com"
					from="April 2020"
					to="June 2020"
					site="https://www.spanishbolo.com/"
					description={[
						<p>
							<span style={{ color: '#86c232' }}>» </span>Developed the
							SpanishBolo App along with the admin portal from scratch; with
							clean, efficient, well tested and maintainable code.
						</p>,
						<p>
							<span style={{ color: '#86c232' }}>» </span>Optimized the
							functional flow of the App, fixed bugs and implemented robust MVVM
							app architectures along with complex user interfaces.
						</p>,
						<p>
							<span style={{ color: '#86c232' }}>» </span>Awarded with Intern of
							the month for commitment and hard work (out of 15 interns).
						</p>,
					]}
				/>
				<Widecard
					title="Android Developer"
					where="SAC NIT Patna 3.0"
					from="2019"
					to="2020"
					site="https://play.google.com/store/apps/details?id=com.rajatv.surajv.roshank.sac&hl=en_IN"
					description={[
						<p>
							<span style={{ color: '#86c232' }}>» </span>Worked on Image
							Compressor for minimizing Database requirements by 98%.
						</p>,
						<p>
							<span style={{ color: '#86c232' }}>» </span>Integrated third party
							libraries, fixed bugs and implemented 10+ new features including
							UPI Payment and Dual Theme Switching feature.
						</p>,
					]}
				/>
				<br />
			</div>
		);
	}
}
export default Experience;
