import Image from "next/image";

export default function Profile(){
    return(
        <div className="z-10 max-w-md w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-800 dark:border-neutral-700">
          <div className="py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
            <div className="flex items-center gap-x-3">
              <Image className="flex-shrink-0 inline-block size-20 rounded-full ring-2 ring-white dark:ring-neutral-900" src="/images/profile-julio-daza.png" width={120} height={120} alt="Julio Daza Profile" />
              <div className="grow">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white">
                  Julio Daza
                </h2>
                <span className="ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium bg-gray-800 text-white dark:bg-white dark:text-neutral-800">
                  Javascript Developer
                </span>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                  5 años de exp
                </p>
              </div>

              

              <input data-hs-theme-switch="" className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none

                before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

                after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch" />


             
            </div>
          </div>
          <ul className="py-3 px-4 space-y-1">
            <li>
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                <svg className="flex-shrink-0 size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
                Pixeel Ltd.
              </div>
            </li>

            <li>
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                <svg className="flex-shrink-0 size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
                (892) 312-5483
              </div>
            </li>

            <li>
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                <svg className="flex-shrink-0 size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                amanda@email.com
              </div>
            </li>
          </ul>
          <div className="py-2 px-4 flex justify-between items-center bg-gray-100 dark:bg-neutral-800">
            <a className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white" href="#">
              <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" x2="4" y1="22" y2="15"></line>
              </svg>
              Flag
            </a>

            <button type="button" className="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Follow
            </button>
          </div>
        </div>
    )
}