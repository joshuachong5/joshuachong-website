export const profile = {
  name: "Joshua Chong",
  tagline: "Computer Science @ Carnegie Mellon",
  school: "Carnegie Mellon University, School of Computer Science",
  degree: "B.S. Computer Science, Concentration in Machine Learning",
  graduation: "May 2028",
  location: "New York City",
  interests: [
    "Software Engineering",
    "Machine Learning",
    "Robotics",
    "Autonomous Systems",
  ],
  hobbies: ["Badminton", "Chess"],
};

export const socialLinks = {
  resume: "/Joshua%20Chong%20Resume%202026.docx.pdf",
  github: "https://github.com/joshuachong5",
  linkedin: "http://www.linkedin.com/in/jec5",
  email: "mailto:joshchong5@gmail.com",
};

export const experienceEntries = [
  {
    title: "Path Planning Captain",
    company: "CMU Racing",
    period: "Sep 2025 - Present",
    summary:
      "Guiding the path planning group on CMU Racing's driverless stack, where planning, localization, and simulation work have to come together under race-day constraints.",
    details: [
      "Path planning",
      "Localization",
      "SLAM",
      "Trajectory optimization",
      "ROS2",
      "C++",
      "Python",
      "GTSAM",
    ],
    highlight:
      "Part of CMU Racing's Formula SAE Electric Michigan 2026 finish: 2nd in Driverless and 4th overall among 100+ teams.",
    items: [
      "Built a B-spline planner around minimum-curvature paths, cutting simulated lap time by 17% in CarMaker runs.",
      "Designed localization logic that blends wheel odometry with cone observations through an Extended Kalman Filter.",
      "Prototyped graph-based SLAM in ROS 2 with GTSAM/iSAM2, including association checks, loop-closure handling, and offline review tools.",
      "Helped coordinate planning work inside a 150-person engineering team through design notes, reviews, issue tracking, and sprint planning.",
    ],
    href: "/cmu-racing",
  },
  {
    title: "Lead Programmer",
    company: "VEX Robotics Team",
    period: "Jun 2020 - Apr 2025",
    summary:
      "Owned much of the robot autonomy code across several VEX seasons, tuning path following and control behavior as the game and hardware changed.",
    details: ["C++", "PID control", "Odometry", "Adaptive Pure Pursuit"],
    highlight:
      "Competed at VEX Worlds in 2022, 2024, and 2025, with a global top-1% ranking and repeated state qualifications.",
    items: [],
    href: "/experience",
  },
  {
    title: "Researcher and Co-Author",
    company: "Metavethics Institute",
    period: "May 2024 - Feb 2025",
    summary:
      "Studied how immersive workplaces can be made safer and more inclusive, turning a broad literature review into conference-ready research.",
    details: ["Research", "VR/AR", "Ethics", "Safety"],
    highlight:
      "Co-authored work accepted to IHSI 2025 on ethical and safety questions in VR/AR work environments.",
    items: [
      "Synthesized findings from 300+ papers to surface recurring risks around access, safety, and workplace design.",
    ],
    href: "/experience",
  },
];

export const featureProjects = [
  {
    title: "CMU Racing",
    type: "Autonomous systems",
    description:
      "Planning software for a driverless race car, turning cone maps and vehicle state estimates into smooth trajectories the car can actually follow.",
    tags: ["ROS2", "C++", "Python", "GTSAM", "SLAM", "Optimization"],
    href: "/cmu-racing",
  },
  {
    title: "Chess Engine",
    type: "Ongoing engineering project",
    description:
      "A C++20 engine with legal move generation, UCI support, alpha-beta search, iterative deepening, quiescence search, transposition tables, and an SFML interface. It currently plays around 1850 Elo, with 2000+ as the next target.",
    tags: ["C++", "Alpha-beta", "SFML", "Search", "Evaluation"],
    href: "/projects",
  },
];

export const technicalStack = {
  languages: ["C++", "C", "Python", "Java", "SML"],
  frameworks: ["Linux", "ROS 2", "Docker", "CarMaker", "Git", "LaTeX"],
  libraries: ["GTSAM"],
};

export const mathAccomplishments = [
  "3× AIME qualifier",
  "AMC 10 Distinction",
  "NYC Math Team",
  "ARML/NYSML participation",
];
