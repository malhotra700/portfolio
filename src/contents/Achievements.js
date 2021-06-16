import React, { Component } from 'react';

class Achievements extends Component {
	state = {};
	render() {
		return (
			<div className="condiv">
				<div className="cont1" style={{ marginBottom: '2%' }}>
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						What I’ve Achieved
					</h1>
				</div>
				<div className="cont5">
					<div>
						HackerRank
						<a href={'http://www.hackerrank.com/malhotra700'} target="_blank">
							<i className="external alternate icon small"></i>
						</a>
						<p>
							Global Rank - 463
							<br />
							Problem Solving - ★★★★★★
							<br />
							Python, SQL - ★★★★★
						</p>
					</div>
					<div>
						LeetCode
						<a href={'https://leetcode.com/anantmal009/'} target="_blank">
							<i className="external alternate icon small"></i>
						</a>
						<p>
							Global Rank - 3596
							<br />
							Problems Solved {'>'} 900
							<br />
							★★★★
						</p>
					</div>

					<div>
						SPOJ
						<a href={'https://www.spoj.com/users/malhotra700/'} target="_blank">
							<i className="external alternate icon small"></i>
						</a>
						<p>
							Global Rank - 2621
							<br />
							Problems Solved {'>'} 100
						</p>
					</div>
					<div>
						Codechef
						<a
							href={'https://www.codechef.com/users/gibberish_a'}
							target="_blank"
						>
							<i className="external alternate icon small"></i>
						</a>
						<p>
							Rating - 1852
							<br />
							★★★★
						</p>
					</div>
				</div>
				<div className="cont4">
					<p>
						<span style={{ color: '#86c232' }}>» </span>Secured{' '}
						<span style={{ color: '#86c232' }}>
							Global Rank 51 out of more than 25K{' '}
						</span>
						participants in Codechef September Long Challenge [2020].
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» </span>Secured{' '}
						<span style={{ color: '#86c232' }}>
							2nd position out of 42 teams{' '}
						</span>
						in HACKNITP 2.0 [2020], the 36hr long hackathon.
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» </span>Certificate of
						Achievement for qualifying{' '}
						<span style={{ color: '#86c232' }}>Java Level 1</span> and{' '}
						<span style={{ color: '#86c232' }}>Java Level 2</span> by Cambridge
						Certification Authority [2019].
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» Zonal Winner</span> of Internet
						of Things (IOT) With Raspberry Pi workshop conducted by TechieNest
						Pvt. Ltd. in association with Aavriti, IIT Bombay [2018] and also{' '}
						<span style={{ color: '#86c232' }}>
							selected for the Finale of All India Research Championship.
						</span>
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» </span>Certificate of Merit for
						the consecutive years 2015-2016 and 2016-2017 at Delhi Public School
						Ghaziabad.
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» </span>Silver Zone Foundation
						International Informatics Olympiad 2015
						<br />{' '}
						<span style={{ color: '#86c232' }}>&emsp;&emsp;1st Round - </span>
						2nd state rank and 55th Olympiad Rank{' '}
						<span style={{ color: '#86c232' }}>(Gold medal).</span>
						<br />{' '}
						<span style={{ color: '#86c232' }}>&emsp;&emsp;2nd Round - </span>
						11th state rank and 104th Olympiad Rank{' '}
						<span style={{ color: '#86c232' }}>(Silver medal).</span>
					</p>
					<p>
						<span style={{ color: '#86c232' }}>» </span>Certificate of Merit
						awarded by the Sub-Divisional Magistrate, Modinagar (Ghaziabad) for
						securing <span style={{ color: '#86c232' }}>1st rank </span> in the
						city, with <span style={{ color: '#86c232' }}>95.2%</span> in the
						Matriculation Examination 2015.
					</p>
					<br />
				</div>
			</div>
		);
	}
}

export default Achievements;
