import Image from "next/image";

export default function Profile(){
    return(
        <div className="z-10 max-w-md w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-800 dark:border-neutral-700">
          <div className="py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
            <div className="flex items-center gap-x-3">
              <Image className="flex-shrink-0 inline-block size-20 rounded-full ring-2 ring-white dark:ring-neutral-900" src="/images/profile-julio-daza.png" width={100} height={120} alt="Julio Daza Profile" />
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
            </div>
          </div>
          <ul className="py-3 px-4 space-y-1">
            <li>
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                <svg className="flex-shrink-0 size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
                (+57) 322 7225533
              </div>
            </li>

            <li>
              <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                <svg className="flex-shrink-0 size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                jucema89@gmail.com
              </div>
            </li>
          </ul>
          <div className="py-2 px-4 flex justify-between items-center bg-gray-100 dark:bg-neutral-800 rounded-b-lg">
          <a className="inline-flex items-center gap-x-2 text-xs text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fflex-shrink-0 size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
          </svg>
          From Colombia
        </a>
          <div className="flex gap-4">
            <a type="button" className="py-1 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-black text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="https://github.com/Jucema89" target="_blank">
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
              Github
            </a>

            <a type="button" className="py-1 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-black text-white hover:hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/in/jucema89/" target="_blank">
            <svg className="flex-shrink-0 size-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" fill="currentColor"/></svg>
              Linkedin
            </a>
          </div>
          </div>
        </div>
    )
}