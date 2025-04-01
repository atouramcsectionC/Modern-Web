// client/src/components/Education.jsx
import React, { useEffect, useState } from 'react';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(response => response.json())
      .then(data => setEducation(data));
  }, []);

  return (
    <div className="section">
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <strong>{item.degree}</strong> - {item.school} ({item.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
