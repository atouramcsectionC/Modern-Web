const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

// Sample Resume Data
const resumeData = {
  overview: {
    name: "Atoura Moise Clarke",
    summary: "An experienced software developer passionate about building scalable applications.",
  },
  education: [
    { degree: "BSc Computer Science", school: "Humber College", year: "2021" },
    { degree: "MSc Software Engineering", school: "Tech University", year: "2023" },
  ],
  experience: [
    { role: "Software Developer", company: "XYZ Ltd", duration: "2021 - Present" },
    { role: "Intern", company: "Tech Solutions", duration: "2020 - 2021" },
  ],
  skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "CSS", "Bootstrap"],
  certifications: [
    { title: "Certified React Developer", issuer: "React Institute", year: "2022" },
    { title: "Full Stack Web Development", issuer: "Udemy", year: "2021" },
  ],
};

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Portfolio API. Use /overview, /education, /experience, /skills, or /certifications." });
});

app.get("/overview", (req, res) => {
  res.json(resumeData.overview);
});

app.get("/education", (req, res) => {
  res.json(resumeData.education);
});

app.get("/experience", (req, res) => {
  res.json(resumeData.experience);
});

app.get("/skills", (req, res) => {
  res.json(resumeData.skills);
});

app.get("/certifications", (req, res) => {
  res.json(resumeData.certifications);
});

// Error Handling
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
