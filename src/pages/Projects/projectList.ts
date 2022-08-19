import playlistatsImg from '../../assets/playlistats.png';
import siteImg from '../../assets/site.png';
import shameImg from '../../assets/shamebot.png';
import samImg from '../../assets/sam.png';
import logicImg from '../../assets/admin.png';
import gameCentreImg from '../../assets/gc.png';

const projects = [
  {
    name: "playlistats",
    description: "Playlistats is a web app that allows users to view statistics for their playlists and recently played songs. Charts include key composition, genre breakdown, and a custom scatterplot to view the correlation between attributes such as danceability, tempo, and valence.",
    image: playlistatsImg,
    link: "https://leesgrey.github.io/playlistats/#",
    code: "https://github.com/leesgrey/playlistats",
    tools: ["JavaScript", "TypeScript", "React", "Spotify API", "Chart.js", "styled-components"]
  },
  {
    name: "shamebot",
    description: "Shamebot is a Discord bot that displays either a specified user or an entire channel's game and music activity. Defaults to being mean for lighthearted fun, but can be made to be nice.",
    image: shameImg,
    code: "https://github.com/leesgrey/shamebot",
    tools: ["Python", "Discord API"]
  },
  {
    name: "personal site",
    image: siteImg,
    description: "You are here! My personal site which started as an experiment with vanilla JS and CSS effects which later migrated to React. Designed with my love of mountain ranges and the night sky in mind.",
    link: "https://leesgrey.github.io/",
    code: "https://github.com/leesgrey/leesgrey.github.io",
    tools: ["JavaScript", "TypeScript", "React", "styled-components"]
  },
  {
    name: "Study Abroad Matching (SAM)",
    description: "SAM is an automated interface to match students with their preferred foreign-exchange programs. Given input parameters such as GPA, language certifications, and order of preference, SAM generates lists of students for each program based on a greedy algorithm. Created as a group for CSC301- Introduction to Software Engineering",
    tools: ["JavaScript", "React", "Python", "Django", "Google Cloud Platform", "Adobe XD"],
    code: "https://github.com/csc301-fall-2019/team-project-sam",
    image: samImg
  },
  {
    name: "Logic 2020",
    description: "Logic 2020 is a web implementation of Logic 2010, a digital workbook used to practice logic questions. The student and teacher interfaces allow users to receive immediate feedback for questions and view assignment completion.",
    tools: ["JavaScript", "Express", "MongoDB", "Mongoose"],
    link: "https://floating-oasis-22901.herokuapp.com/",
    code: "https://github.com/leesgrey/Logic2020",
    image: logicImg
  },
  {
    name: "GameCentre",
    description: "GameCentre is an Android game app that features three different games: Sliding Tiles, Matching, and Mastermind. Each game includes independent leaderboards and save states, and development focused on using design patterns.",
    image: gameCentreImg,
    code: "https://github.com/leesgrey/GameCentre",
    tools: ["Java", "Android Studio"]
  }
];

export default projects;