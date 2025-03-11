import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_BASE_URL = "http://localhost:8000";

const Portfolio = () => {
  const [overview, setOverview] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/overview`).then(res => res.json()).then(data => setOverview(data));
    fetch(`${API_BASE_URL}/education`).then(res => res.json()).then(data => setEducation(data));
    fetch(`${API_BASE_URL}/experience`).then(res => res.json()).then(data => setExperience(data));
    fetch(`${API_BASE_URL}/skills`).then(res => res.json()).then(data => setSkills(data));
    fetch(`${API_BASE_URL}/certifications`).then(res => res.json()).then(data => setCertifications(data));
  }, []);

  return (
    <Container className="py-5 " style={{ maxWidth: "900px" }}>
      {overview && (
        <Card className="mb-4 text-center shadow-sm border-0" style={{ background: "#00bcd4", color: "white" }}>
          <Card.Body>
            <h2>{overview.name}</h2>
            <p>{overview.summary}</p>
          </Card.Body>
        </Card>
      )}

      <Section title="Education" items={education} renderItem={(item) => (
        <p><strong>{item.degree}</strong> - {item.school} ({item.year})</p>
      )} />

      <Section title="Experience" items={experience} renderItem={(item) => (
        <p><strong>{item.role}</strong> - {item.company} ({item.duration})</p>
      )} />

      <Section title="Skills" items={skills} renderItem={(item) => <span className="badge bg-info me-2">{item}</span>} />

      <Section title="Certifications" items={certifications} renderItem={(item) => (
        <p><strong>{item.title}</strong> - {item.issuer} ({item.year})</p>
      )} />
    </Container>
  );
};

const Section = ({ title, items, renderItem }) => (
  <Card className="mb-4 shadow-sm border-0">
    <Card.Body>
      <h4 className="text-primary">{title}</h4>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </Card.Body>
  </Card>
);

export default Portfolio;
