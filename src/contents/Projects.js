import React, { Component } from 'react';
import Project from './Project';
class Projects extends Component {
	state = {};
	render() {
		return (
			<div className="condiv">
				<div className="cont1" style={{ marginBottom: '2%' }}>
					<h1 className="typingeffect" style={{ color: '#e5e5e5' }}>
						What I’ve Built
					</h1>
				</div>
				<Project
					title=" Joint Encryption and Watermarking Scheme for Security of
 Medical Images and EPR data"
					tech="Python, Jupyter Notebook"
					site="https://github.com/malhotra700/Minor-Project-I-Joint-Encryption-and-Watermarking"
					description={[
						<span>
							Proposed and Implemented a Joint Encryption and Watermarking
							Scheme for Security of Medical Images and EPR data using{' '}
							<span style={{ color: '#86c232' }}>
								AES-CTR, DWT, Arnold Transform
							</span>{' '}
							and<span style={{ color: '#86c232' }}> PN Sequence</span>. The
							results show good performance in terms of imperceptibility
							<span style={{ color: '#86c232' }}>
								{' '}
								(max PSNR=76.12 dB, max SSIM=0.9999)
							</span>
							, robustness{' '}
							<span style={{ color: '#86c232' }}>
								(avg NC=0.86, avg BER=0.25){' '}
							</span>
							and security
							<span style={{ color: '#86c232' }}> (UACI=36.7%, NPCR=100%)</span>
							.
						</span>,
					]}
				/>
				<Project
					title="Cervical Cancer Diagnosis"
					tech="Python, Jupyter Notebook, UCI Dataset"
					site="https://github.com/malhotra700/Cervical-Cancer-Diagnosis"
					description={[
						<span>
							A supervised ML model to diagnose cervical cancer using{' '}
							<span style={{ color: '#86c232' }}>Random Forest Classifier</span>
							, with <span style={{ color: '#86c232' }}>SMOTE </span>
							oversampling for handling imbalanced data, standard scaler for
							normalization, <span style={{ color: '#86c232' }}>PCA/RFE </span>
							for feature reduction and{' '}
							<span style={{ color: '#86c232' }}>
								10-fold cross validation{' '}
							</span>
							for evaluation.{' '}
							<span style={{ color: '#86c232' }}>
								(Accuracies
								{'>'} 93%).
							</span>{' '}
							<br />
							<span style={{ color: '#86c232' }}>» </span>{' '}
							<span style={{ fontStyle: 'italic' }}>
								Based on the research paper (Digital Object Identifier
								10.1109/ACCESS.2018.2874063) by S. F. Abdoh, M. A. Rizka and F.
								A. Maghraby.
							</span>
						</span>,
					]}
				/>
				<Project
					title="Regular"
					tech="Java, XML, Android Studio, Firebase"
					site="https://github.com/malhotra700/Regular"
					description={[
						<span>
							A <span style={{ color: '#86c232' }}>low size (3.9MB) </span>
							productivity app designed during the{' '}
							<span style={{ color: '#86c232' }}>COVID-19 </span>times to manage
							to-do lists, reminders, checklists, calendar events, etc. along
							with voice guided breathing exercise, positive articles (updated
							daily) & progress tracking.
						</span>,
					]}
				/>
				<Project
					title="butter-green HN"
					tech="JavaScript, React, Redux, Firebase, VS Code"
					site="https://github.com/malhotra700/buttergreen"
					description={[
						<span>
							A Hacker News clone website in React based on the Hacker News API,
							with the additional feature to save your favourite stories after
							signing in.
						</span>,
					]}
				/>
				<Project
					title="DocTok"
					tech="Java, XML, Android Studio, Dialogflow, Firebase, SQL"
					site="https://github.com/malhotra700/DocTok"
					description={[
						<span>
							An app to write formatted prescriptions based on dictation from
							the doctor and mail to the patient directly with encryption.
							Separate portals for patient and doctor with{' '}
							<span style={{ color: '#86c232' }}>
								AI based Medical Assistant
							</span>{' '}
							and <span style={{ color: '#86c232' }}>Live Chat Facility.</span>
						</span>,
					]}
				/>
				<Project
					title="AmCoins"
					tech="Python, Solidity, Remix IDE, Postman, Ganache, Ethereum Wallet"
					description={[
						<span>
							A <span style={{ color: '#86c232' }}>blockchain </span>
							(Ethereum) based cryptocurrency and{' '}
							<span style={{ color: '#86c232' }}>smart contract</span>{' '}
							prototype.
						</span>,
					]}
				/>
				<br />
			</div>
		);
	}
}

export default Projects;
