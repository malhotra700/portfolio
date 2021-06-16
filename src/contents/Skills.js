import React, { Component } from 'react';
import Widecard from './Widecard';
import Project from './Project';
import python from '../images/python.png';
import java from '../images/java.png';
import javascript from '../images/javascript.png';
import c from '../images/c.png';
import cpp from '../images/cpp.png';
import html from '../images/html.png';
import css from '../images/css3.png';
import xml from '../images/xml.png';
import solidity from '../images/solidity.png';
import sql from '../images/sql.png';
import firebase from '../images/firebase.png';
import android from '../images/android.png';
import react from '../images/react.png';
import jupyter from '../images/jupyter.png';
import vscode from '../images/vscode.png';
import postman from '../images/postman.png';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myskills: ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'FIREBASE', 'MIT APP'],
		};
	}
	render() {
		return (
			<div className="condiv">
				<div className="cont1" style={{ marginBottom: '2%' }}>
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						Languages I Speak
					</h1>
				</div>
				<div className="cont3">
					<img src={python} width="12%" height="auto"></img>
					<img src={java} width="12%" height="auto"></img>
					<img src={xml} width="12%" height="auto"></img>
					<img src={javascript} width="12%" height="auto"></img>
					<img src={html} width="12%" height="auto"></img>
					<img src={css} width="12%" height="auto"></img>
					<img src={c} width="12%" height="auto"></img>
					<img src={cpp} width="12%" height="auto"></img>
					<img src={solidity} width="12%" height="auto"></img>
					<img src={sql} width="12%" height="auto"></img>
				</div>

				<div className="cont1" style={{ marginBottom: '2%' }}>
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						Tools I Use
					</h1>
				</div>
				<div className="cont3" style={{ marginBottom: '8%' }}>
					<img src={firebase} width="12%" height="auto"></img>
					<img src={android} width="12%" height="auto"></img>
					<img src={react} width="12%" height="auto"></img>
					<img src={jupyter} width="12%" height="auto"></img>
					<img src={vscode} width="12%" height="auto"></img>
					<img src={postman} width="12%" height="auto"></img>
				</div>
				<div className="cont1">
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						Courses I’ve Attended
					</h1>
				</div>
				<Project
					title="Blockchain A-Z Course by SuperDataScience Team"
					tech={[
						<span>
							Udemy <span style={{ color: '#61892f' }}>[2020]</span>
						</span>,
					]}
				/>
				<Project
					title=" The Complete Android N Developer Course by Rob Percival "
					tech={[
						<span>
							Udemy <span style={{ color: '#61892f' }}>[2019]</span>
						</span>,
					]}
				/>
				<Project
					title="Machine Learning with Python Workshop"
					tech={[
						<span>
							TechieNest Pvt. Ltd.{' '}
							<span style={{ color: '#61892f' }}>[2019]</span>
						</span>,
					]}
				/>
				<Project
					title="Ethical Hacking and Information Security Workshop"
					tech={[
						<span>
							CyberCure Technologies{' '}
							<span style={{ color: '#61892f' }}>[2019]</span>
						</span>,
					]}
				/>
				<Project
					title="Internet of Things (IOT) With Raspberry Pi Workshop"
					tech={[
						<span>
							TechieNest Pvt. Ltd.{' '}
							<span style={{ color: '#61892f' }}>[2018]</span>
						</span>,
					]}
				/>
				<br />
			</div>
		);
	}
}
export default Skills;
