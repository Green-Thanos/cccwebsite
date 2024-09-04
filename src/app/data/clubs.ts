export interface Club {
  name: string;
  description: string;
  link: string;
  imageUrl?: string;
}

export const clubsData: Club[] = [
  {
    name: "Math Club",
    description: "Nerd club",
    link: "/clubs/robotics",
  },
  {
    name: "Physics Club",
    description: "Most fun club at school no lie",
    link: "https://discord.gg/R5Te97nhWK",
    imageUrl: "/physics.jpg",
  },
  {
    name: "Artificial Intelligence Club",
    description: "On goodness you\'ve never been enlightened until you\'ve joined this club",
    link: "https://groupme.com/join_group/103001220/PwO0OEUZ",
    imageUrl: "/ai.png",
  },
  {
    name: "Econ Club",
    description: "Learn econ and compete in competitions",
    link: "https://groupme.com/join_group/102959271/91ZkN81o",
    imageUrl: "/dinger.jpg",
  },
  {
    name: "Chess Club",
    description: "ryan wang",
    link: "/clubs/math-olympiad",
  },
];
