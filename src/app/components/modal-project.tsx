/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Project } from "./projects/projects"
import HSOverlay from "@preline/overlay"
import { IStaticMethods } from "preline";
import { useEffect, useState } from "react";

declare global {
    interface Window {
      HSStaticMethods: IStaticMethods;
    }
}

export interface DataProject {
    open: boolean
    data: Project
}

export default function ModalProject({ modal }: { modal: DataProject}){

    useEffect(() => {
        if (typeof window !== "undefined" && window.HSStaticMethods && window.HSStaticMethods.autoInit) {
            window.HSStaticMethods.autoInit()
            if(modal.open){
                const getModal = document.querySelector('#hs-modal-projects') as HTMLElement
                HSOverlay.open(getModal)
            }
        }
     
    }, [ modal ])

    function closeModal(){
        if (typeof document !== "undefined") {
            const getModal = document.querySelector('#hs-modal-projects') as HTMLElement
            HSOverlay.close(getModal)
        }
    }

    return(
        <div id="hs-modal-projects" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto md:max-w-[50vw] lg:max-w-[50vw] lg:max-h-[50vh] md:max-h-[50vh] lg:self-center">
                <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
                <div className="absolute top-2 z-[10] end-2">
                    <button type="button" className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none" onClick={() => closeModal()}>
                    <span className="sr-only">Close</span>
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <div className="aspect-w-16 aspect-h-8">
                    <img className="w-full object-cover rounded-t-xl" src={modal.data.image} alt={modal.data.title} />
                </div>

                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                    <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
                    { modal.data.title }
                    </h3>
                    <p className="text-gray-500 dark:text-neutral-500">
                    { modal.data.description }
                    </p>

                    <div className="mt-6 flex justify-center gap-x-4">
                    <a type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-700  disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-modal-projects" href={modal.data.url} target="_blank">
                        Ver Proyecto
                    </a>
                    <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-700  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400 cursor-pointer" onClick={() => closeModal()}>
                        Cerrar
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>

    )
}