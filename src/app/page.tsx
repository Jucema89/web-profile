'use client'
import Profile from "./components/profile";
import About from "./components/about";
import BagesTechs from "./components/badge-technologies";
import Curriculum from "./components/curriculum";
import ProjectCards from "./components/project-cards";
import { useEffect, useState } from "react";
import ExperienceCards from "./components/experience/experience-cards";
import EducationCards from "./components/education/education-cards";
import NextHere from "./next-note";

export default function Home() {
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

  return (
    <>
    <div className="max-w-[95rem] mx-10 my-10 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-2 md:gap-8 xl:gap-2 md:items-center">
        {/* left section */}
        <div className="w-full self-start">
          <Profile />
          < BagesTechs />
          < Curriculum />
          < NextHere />
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
}
