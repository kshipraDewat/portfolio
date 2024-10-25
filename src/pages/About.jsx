import kshipraimg from "../assets/kshi/k.jpg"
import linkedInIcon from "../assets/logoSVGs/linkedin-square-icon.svg";
import gitHubIcon from "../assets/logoSVGs/github-icon.svg";

import mailIcon from "../assets/logoSVGs/mail.svg";


const About = () => {
  return (
    <div
      id="about"
      className=" h-fit bg-white px-28 py-20 max-sm:px-6 max-sm:py-16"
    >
      <div className=" flex gap-20 max-sm:flex-col max-sm:gap-12">
        <div className="w-[35%] flex-auto max-sm:w-full">
          <div className=" h-[450px] overflow-hidden max-sm:h-[380px] ">
            <img
              src={kshipraimg}
              loading="lazy"
              alt="image"
              className="relative top-8 h-full w-full scale-[1.15] object-cover"
            />
          </div>
        </div>
        <div className="relative w-[65%] flex-auto max-sm:w-full">
          <div className=" pt-10 text-base max-sm:pt-0 max-sm:text-sm ">
            <p className="mb-14 text-justify  max-sm:text-left">
              {`I'm Kshipra Dewat, a dedicated front-end developer with a Bachelor’s degree in Computer Science and Engineering. I’m passionate about coding and thrive on the challenges and creativity involved in technology. Specializing in React.js, I focus on building seamless, responsive user interfaces that enhance user experience and functionality. My problem-solving mindset enables me to break down complex challenges, delivering efficient, clean code tailored to project needs.`}
              <br />
              <br />{" "}
              {`If you’re looking for a frontend developer, devoted
              to creating seamless user interfaces, knack for breaking down
              complex problems, feel free to connect! Forward is the only way.`}
            </p>
            <div className="absolute bottom-4 right-0 flex  items-center justify-end gap-10 max-sm:static max-sm:gap-6">
              <p className=" ">Connect Here -</p>

              <a
                href="https://www.linkedin.com/in/kshipra-dewat-8bb736289/"
                target={`_blank`}
              >
                <img
                  src={linkedInIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
              <a href="mailto:kshipradewat66@gmail.com" target={`_blank`}>
              <img
                  src={mailIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
              <a href="https://github.com/kshipraDewat" target={`_blank`}>
                <img
                  src={gitHubIcon}
                  alt=""
                  className="h-[24px] w-[24px] max-sm:h-[20px] max-sm:w-[20px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
