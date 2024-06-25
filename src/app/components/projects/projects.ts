export interface Project {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    logo: string
    url: string
    type: 'private' | 'public'
    techs: string[]
}

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: 'Colduty: Saas Fiscal para Empresas',
        subtitle: 'Frontend Lead',
        description: 'Diseñe las interfaces en Figma y los Estilos base usando Sass para luego construir los componentes Core (Buttons, Modals, Alerts... etc), que luego mi equipo uso para crear las interfaces. Integre NgRx al proyecto y le sume persistencia en localStorage de ciertas secciones que presentaban un volumen de datos muy pesados, asi mejoramos la UX.',
        type: 'private',
        techs: [ 'Angular', 'Next.js', 'Node.Js', 'Mysql' ],
        url: 'https://colduty.com/',
        image: '/images/success_case_colduty.png',
        logo: '/images/logo-colduty.png'
    },
    {
        id: 2,
        title: 'Geven: App de Ventas movil y POS',
        subtitle: 'FullStack Javascript',
        description: 'Diseñe las interfaces, los estilos core y la logica de ingreso con persistencia de sesion mediante JWT en node.js, desde Express conecte Business Central de Microsoft y se redundaban datos en Mongo Db. Todo esto desplegado en un VPS con flujos CI/CD de Github.',
        type: 'private',
        techs: [ 'Node.Js', 'Angular', 'Mongo' ],
        url: 'http://geven.almacensanitario.com',
        logo: '/images/logo_geven.png',
        image: '/images/success_case_geven.png',
    },
    {
        id: 3,
        title: 'CMCS Cleaning: Clean Company',
        subtitle: 'Website',
        description: 'Web corporativa de CMCS cleaning, desarrollada en NextJs y desplegada a Vercel. Incluye formulario de cotizacion de servicios que envia correos a cliente y administrador usando Express y Resend.',
        type: 'public',
        techs: [ 'Next.js', 'Vercel', 'Express' ],
        url: 'https://cmcscleaning.com/',
        logo: '/images/logo_cmcs.png',
        image: '/images/success_case_cmcs.png'
    },
    {
        id: 4,
        title: 'App Domino: Gestor de Torneos',
        subtitle: 'App Electron',
        description: 'Aplicación para Gestión de torneos de Domino, permite crear participantes, torneos y mesas, genera el formato de evaluacion en PDF para cada mesa. App con funcionalidad Offline mediante DB local que al conectar a internet sincroniza con DB en la nube.',
        type: 'public',
        techs: [ 'Angular', 'CouchDB', 'Electron.js' ],
        url: 'https://github.com/Jucema89/appDomino',
        logo: '/images/logo_domino.png',
        image: '/images/success_case_appDomino.png'
    }
]

