import React from 'react';

import Clock from '../components/Clock';
import Quote from '../components/Quote';

export default function AppIndex() {
  return (
    <div className="appIndex">
      <div className="box">
        <Clock />
        <Quote />
        <h1>weather</h1>
      </div>
    </div>
  );
}
