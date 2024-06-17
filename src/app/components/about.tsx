/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client'
import { Dispatch, SetStateAction, useState } from "react";

export default function About({ setData }: { setData: Dispatch<SetStateAction<string>>}){

    const [ category, setCategory ] = useState('projects')

    function setValues(value: string){
        setCategory( value)
        setData( value )
    }

    const validateActive = (button: string): string  => {
        return category === button ? 'bg-black text-white' : 'bg-white text-black'
    }

    return(
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Sobre Mi
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                Desarrollador Full Stack Javascript orientado a los detalles con más de 5 años de experiencia trabajando con HTML, CSS, Javascript, uso el Framework Angular con Énfasis en Dashboards de Apps muy grandes que usan RxJs y NgRx. Agilidad y habilidad tanto en proyectos independientes como colaborativos.
                </p>
                <div className="inline-flex rounded-lg shadow-sm mt-6">
                    <button type="button" className={`py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 shadow-sm hover:text-white hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 
                        ${validateActive('projects')}`
                    } onClick={ () => setValues('projects') }>
                        Proyectos
                    </button>
                    <button type="button" className={`py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 shadow-sm hover:text-white hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 
                        ${validateActive('experience')}`
                    } onClick={ () => setValues('experience') }>
                        Experiencia
                    </button>
                    <button type="button" className={`py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 shadow-sm hover:text-white hover:bg-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 
                        ${validateActive('education')}`
                    } onClick={ () => setValues('education') }>
                        Educación
                    </button>
                </div>
              
            </div>
        </div>
    )
}