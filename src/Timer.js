import React, { Component } from 'react';
import './Timer.css';
import ToggleDisplay from 'react-toggle-display';
let pauseButtonPressed = false;
let resetted = false;

class Timer extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			// 1500 sekunder = 25 min
			timeLeft: 1500,
			time: new Date(),
			paused: false
		}
	}

	componentDidMount() {
		setInterval(this.update, 1000)
		// den tickar varje sekund
		this.interval = setInterval(this.tick, 1000);
	}

	tick(){
		console.log(this.state.paused); //faLSE.  efter knapp true
		console.log(pauseButtonPressed) //true 					false
		if(pauseButtonPressed === false){	
   			console.log("not paused")
   			console.log(this.state.paused)
   		}
		console.log("tick")
		console.log(this.state.paused); //false         true
		this.setState({
			timeLeft: this.state.timeLeft - 1
		});
		if (this.state.timeLeft <= 0) {
      		clearInterval(this.interval);
   		}
   		if(pauseButtonPressed === true){
   			clearInterval(this.interval);
   			this.setState({
   				paused: true
   			});
   		}

	}

	pause(){
		pauseButtonPressed = true;
		console.log("paused")
		//this.tick();
	}

	componentWillUnmount(){
		console.log("unmounted")
		clearInterval(this.interval);
	}

	reset(){
   		this.setState({
   				timeLeft: 1500
   			});
	}

	resume(){
		console.log("resumed")
		// resume timer
		pauseButtonPressed = false
		this.setState({
			paused: false
		});
		console.log(this.state.paused);
		this.tick();
	}
	
	update = () => {
		this.setState({
			time: new Date()
		})
	};

	render(){
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()

		const minutes = parseInt(this.state.timeLeft / 60);
		const seconds = this.state.timeLeft % 60;

		//const m = this.state.timeLeft % 60;

		return (
			<div className="Timer"><br/>
				<h1>The time right now is {h % 24}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} </h1>
				<h1>Time left of current study session:</h1>
				<h1 id="time">{minutes}:{seconds}</h1>
				<ToggleDisplay if={!this.state.paused} tag="section">
					<button id="pomo" className="btn" onClick={this.pause}>Pause Timer</button><button id="reset" className="btn" onClick={this.reset}>Reset timer</button>
				</ToggleDisplay>
				<ToggleDisplay if={this.state.paused} tag="section">
					<button id="pomo" className="btn" onClick={this.resume}>Resume Timer</button><button id="reset" className="btn" onClick={this.reset}>Reset timer</button>
				</ToggleDisplay>
			</div>
		);
	}
}

export default Timer;