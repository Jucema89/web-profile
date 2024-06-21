export default function BagesTechs(){

  const techs: string[] = [
    'Javascript', 'Typescript', 'Angular', 'Next Js', 'Node Js', 'Express', 'Git', 'Linux', 'Docker', 'Mongo DB', 'Mysql', 'Tailwind', 'Sass', 'Bootstrap', 'Html', 'Css', 'Nginx'
  ]
    return(
      <div className="z-10  max-w-md w-full my-6 bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 md:p-7">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Tecnologias más usadas
        </h3>
        <div className="flex-1 py-2">
          { 
            techs.map((tech, i) => (
              <span key={i} className="inline-flex mx-1 my-1 items-center gap-x-1.5 py-1.5 px-3 hover:bg-[#030c26] dark:hover:bg-white dark-hover:text-[#030c26] hover:text-white rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-300 dark:text-blue-900"> 
                {tech} 
              </span>
            ))
          }
        </div>
        </div>
      </div>
    )
}