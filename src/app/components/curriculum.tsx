'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Curriculum(){

    const [ lang, setLang ] = useState('ES')

    const setStyle = (id: string): string => {
      if(id === lang){
        return `py-1.5 px-2 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-gray-50 text-black shadow-sm active:text-black active:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-black dark:hover:bg-white`
      } else {
        return `py-1.5 px-2 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-xs font-medium focus:z-10 border border-gray-200 bg-transparent text-white shadow-sm active:text-black active:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900`
      }
    }
    return(
      <div className="z-10 mt-10 max-w-full w-full bg-black border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 md:p-7 lg:p-4 flex flex-col">
        <h3 className="text-lg font-bold mb-4 text-white dark:text-white">
          Curriculum
        </h3>
        <div className="flex justify-between gap-6 max-w-full lg:gap-2 lg:text-[8px]">

            <div className="flex flex-row max-w-lg lg:h-10 rounded-lg shadow-sm">
              <div className="inline-flex rounded-lg shadow-sm">
                <button type="button" className={setStyle('ES')}
                onClick={() => setLang('ES')}
                >
                  ES
                </button>

                <button type="button" className={setStyle('EN')}
                onClick={() => setLang('EN')}>
                  EN
                </button>
              </div>
            </div>

            <Link type="button" className="flex w-full justify-between group lg:h-10 p-2 ps-3 items-center gap-x-2 text-md sm:text-sm font-mono rounded-lg border border-gray-200 bg-transparent text-white shadow-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            href={`${process.env.NEXT_PUBLIC_APP_URL}/docs/CV_Julio_Daza_${lang}.pdf`} target="_blank">
                $ Download cv julio
                <span className="flex justify-center items-center text-black bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">

                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 size-4 group-hover:rotate-6 transition ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
            </Link>
          </div>
        </div>
      </div>
    )
}