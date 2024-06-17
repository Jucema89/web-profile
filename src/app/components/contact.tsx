export default function Contact(){

  const techs: string[] = [
    'Javascript', 'Typescript', 'Angular', 'Next Js', 'Node Js', 'Express', 'Git', 'Linux', 'Docker', 'Mongo DB', 'Mysql', 'Tailwind', 'Sass', 'Bootstrap', 'Html', 'Css', 'Nginx'
  ]
    return(
      <>
      <div className="z-10 mt-10 max-w-md w-full bg-black border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-800 dark:border-neutral-700">
        <div className="p-4 md:p-7">
        <h3 className="text-lg font-bold mb-4 text-white dark:text-white">
          Curriculum
        </h3>
        <div className="flex gap-4">
            <div className="inline-flex rounded-lg shadow-sm">
              <div className="inline-flex rounded-lg shadow-sm">
                <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-transparent text-white shadow-sm active:text-black active:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                  ES
                </button>

                <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-transparent text-white shadow-sm active:text-black active:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                  EN
                </button>
              </div>

            </div>

            <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-transparent text-white shadow-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                $ Download cv julio-daza
                <span className="flex justify-center items-center text-black bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">

                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 size-4 group-hover:rotate-6 transition ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
            </button>
          </div>
        </div>
      </div>
      </>
      
    )
}