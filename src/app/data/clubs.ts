export interface Club {
  name: string;
  description: string;
  link: string;
}

export const clubsData: Club[] = [
  {
    name: "Math Club",
    description: "Seeded data + descriptions",
    link: "/clubs/robotics",
  },
  {
    name: "Physics Club",
    description: "Develop critical thinking and public speaking skills",
    link: "/clubs/debate",
  },
  {
    name: "Artificial Intelligence Club",
    description: "Work on sustainability projects and raise awareness",
    link: "https://groupme.com/join_group/103001220/PwO0OEUZ",
  },
  {
    name: "Econ Club",
    description: "Express creativity through various mediums",
    link: "/clubs/art",
  },
  {
    name: "Chess Club",
    description: "Solve challenging math problems and compete",
    link: "/clubs/math-olympiad",
  },
  {
    name: "Hack Club",
    description: "Simulate United Nations committees and debates",
    link: "/clubs/model-un",
  },
];
