import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    let crnt = new Date();
    this.state = {
      hour: crnt.getHours(),
      min : crnt.getMinutes(),
      sec : crnt.getSeconds()
    };
  }

  tick() {
    let crnt = new Date();
    this.setState({
       hour: crnt.getHours(),
       min : crnt.getMinutes(),
       sec : crnt.getSeconds()
     });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>{this.state.hour}:{this.state.min}:{this.state.sec}</h1>
      </div>
    );
  }
}
