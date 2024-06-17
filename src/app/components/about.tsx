export default function About(){
    return(
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-7">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Sobre Mi
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                Desarrollador Full Stack Javascript orientado a los detalles con más de 5 años de experiencia
                trabajando con HTML, CSS, Javascript, uso el Framework Angular con
                Énfasis en Dashboards de Apps muy grandes que usan RxJs y NgRx.
                Agilidad y habilidad tanto en proyectos independientes como colaborativos.
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400" href="#">
                Card link
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                </a>
            </div>
        </div>
    )
}