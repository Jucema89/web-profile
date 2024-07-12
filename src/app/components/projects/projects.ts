export interface Project {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    logo: string
    url: string
    repoGit?: string
    type: 'private' | 'public'
    techs: string[]
}

export const ProjectsData: Project[] = [
    {
        id: 1,
        title: 'LeadMan: Gestor de Leads',
        subtitle: 'FullStack Js',
        description: 'Desarrollé frontend con Angular y backend con Node.js. El dashboard posee un sistema de roles y permisos, lista todos los leads que trae de una hoja de Google. Se redunda la data en una base de datos PostgreSQL y se actualizan los estados desde la UI en la DB y en la hoja de Google. Hay un usuario de prueba con user: jose@mail.com y pass: 123456.',
        type: 'private',
        techs: [ 'Angular', 'Node.Js', 'PostgreSql' ],
        url: 'https://leadman.juliodaza.com/home',
        repoGit: 'https://github.com/Jucema89/leadManager-app',
        image: '/images/success_case_leadman.png',
        logo: '/images/leadman_logo.png'
    },
    {
        id: 2,
        title: 'Geven: App de Ventas movil y POS',
        subtitle: 'FullStack Js',
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

