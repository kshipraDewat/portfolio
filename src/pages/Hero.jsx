import projectIcon from "../assets/logoSVGs/programmer-computer-icon.svg";
import { IoMdDownload } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import pdf from '../assets/resume/resume.pdf';


const Hero = () => {
  
  return (
    <div className="relative flex h-screen flex-col items-center  bg-white   pt-48 text-center  max-sm:pt-32 ">
      <h1 className="px-48 font-inter text-4xl font-bold uppercase leading-[3rem] max-sm:px-6 max-sm:text-2xl ">
        Hello, I am KSHIPRA. I am a{" "}
        <span className="bg-black px-4 text-white max-sm:px-3">
          Frontend Developer
        </span>{" "}
        I enjoy building sites & apps. Primarily
        focused on{" "}
        <span className="bg-black px-4 text-white max-sm:px-3">React.js</span>
      </h1>
      <p className="px-52  pt-4 font-inter text-lg max-sm:px-12 max-sm:text-sm ">
      Graduated from GWEC Ajmer, I focused more on my coding skills to establish a good career in React web development & further.
      </p>
      <div className="z-20 flex gap-10 pt-10 max-sm:flex-col max-sm:gap-6 max-sm:text-sm ">
        <HashLink to={"/#work"} smooth className="">
          <button className="relative -left-1 -top-1 flex w-[200px] items-center justify-center gap-3  border  border-black bg-white p-2 px-3 py-2 font-inter  text-black transition-all before:absolute before:left-1 before:top-1 before:-z-10 before:h-full before:w-full before:border before:border-black before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0 active:bg-gray-300    max-sm:w-[180px] ">
            <div className="h-[20px] w-[20px]  max-sm:h-[16px] max-sm:w-[16px]">
              <img src={projectIcon} className="h-full w-full" alt="" />{" "}
            </div>
            <div>View Projects </div>
          </button>
        </HashLink>

        <a  href={pdf} download>
          <button className="relative -left-1 -top-1 flex w-[200px] items-center justify-center gap-3     border    border-black bg-white p-2 px-3 py-2 font-inter  text-black transition-all before:absolute before:left-1 before:top-1 before:-z-10 before:h-full before:w-full before:border before:border-black before:transition-all before:content-[''] hover:left-0 hover:top-0 before:hover:left-0 before:hover:top-0 active:bg-gray-300  max-sm:w-[180px]">
            <div className=" ">
              <IoMdDownload/>
            </div>
            <div>Download Resume</div>
          </button>
        </a>
      </div>
      <div className="sm: absolute bottom-24 mt-32 max-sm:bottom-36 max-sm:mt-28">
        <div className="w-[50px] animate-bounce max-sm:w-[36px]">
          <FaChevronDown/>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
