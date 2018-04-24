import React, { Component } from 'react';
import './Startpage.css';
import ToggleDisplay from 'react-toggle-display';
import Timer from './Timer';

class Startpage extends Component {
	constructor(props){
		super(props)
		this.showTimer = this.showTimer.bind(this);
		this.back = this.back.bind(this);
		this.state = {
			showTimer: false
		}
	}

	showTimer(){
		//console.log(this.state.showTimer);
		//toggle visibility of timer
		this.setState({
			showTimer: true
		});
		//console.log(this.state.showTimer);
	}

	back(){
		this.setState({
			showTimer: false
		});
	}

	render(){
		return (
			<div className="Start">
			
				<ToggleDisplay if={!this.state.showTimer} tag="section">
				<button id="startButton" className="btn" onClick={this.showTimer}>Get started</button>
		        </ToggleDisplay>
		 
		        <ToggleDisplay if={this.state.showTimer} tag="section">
		        <button id="backButton" className="btn" onClick={this.back}>Back to start</button><br/><br/>
		          <Timer />
		        </ToggleDisplay>
	
			</div>
		);
	}
}

export default Startpage;