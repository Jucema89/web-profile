import Image from "next/image";
import Profile from "./components/profile";
import About from "./components/about";

export default function Home() {

  return (
    <>
    <div className="max-w-[95rem] mx-10 my-10 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-2 md:gap-8 xl:gap-2 md:items-center">
        {/* left section */}
        <div className="w-full self-start">
          <Profile />
        </div>
        {/* Right section */}
        <div className="w-full self-start col-span-2">
          < About />
        </div>
       
        

      

      </div>
    </div>



    
    </>
  );
}
