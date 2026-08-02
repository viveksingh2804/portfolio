export const profile = {
  name: "Vivek Singh",
  role: "Java-focused Software Developer",
  summary:
    "B.Tech CSE student at Maharana Pratap Engineering College, Kanpur, preparing for campus placements at product-based companies.",
  education: {
    school: "Maharana Pratap Engineering College, Kanpur",
    degree: "B.Tech in Computer Science and Engineering",
    dates: "2023 - 2027",
    cgpa: "7.5",
  },
  contact: {
    email: "kgolu123g@gmail.com",
    phone: "+917565050226",
    github: "https://github.com/viveksingh2804/",
    linkedin: "https://www.linkedin.com/in/vivek-singh-a56189158",
    leetcode: "https://leetcode.com/u/kgolu2804g/",
    hackerrank: "https://www.hackerrank.com/profile/vivek_singh_2804",
  },
  resumePath: "/resume/Vivek_Singh.pdf",
};

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs", "Microservices"] },
  { group: "Frontend", items: ["React", "Material UI", "Tailwind CSS"] },
  { group: "AI & Vision", items: ["OpenCV", "DeepFace", "YOLOv8", "Computer Vision"] },
  { group: "Databases", items: ["PostgreSQL", "Neon", "MongoDB"] },
  { group: "Core CS", items: ["Data Structures", "Trie", "Problem Solving"] },
];

export const projects = [
  {
    title: "Facial Recognition Attendance System",
    short: "FRAS",
    description:
      "Attendance platform combining a Spring Boot backend, React + Material UI frontend, and Python computer-vision microservice with anti-spoofing and GPS verification.",
    stack: ["Spring Boot", "React", "Material UI", "Python", "OpenCV", "DeepFace", "PostgreSQL", "Neon"],
  },
  {
    title: "Real-time Object Detection System",
    description:
      "Computer-vision system built around YOLOv8 and OpenCV, with custom training pipelines for object detection workflows.",
    stack: ["YOLOv8", "OpenCV", "Python", "Model Training"],
  },
  {
    title: "Number/Prefix Management Microservices",
    description:
      "Spring Boot microservices using Trie data structures to manage number and prefix lookup operations efficiently.",
    stack: ["Spring Boot", "Java", "Trie", "Microservices"],
  },
  {
    title: "AI Screenshot Protection Model",
    description:
      "AI-focused model work for detecting or preventing screenshot-related misuse scenarios.",
    stack: ["AI", "Python", "Model Development"],
  },
  {
    title: "2D Physics Simulator",
    description:
      "Interactive simulator exploring two-dimensional motion and physics concepts through visual feedback.",
    stack: ["JavaScript", "Physics", "Simulation"],
  },
];

export const achievements = [
  { label: "LeetCode Problems", value: "322", detail: "Solved across data structures and algorithms" },
  { label: "LeetCode Rating", value: "1714", detail: "Contest rating" },
  { label: "HackerRank Java", value: "5-star", detail: "Java proficiency rating" },
];
