import Layout from "../Layout";
import Project from "../Project";

const projects = [
  {
    screenshot: "employee.jpg",
    title: "Employee Directory",
    description: "View entire employee directory at once to have quick access to their information.",
    appLink: "https://carolineablynch.github.io/EmployeeDirectory/",
    repoLink: "https://github.com/carolineablynch/EmployeeDirectory"
  },
  {
    screenshot: "hungerBusters.png",
    title: "Hunger-Buster",
    description:
      "This app was created through the use of Javascript, jQuery, CSS, and two CSS frameworks, Materialize and UiKit.",
    appLink: "https://carolineablynch.github.io/Hunger-Buster/",
    repoLink: "https://github.com/carolineablynch/Hunger-Buster"
  },
  {
    screenshot: "workday.png",
    title: "Work-Day-Calendar",
    description: "Help employees and workers effectively view and manage the hours they work during a typical day.",
    appLink: "https://carolineablynch.github.io/Work-Day-Calender/",
    repoLink: "https://github.com/carolineablynch/Work-Day-Calender"
  },
  {
    screenshot: "password.png",
    title: "Password Generator",
    description: "Allows users to generate random passwords based on the inputs they contribute to the app.",
    appLink: "https://carolineablynch.github.io/PasswordGenerator/",
    repoLink: "https://github.com/carolineablynch/PasswordGenerator"
  },
  {
    screenshot: "quiz.jpg",
    title: "Coding Quiz",
    description: "Put your coding skills to the test!",
    appLink: "",
    repoLink: ""
  }
];

export default function Portfolio({ match }) {
  return (
    <Layout match={match}>
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project key={String(index)} {...project} />
      ))}
    </Layout>
  );
}