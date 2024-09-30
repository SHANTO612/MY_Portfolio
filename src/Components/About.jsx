import React from "react";
import AboutImg from "../assets/png-transparent-man-adult-businessman-laptop-working-desk-thumbs-up-male-person-young-thumbnail.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal ">
                  {/* Frontend developer */}
                  Skills
                </h1>
                {/* <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
                </p> */}
                <ul>
                  <li>proficient in python</li>
                  <li>proficient in Data Structure and Algorithm</li>
                  <li>proficient in problem solving</li>
                  <li>proficient in C,C++</li>
                  <li>proficient in kotlin</li>
                  <li>Web Development</li>
                  <li>typing speed:55+ wpm in English</li>
                </ul>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal  ">
                  {/* Database developer */}
                  LANGUAGES
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <p>Proficient in English</p>
                  <p>Proficient in Hindi</p>
                  <p> Proficient in Bangla</p>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                EDUCATION
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <p>BSC in Computer Science and Engineering</p>
                  <p>Shahjalal University of Science and Technology Sylhet,<br/> 
                    Bangladesh,2022-current</p>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Interests
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <ul>
                    <li>Matching Learning</li>
                    <li>Robotics</li>
                    <li>Solving Interesting Problems</li>
                    <li>Learning new things</li>
                    <li>watching technical and fictional 
                    movies</li>
                    
                  </ul>
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
