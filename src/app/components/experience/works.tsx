export interface ExperienceWork {
    id: number
    company: string
    logo: string
    role: string
    start_date: string
    end_date: string
    location: string
    description: string
    type_work: 'partial' | 'fulltime' | 'per Hours'
    stats: number[]
}

export const Works: ExperienceWork[] = [
    {
        id: 1,
        company: 'Zygnex',
        logo: '/images/zygnex_logo.png',
        role: 'FullStack Developer',
        start_date: 'Oct 2023',
        end_date: 'May 2024',
        location: 'Remote',
        description: 'Diseñé interfaces, definí tecnologías y creé la arquitectura junto al código central de las aplicaciones frontend utilizando Angular y Next.js. Establecí procesos de CI/CD y configuré conexiones a VPS para despliegues en ambientes de desarrollo. Además, me encargué de la creación del código central para el backend (Node.js con Express) y de microservicios.',
        type_work: 'fulltime',
        stats: [55, 55, 40, 45, 45, 45]
    },
    {
        id: 2,
        company: 'MPR Group',
        logo: '/images/logo_mpr.png',
        role: 'Frontend Angular',
        start_date: 'Sep 2021',
        end_date: 'Sep 2023',
        location: 'Remote',
        description: 'Desarrollé y diseñé interfaces de aplicaciones utilizando Angular, definí la interfaz de usuario (UI) con Figma y creé componentes lógicos CORE de la aplicación. Integré el sistema de reactividad RxJS y el manejador de estados NgRx. También me encargué del consumo de APIs y de la programación de la lógica del frontend.',
        type_work: 'fulltime',
        stats: [55, 35, 55, 10, 45, 10]
    },
    {
        id: 3,
        company: 'Rebus Technology',
        logo: '/images/rebus_logo.jpeg',
        role: 'Frontend Angular',
        start_date: 'Feb 2021',
        end_date: 'Sep 2021',
        location: 'Remote',
        description: 'Desarrollé interfaces de aplicaciones utilizando Angular, incorporando el sistema de reactividad RxJS y el manejador de estados NgRx. Me ocupé del consumo de APIs y de la programación de la lógica del frontend. Además, implementé estilos acordes con los diseños proporcionados en Zeplin y Adobe XD.',
        type_work: 'fulltime',
        stats: [45, 10, 25, 10, 35, 10]
    },
]