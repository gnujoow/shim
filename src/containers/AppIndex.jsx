import React from 'react';

import Clock from '../components/Clock';

export default function AppIndex() {
  return (
    <div className="appIndex">
      <div className="box">
        <Clock />
        <h1>weather</h1>
        <h1>Quote</h1>
      </div>
    </div>
  );
}
