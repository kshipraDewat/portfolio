import Accordion from "../components/Accordion";

const Experience = () => {
  return (
    <div className="h-fit w-full bg-[#131417] px-28 py-10 text-white max-sm:px-8">
      <h1 className="my-10 text-4xl font-normal max-sm:text-2xl">
        My Experience
      </h1>
      {/* accordion box */}
      <div className="px-24  max-sm:px-0">
        <div className="m-auto w-full  p-4 max-sm:p-0">
          <Accordion
            id="1"
            title="Element coders"
            role="React developer "
            duration="May, 2023 - Jul, 2023"
            answer={[
              "lorem34"
            ]}
          />
          <Accordion
            id="2"
            title="Urban Biotix"
            role="Web developer"
            duration="May, 2022 - Aug, 2022"
            answer={[
              "jdfnosjdov"
            ]}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Experience;