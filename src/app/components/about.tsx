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
                <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                Sobre Mi
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
                Desarrollador Frontend orientado al detalle, con más de cinco años de experiencia 
                trabajando con JavaScript y tecnologías relacionadas. Poseo un manejo avanzado 
                del framework <b>Angular</b>, con énfasis en aplicaciones de gran tamaño que 
                utilizan <b>RxJs</b> y <b>NgRx</b>. Experiencia en la creación de backends con Node.js, 
                empleando bases de datos tanto relacionales como no relacionales. 
                Soy un gran aficionado de Linux, con conocimientos en AWS y experiencia 
                con VPSs.
                </p>
                <div className="inline-flex rounded-lg shadow-sm mt-6 md:text-center xs:self-center lg:text-left w-full xs:justify-center">
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