import React from "react";
import java from "../../public/java.jpg";
import python from "../../public/python.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.jpg";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.jpg";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: reactjs,
      name: "Food-App",
      url: "https://github.com/Anupamjain2211/Food-App",
      link: "https://food-app-rho-five.vercel.app/",
      desc:"Discover delicious dishes with our convenient food app"
    },
    {
      id: 1,
      logo: express,
      name: "Youtube-Clone",
      url: "https://github.com/Anupamjain2211/Youtube-Clone",
      link: "https://youtube-clone-ochre-omega.vercel.app/",
      desc:"Discover amazing content daily on our YouTube channel!"
    },
    {
      id: 1,
      logo: mongoDB,
      name: "ConvoApp",
      url: "https://github.com/Anupamjain2211/ConvoApp",
      desc:"Effortlessly convert PDFs to Word with high accuracy."
    },
    {
      id: 1,
      logo: nodejs,
      name: "BookStore",
      url: "https://github.com/Anupamjain2211/BookStore",
      desc:"Discover captivating stories at our local book store."
    },
    {
      id: 1,
      logo: python,
      name: "QuickSign",
      url: "https://github.com/Anupamjain2211/QuickSign",
      desc:"Sign documents effortlessly with our secure signature app."
    },
    {
      id: 1,
      logo: java,
      name: "MERN-Form",
      url: "https://github.com/Anupamjain2211/MERN-Form",
      desc:"Efficient form submission ensures quick processing results."
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItems.map(({ id, logo, name, url, link, desc }) => (
            <div
              className="md:w-[300px] md:h-[300px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className=" px-2  font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {desc}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Link
                  </button>
                </a>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
