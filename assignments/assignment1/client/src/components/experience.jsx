// client/src/components/Experience.jsx
import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then(response => response.json())
      .then(data => setExperience(data));
  }, []);

  return (
    <div className="section">
      <h2>Professional Experience</h2>
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <strong>{item.role}</strong> at {item.company} ({item.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
