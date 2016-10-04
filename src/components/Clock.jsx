import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    const crnt = new Date();
    this.state = {
      hour: this.getVal(crnt.getHours()),
      min: this.getVal(crnt.getMinutes()),
      sec: this.getVal(crnt.getSeconds()),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getVal(val) { // eslint-disable-line class-methods-use-this
    if (val < 10) {
      return `0${val}`;
    }
    return val;
  }

  tick() {
    const crnt = new Date();
    this.setState({
      hour: this.getVal(crnt.getHours()),
      min: this.getVal(crnt.getMinutes()),
      sec: this.getVal(crnt.getSeconds()),
    });
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.hour}:{this.state.min}:{this.state.sec}</h1>
      </div>
    );
  }
}
