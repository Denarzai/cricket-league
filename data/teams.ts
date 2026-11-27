import { Team } from "@/types";

// Mock data: the 10 IPL teams.
// Names, cities and grounds are real; logos are our own simple placeholders.
export const teams: Team[] = [
  {
    id: "mi",
    name: "Mumbai Indians",
    shortName: "MI",
    city: "Mumbai",
    captain: "Hardik Pandya",
    coach: "Mahela Jayawardene",
    founded: 2008,
    homeGround: "Wankhede Stadium",
    color: "#045093",
    logo: "/teams/mi.svg",
    description:
      "One of the most successful IPL sides, known for a deep batting line-up and Jasprit Bumrah's death bowling.",
  },
  {
    id: "csk",
    name: "Chennai Super Kings",
    shortName: "CSK",
    city: "Chennai",
    captain: "Ruturaj Gaikwad",
    coach: "Stephen Fleming",
    founded: 2008,
    homeGround: "MA Chidambaram Stadium",
    color: "#a77b06",
    logo: "/teams/csk.svg",
    description:
      "The 'Yellow Army' with a huge fan base, famous for calm finishes and the legend of MS Dhoni.",
  },
  {
    id: "rcb",
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    city: "Bengaluru",
    captain: "Rajat Patidar",
    coach: "Andy Flower",
    founded: 2008,
    homeGround: "M. Chinnaswamy Stadium",
    color: "#a50d20",
    logo: "/teams/rcb.svg",
    description:
      "Big-hitting side led by the batting of Virat Kohli, playing at the small and high-scoring Chinnaswamy.",
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    city: "Kolkata",
    captain: "Ajinkya Rahane",
    coach: "Abhishek Nayar",
    founded: 2008,
    homeGround: "Eden Gardens",
    color: "#3a225d",
    logo: "/teams/kkr.svg",
    description:
      "The purple and gold side from Eden Gardens, built around mystery spin from Narine and Varun.",
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    shortName: "DC",
    city: "Delhi",
    captain: "Axar Patel",
    coach: "Hemang Badani",
    founded: 2008,
    homeGround: "Arun Jaitley Stadium",
    color: "#17479e",
    logo: "/teams/dc.svg",
    description:
      "A balanced squad with KL Rahul at the top and Kuldeep Yadav's spin in the middle overs.",
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    shortName: "GT",
    city: "Ahmedabad",
    captain: "Shubman Gill",
    coach: "Ashish Nehra",
    founded: 2022,
    homeGround: "Narendra Modi Stadium",
    color: "#1b2133",
    logo: "/teams/gt.svg",
    description:
      "Plays at the world's biggest cricket stadium, with a strong top order of Gill, Sai Sudharsan and Buttler.",
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    shortName: "RR",
    city: "Jaipur",
    captain: "Riyan Parag",
    coach: "Kumar Sangakkara",
    founded: 2008,
    homeGround: "Sawai Mansingh Stadium",
    color: "#e4007c",
    logo: "/teams/rr.svg",
    description:
      "The pink side from Jaipur, known for backing young Indian talent like Yashasvi Jaiswal.",
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    city: "Hyderabad",
    captain: "Pat Cummins",
    coach: "Daniel Vettori",
    founded: 2013,
    homeGround: "Rajiv Gandhi International Stadium",
    color: "#e2571c",
    logo: "/teams/srh.svg",
    description:
      "The 'Orange Army' plays ultra-aggressive cricket, with Head and Abhishek Sharma opening the batting.",
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    shortName: "LSG",
    city: "Lucknow",
    captain: "Rishabh Pant",
    coach: "Justin Langer",
    founded: 2022,
    homeGround: "Ekana Cricket Stadium",
    color: "#0079b8",
    logo: "/teams/lsg.svg",
    description:
      "Led by Rishabh Pant, with the power of Nicholas Pooran and Mitchell Marsh in the batting order.",
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    shortName: "PBKS",
    city: "Mullanpur",
    captain: "Shreyas Iyer",
    coach: "Ricky Ponting",
    founded: 2008,
    homeGround: "Maharaja Yadavindra Singh Stadium",
    color: "#dd1f2d",
    logo: "/teams/pbks.svg",
    description:
      "Captained by Shreyas Iyer, with Arshdeep Singh and Yuzvendra Chahal leading the bowling.",
  },
];

// Find one team by its id. Returns undefined if the id does not exist.
export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id);
}
