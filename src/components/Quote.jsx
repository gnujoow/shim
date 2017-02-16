import React from 'react';

export default class Quote extends React.Component {
  constructor() {
    super();

    this.state = ({
      text: '야롤로롤리오로이롤오옹',
      author: '김우정',
    });
  }

  render() {
    return (
      <div className="quote">
        <input />
        <h1>{this.state.text}</h1>
        <h2>{this.state.author}</h2>
      </div>
    );
  }
}
