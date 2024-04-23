import CourseSection from "../CoursesHero/CourseHeroSec";


const sectionData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    text: "Embark on our immersive journey to master both frontend and backend technologies. Dive into real-world projects to become a well-rounded developer.",
    headline1: "Graduate in six months, part-time, and start working in the high-demand field of software development.",
    headline2: "Meet regularly with an experienced mentor to ask the questions you care about.",
    headline3: "Build your coding skills and launch your software engineering career",
    button1: "Register for Offline",
    button2: "Register for Online",
    img: "/images/front-end-hero.png", 
  },
];

const FullStackHero = () => {
  return (
    <section className="course" id="course">
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

export default FullStackHero;