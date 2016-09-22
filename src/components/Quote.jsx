import React from 'react';

export default class Quote extends React.Component {
  constructor() {
    super();

    this.state = ({
      text: 'No yesterdays are ever wasted for those who give themselves to today.',
      author: 'Brendan Francis',
    });
  }

  render() {
    return (
      <div className="quote">
        <h1>{this.state.text}</h1>
        <h2>{this.state.author}</h2>
      </div>
    );
  }
}
