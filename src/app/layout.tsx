/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Daza | Developer",
  description: "Julio Daza Fullstack Developer website", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>

      <Script id="JsonLD" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Julio Cesar Martinez Daza",
            "jobTitle": "FullStack Developer",
            "url": "https://juliodaza.com/",
            "description": "Desarrollador FullStack orientado al detalle, con más de cinco años de experiencia trabajando con JavaScript y tecnologías relacionadas. Poseo un manejo avanzado del framework Angular, con énfasis en aplicaciones de gran envergadura que utilizan RxJs y NgRx. Experiencia en la creación de backends con Node.js, empleando bases de datos tanto relacionales como no relacionales. Soy un gran aficionado de Linux, con conocimientos en AWS y amplia experiencia en CI/CD en VPS privados.",
            "knowsAbout": [
              "fullstack developer",
              "Angular developer",
              "frontend developer",
              "javascript developer"
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Platzi"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CO"
            },
            "sameAs": [
              "https://github.com/Jucema89",
              "https://www.linkedin.com/in/jucema89/",
              "https://x.com/jucema89"
            ]
          }
        ` }} />
      </head>
      <body className={inter.className + ' bg-gray-100 dark:bg-black overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'}>
        {children}</body>
      <PrelineScript />
    </html>
  );
}
