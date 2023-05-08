// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  time = () => {
    const {minutes, seconds} = this.state
    const totalMinutes = Math.floor(seconds / 60)
    const totalSeconds = Math.floor(seconds % 60)
    const stringMinutes = totalMinutes > 9 ? totalMinutes : `0${totalMinutes}`
    const stringSeconds = totalSeconds > 9 ? totalSeconds : `0${totalSeconds}`
    return `${stringMinutes}:${stringSeconds}`
  }

  startStopWatch = () => {
    const {minutes, seconds} = this.state
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  stopStopWatch = () => {
    clearInterval(this.timerId)
  }

  resetStopWatch = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="card-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="time">{this.time()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button bg-color1"
                onClick={this.startStopWatch}
              >
                Start
              </button>
              <button
                type="button"
                className="button bg-color2"
                onClick={this.stopStopWatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="button bg-color3"
                onClick={this.resetStopWatch}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
