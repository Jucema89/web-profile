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
                Soy FrontEnd dev orientado a los detalles con más de 5 años de experiencia, 
                conozco Javascript a profundidad y manejo <b>React</b>, <b>Angular</b> y <b>Next.js</b> de manera 
                profesional, todo usando Typescript y buenas practicas, manejo CSS solo o con 
                Sass, uso Tailwind y he usado muchos Frameworks de CSS creados sobre el, uso 
                manejo de estados para React con Redux o con Context segun sea el requerimiento, 
                con Angular uso Ngrx y Rxjs.<br/>
                En diseño he creado UI usando Figma y AdobeXD, manejo toda la Suite de 
                Adobe para Diseño. He levantado backends con Nodejs y Express, consumiento 
                APIs y exponiendo recursos, asi que se de consumos APIs bajo Rest y GraphQL. 
                Aprendo rapido y me adapto rapido.
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