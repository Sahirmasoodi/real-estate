import React from "react";
import { projectsData } from "../assets/assets";

const Projects = ({dark}) => {
  return (
    <div
      id="projects"
      className="my-10 md:my-20 flex flex-col justify-center gap-10 items-center">

      <div className={`text-center text-4xl ${dark && 'text-white'}`}>
        <span className="font-bold me-2">Featured</span>
        <span>Listings</span>

        <p className="text-center text-sm md:text-lg text-gray-500">
          Explore the Best Properties  
          <br/> Handpicked by Expert Brokers
        </p>
      </div>

      <div className="flex overflow-x-auto overflow-y-hidden w-screen gap-14 px-10 hide-scrollbar">
        {
          projectsData.map((project,index)=>(
            <div key={index} className="hover:scale-[101%]">
              <div>
                <img className="min-w-72  h-96" src={project.image}/>
              </div>

              <div className={`bg-white relative -top-5 shadow-sm shadow-gray-600 z-10 w-60 ms-6 px-3 border-b ${dark &&'bg-black text-gray-500 border-none '}`}>
                <p className="font-bold ">{project.title}</p>
                <span className="text-sm">
                  {project.price} | {project.location}
                </span>
              </div>

            </div>
          ))
        }
      </div> 
    </div>
  );
};

export default Projects;
