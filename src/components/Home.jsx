import React from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/AnupamImage.png";

const Home = () => {
  return (
    <>
      <div
        id="1"
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-gray-600 font-bold"
                strings={["Developer", "Programmer"]}
                typeSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              My portfolio aims to present my skills, expertise, and
              professional journey in a concise and professional manner. With a
              Bachelor of Engineering in Computer Science from Acropolis
              Institute of Technology and Research, I have honed my proficiency
              in Python, PHP, JavaScript, HTML, CSS, Tailwind CSS, Node.js,
              React, MongoDB, and Express, alongside experience in SQL and a
              strong grasp of design principles and problem-solving skills.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 ">
                <h1 className=" text-center font-bold">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="http://www.linkedin.com/in/anupamjain08" target="blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <FaSkype className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaSquareInstagram className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className=" text-center font-bold">Currently Working On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <DiMongodb className="ml-2.5 md:ml-0 text-3xl md:text-2xl rounded-full" />
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <SiExpress className="text-xl md:text-2xl rounded-full" />
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <RiReactjsLine className="text-xl md:text-2xl rounded-full" />
                    </motion.div>
                  </li>
                  <li>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <FaNodeJs className="text-xl md:text-2xl rounded-full" />
                    </motion.div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={pic}
              className="rounded-full md:h-[450px] md:w-[550px]"
              alt=""
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
