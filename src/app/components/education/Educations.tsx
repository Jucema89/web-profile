export interface Certificates {
    id: number
    title: string
    scholl: string
    logo: string,
    date_earned: string,
    url: string
}

export const Educations: Certificates[] = [
    {
        id: 1,
        title: 'Curso Profesional de Angular',
        scholl: 'Platzi',
        logo: '/images/platzi_logo.png',
        date_earned: 'Ene 2021',
        url: 'https://platzi.com/p/julioDaza/curso/1731-angular-profesional/diploma/detalle/'
    },
    {
        id: 2,
        title: 'Master en Javascript',
        scholl: 'Udemy',
        logo: '/images/udemy_logo.png',
        date_earned: 'Feb 2021',
        url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-08c4bb23-db1a-4426-b4b3-b6c8a08ccefc.jpg'
    },
    {
        id: 3,
        title: 'Curso de Typescript',
        scholl: 'Platzi',
        logo: '/images/platzi_logo.png',
        date_earned: 'May 2021',
        url: 'https://platzi.com/p/julioDaza/curso/1580-typescript-angular/diploma/detalle/'
    },
    {
        id: 4,
        title: 'Curso de Rendimiento en Angular',
        scholl: 'Platzi',
        logo: '/images/platzi_logo.png',
        date_earned: 'Feb 2021',
        url: 'https://platzi.com/p/julioDaza/curso/1730-course/diploma/detalle/'
    },
    {
        id: 5,
        title: 'Curso de Formularios en Angular',
        scholl: 'Platzi',
        logo: '/images/platzi_logo.png',
        date_earned: 'Jun 2021',
        url: 'https://platzi.com/p/julioDaza/curso/2027-angular-forms/diploma/detalle/'
    },
    {
        id: 6,
        title: 'Curso de Angular',
        scholl: 'Platzi',
        logo: '/images/platzi_logo.png',
        date_earned: 'Nov 2020',
        url: 'https://platzi.com/p/julioDaza/curso/1670-angular-8/diploma/detalle/'
    },
]