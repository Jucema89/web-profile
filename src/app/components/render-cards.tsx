/* eslint-disable @next/next/no-img-element */
export default function RenderCards(){
    return(
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Proyectos
                </h3>
                {/* <p className="mt-2 text-gray-500 dark:text-neutral-400">
                Desarrollador Full Stack Javascript orientado a los detalles con más de 5 años de experiencia
                trabajando con HTML, CSS, Javascript, uso el Framework Angular con
                Énfasis en Dashboards de Apps muy grandes que usan RxJs y NgRx.
                Agilidad y habilidad tanto en proyectos independientes como colaborativos.
                </p> */}
                <div className="grid grid-cols-2">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <img className="w-full h-[120px] rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                        </h3>
                        <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        Some quick example text to build on the card title and make up the bulk of the cards content.
                        </p>
                        <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                        Go somewhere
                        </a>
                    </div>
                </div>
                </div>

                
               
            </div>
        </div>
    )
}