// client/src/components/Overview.jsx
import React, { useEffect, useState } from 'react';

const Overview = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(response => response.json())
      .then(data => setOverview(data));
  }, []);

  return (
    <div className="section">
      <h2>Overview</h2>
      <p><strong>{overview.name}</strong></p>
      <p>{overview.summary}</p>
    </div>
  );
};

export default Overview;
