import React from 'react';

import Clock from '../components/Clock';

export default class AppIndex extends React.Component {
  render() {
    return (
      <div className="appIndex">
        <Clock />
        <h1>weather</h1>
        <h1>Quote</h1>
      </div>
    );
  }
}
