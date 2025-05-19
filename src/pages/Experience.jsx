import Accordion from "../components/Accordion";

const Experience = () => {
  return (
    <div className="h-fit w-full bg-[#131417] px-28 py-10 text-white max-sm:px-8">
      <h1 className="my-10 text-4xl font-normal max-sm:text-2xl">
        My Experience
      </h1>
      {/* accordion box */}
      <div className="px-24 max-sm:px-0">
        <div className="w-full p-4 m-auto max-sm:p-0">
        <Accordion
            id="1"
            title="Achilles Enterprise Pvt. Ltd."
            type="Freelance"
            duration="Jan, 205 - May, 2025"
            answer={[
              "Role - Frontend Developer",
              "Developed a frontend of web application tailored to the client’s requirements, focusing on modern design and seamless user interactions.",
              "Leveraged modern frameworks and libraries to streamline development and maintain clean, scalable code.",
              "Engineered a responsive frontend with dynamic UI components to ensure optimal performance across devices and browsers."
            ]}
          />
        <Accordion
            id="2"
            title="Urban Biotix"
            type="Fulltime"
            duration="Jul, 2024 - Dec, 2024"
            answer={[
              "Role - Software Developer",
              "Ensured cross-device compatibility by developing responsive layouts using HTML, CSS, and JavaScript frameworks.",
              "Designed and implemented user-friendly, visually appealing web interfaces to improve user engagement and accessibility."
             
            ]}
          />
          <Accordion
            id="3"
            title="Element coders"
            type="Internship "
            duration="May, 2023 - Jul, 2023"
            answer={[
              "Role - React Developer",
               "Built and optimized responsive user interfaces using React, enhancing user experience across multiple devices.",
              " Implemented RESTful API integrations to dynamically fetch and display data, improving application interactivity and performance."
            ]}
          />
          <Accordion
            id="4"
            title="Urban Biotix"
            type="Internship"
            duration="May, 2022 - Aug, 2022"
            answer={[
              "Role - Frontend Developer",
              "Ensured cross-device compatibility by developing responsive layouts using HTML, CSS, and JavaScript frameworks.",
              "Designed and implemented user-friendly, visually appealing web interfaces to improve user engagement and accessibility."
             
            ]}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
