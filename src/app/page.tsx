'use client'
import Profile from "./components/profile";
import About from "./components/about";
import BagesTechs from "./components/badge-technologies";
import Curriculum from "./components/curriculum";
import ProjectCards from "./components/projects/project-cards";
import { useState } from "react";
import ExperienceCards from "./components/experience/experience-cards";
import EducationCards from "./components/education/education-cards";
import NextHere from "./next-note";
import useWindowSize from "@/utils/windows-size";

export default function Home() {

  const deviceType = useWindowSize()

  const [ category, setCategory ] = useState('project')
  function renderCard(type: string = 'project' || 'experience' || 'education'){
    console.log('category - ', type)
    switch (type) {
      case 'project': 
        return < ProjectCards/>
        break;
      case 'experience': 
        return < ExperienceCards />
        break;
      case 'education': 
        return < EducationCards />
      break;
      default: 
      return < ProjectCards/>
      break;
    }
  }

  if(deviceType === 'pc'){
    return (
      <>
      {/* Pc page */}
      <div className="lg:max-w-[95rem] md:max-w-full lg:mx-4 lg:my-4 md:my-5 md:px-8 lg:px-2">
        <div className="lg:grid lg:grid-cols-3 md:flex-col  gap-2 md:gap-2 lg:gap-8 md:items-center">
          {/* left section */}
          <div className="w-full self-start md:mx-4 md:my-4 lg:mx-0 lg:my-0">
            < Profile />
            < BagesTechs />
            < Curriculum />
            {/* < NextHere /> */}
          </div>
          {/* Right section */}
          <div className="w-full self-start col-span-2 flex flex-col gap-8">
            < About setData={ setCategory }   />
            { renderCard(category) }
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return (
      <>
      {/* Mobile Page */}
      <div className="lg:max-w-[95rem] md:max-w-full lg:mx-10 lg:my-10 md:mx-4 md:my-5 md:px-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 md:flex-col  gap-2 md:gap-2 lg:gap-8 md:items-center">
          {/* left section */}
          <div className="w-full self-start md:mx-4 md:my-4 lg:mx-0 lg:my-0">
            < Profile />
            < BagesTechs />
          </div>
          {/* Right section */}
          <div className="w-full self-start col-span-2 flex flex-col gap-4 lg:gap-8">
            < About setData={ setCategory }   />
            { renderCard(category) }
            < Curriculum />
            {/* < NextHere /> */}
          </div>
        </div>
      </div>
      </>
    );
  }
 
}
