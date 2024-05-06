import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>hello I'm a </h1>
              {/*<span className="text-red-700 font-bold">Developer</span>*/}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer"]}
                typeSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ab
              hic laboriosam sapiente possimus. Est, modi repudiandae non quos
              alias quisquam quo esse. Adipisci minus accusantium quasi nesciunt
              numquam aliquid eveniet facere beatae error hic non reiciendis
              dolores atque laborum dolorum tempora debitis earum quaerat
              obcaecati, cum vel excepturi ipsa!
            </p>
            <br />
            {/*social */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 ">
                <h1 className=" text-center font-bold">Available On</h1>

                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="blank">
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
                    <DiMongodb className="ml-2.5 md:ml-0 text-3xl md:text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <RiReactjsLine className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <FaNodeJs className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-16 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:h-[450px] md:w-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr style={{ border: '1px solid black' }} />
      
    </>
  );
};

export default Home;
