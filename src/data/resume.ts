import { wcc, utest, letter_f } from "@/assets/images";

export const resume = [
  {
    company: "WhiteCity Code",
    title: "Frontend developer",
    logo: wcc,
    start: "2023",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
    description:
      "I have developed multiple static websites using Astro and Deno Fresh, delivering results with quick turnaround times while closely following Figma designs. I also took the initiative to enhance UI/UX wherever necessary, ensuring a smoother user experience. Along the way, I’ve continuously refined my frontend expertise, while expanding my backend knowledge to improve overall development efficiency",
  },
  {
    company: "Freelance",
    title: "Software developer",
    logo: letter_f,
    start: "2023",
    end: "2023",
    description:
      "I’ve successfully completed a range of freelance projects, showcasing my ability to work independently, meet deadlines, and deliver high-quality web solutions. My focus is on crafting intuitive, visually appealing user interfaces that provide seamless user experiences, ensuring client satisfaction. I excel at analyzing complex requirements and translating them into practical, efficient frontend solutions, overcoming technical challenges to achieve the best possible results.",
  },
  {
    company: "uTest",
    title: "Software tester",
    logo: utest,
    start: "2022",
    end: "2023",
    description:
      "I've been proficient in creating comprehensive test plans, test cases, and test scripts to ensure thorough test coverage and meticulous bug reporting. I've conducted various types of testing, including functional, regression, performance, and usability, with a keen eye for detail, identifying and documenting defects to enhance software quality and user experience. I've also used bug tracking tools like Jira to prioritize, document, and track defects, facilitating effective communication and resolution.",
  },
];
