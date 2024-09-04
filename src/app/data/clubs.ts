// clubsData.ts

export interface Club {
  name: string;
  description: string;
  link: string;
}

export const clubsData: Club[] = [
  {
    name: "Robotics Club",
    description: "Build and program robots for competitions",
    link: "/clubs/robotics",
  },
  {
    name: "Debate Team",
    description: "Develop critical thinking and public speaking skills",
    link: "/clubs/debate",
  },
  {
    name: "Environmental Club",
    description: "Work on sustainability projects and raise awareness",
    link: "/clubs/environmental",
  },
  {
    name: "Art Club",
    description: "Express creativity through various mediums",
    link: "/clubs/art",
  },
  {
    name: "Math Olympiad",
    description: "Solve challenging math problems and compete",
    link: "/clubs/math-olympiad",
  },
  {
    name: "Model UN",
    description: "Simulate United Nations committees and debates",
    link: "/clubs/model-un",
  },
];
