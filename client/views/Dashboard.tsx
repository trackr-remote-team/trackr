import React from 'react';
import NewInterview from './GUI/NewInterview';
import Visualizer from './GUI/Visualizer';

export default function Dashboard() {
  return (
    <>
      <h3>Test Dashboard</h3>
      <div>
        <NewInterview />
      </div>
      <div>
        <Visualizer />
      </div>
    </>
  )
}