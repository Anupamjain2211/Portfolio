import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import mongo from "../../public/mongo.png";
import javascript from "../../public/javascript.png";
import sql from "../../public/sql.png";
import noode from "../../public/noode.png";
import react from "../../public/react.png";

const Experience = () => {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 1,
      logo: css,
      name: "CSS",
    },
    {
      id: 1,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 1,
      logo: mongo,
      name: "Mongo DB",
    },

    {
      id: 1,
      logo: sql,
      name: "Sql",
    },
    {
      id: 1,
      logo: noode,
      name: "Node",
    },
    {
      id: 1,
      logo: react,
      name: "React",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-3  ">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full " alt="" />
              <div>
                <div className=" ">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
