import { Educations } from "./Educations";
/* eslint-disable @next/next/no-img-element */
export default function EducationCards(){

    const certifications = Educations

    return(
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-6">
                <h3 className="text-lg text-center font-bold text-gray-800 mb-4 dark:text-white">
                Educacion
                </h3>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                   {
                    certifications.map((cert) => (
                        <a key={cert.id} className="group my-2 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 dark:hover:bg-[#030c26] dark:hover:text-white" href={cert.url} target="_blank">
                        <div className="hs-tooltip-toggle p-4 md:p-5">
                            <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img className="size-[38px] rounded-full" src={cert.logo} alt={cert.scholl} />
                                <div className="ms-3">
                                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                    { cert.title }
                                    </h3>
                                    <div className="flex flex-1 justify-start gap-4">
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                                        { cert.scholl }
                                        </p>
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-gray-50 border border-gray-600 text-gray-600 dark:text-gray-500">
                                            { cert.date_earned }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-3">
                                <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </div>
                            </div>
                        </div>
                    </a>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}