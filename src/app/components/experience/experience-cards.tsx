/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Works, ExperienceWork } from './works';
import useWindowSize from '@/utils/windows-size';

let ApexCharts: any;
if (typeof window !== 'undefined') {
  ApexCharts = require('apexcharts');
}

export default function ExperienceCards() {
  const deviceType = useWindowSize();
  const [series, setSeries] = useState([{ name: 'Stats Dev', data: [0] }]);
  const works = Works;
  const chartRef = useRef(null);
  const [chart, setChart] = useState<any | null>(null);
  const [workDescription, setWorkDescription] = useState('');
  const [workTechs, setWorkTechs] = useState<string[]>([]);

  const selected = (idName: string): string => {
    if (idName === series[0].name) {
      return `flex gap-x-3 relative group rounded-lg bg-gray-100 text-black dark:hover:bg-white/10 dark:bg-[#030c26]`;
    } else {
      return `flex gap-x-3 relative text-gray-700 group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10`;
    }
  };

  useEffect(() => {
    setData(works[0]);
    setWorkDescription(works[0].description);

    if (ApexCharts && chartRef.current) {
      const optionsChart = {
        chart: {
          type: 'radar',
          id: 'experience-chart',
        },
        colors: ['#2563eb'],
        series: series,
        labels: ['Frontend', 'Backend', 'UI/UX', 'Servers', 'Consume API', 'Team Lead'],
      };

      const chartInstance = new ApexCharts(chartRef.current, optionsChart);
      chartInstance.render();
      setChart(chartInstance);

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (chart && deviceType === 'pc') {
      chart.updateOptions({
        series: series,
      });
    } else {
      chart?.destroy();
    }
  }, [series]);

  function setData(work: ExperienceWork) {
    setSeries([{ name: work.company, data: work.stats }]);
    setWorkDescription(work.description);
    setWorkTechs(work.techs);
  }

  if(deviceType === 'pc'){
    return (
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="p-4 md:p-6">
          <h3 className="text-lg text-center font-bold text-gray-800 mb-4 dark:text-white">
            Experiencia
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div>
              {works.map((work) => (
                <div key={work.id} onClick={() => setData(work)}>
                  <div key={work.id} className="mt-4">
                    <div className="ps-2 my-2 first:mt-0">
                      <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                        {work.start_date} - {work.end_date}
                      </h3>
                    </div>
                    <div className={selected(work.company)}>
                      <a className="absolute inset-0 z-[1]" onClick={() => setData(work)}></a>
  
                      <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 dark:group-hover:after:bg-neutral-600">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                          <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:group-hover:border-neutral-600 dark:active:bg-gray-900"></div>
                        </div>
                      </div>
  
                      <div className="grow p-2 pb-8">
                        <h3 className={work.company === series[0].name ? 'flex gap-x-1.5 font-semibold text-blue-500 dark:text-white' : 'flex gap-x-1.5 font-semibold dark:text-white'}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 size-4 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                          </svg>
  
                          {work.role}
                        </h3>
                        <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent  hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                          <img className="flex-shrink-0 size-8 rounded-full" src={work.logo} alt="Image Description" />
                          {work.company}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Contenedor para el gráfico de radar */}
            <div className="flex flex-col justify-start rounded-md shadow-md px-4 py-2 bg-gray-50 dark:bg-[#030c26] dark:text-white">
              <div id="chart_base" className="h-full" ref={chartRef}></div>
              <div>
                <p className="text-black dark:text-white font-semibold text-md">Funciones</p>
                <p className="text-sm text-black px-2 dark:text-white">{workDescription}</p>
                <div className="grid grid-cols-4 justify-center text-center gap-2 py-4">
                  { workTechs.map((tech, index) => (
                    <span key={index} className="w-auto items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-neutral-800">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="p-4 md:p-6">
          <h3 className="text-lg text-center font-bold text-gray-800 mb-4 dark:text-white">
            Experiencia
          </h3>
         
            <div className="flex flex-col">
              {works.map((work) => (
                <div key={work.id} onClick={() => setData(work)}>
                  <div key={work.id} className="mt-4">
                    <div className="ps-2 my-2 first:mt-0">
                      <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                        {work.start_date} - {work.end_date}
                      </h3>
                    </div>
                    <div className={selected(work.company)}>
                      <a className="absolute inset-0 z-[1]" onClick={() => setData(work)}></a>
  
                      <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 dark:group-hover:after:bg-neutral-600">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                          <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:group-hover:border-neutral-600 dark:active:bg-gray-900"></div>
                        </div>
                      </div>
  
                      <div className="grow p-2 pb-8">
                        <h3 className={work.company === series[0].name ? 'flex gap-x-1.5 font-semibold text-blue-500 dark:text-white' : 'flex gap-x-1.5 font-semibold dark:text-white'}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 size-4 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                          </svg>
  
                          {work.role}
                        </h3>
                        <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent  hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                          <img className="flex-shrink-0 size-8 rounded-full" src={work.logo} alt="Image Description" />
                          {work.company}
                        </button>
                        <p className="text-sm dark:text-white">
                        {workDescription}
                        </p>
                        <div className="grid grid-cols-4 justify-center text-center gap-2 py-4">
                          { work.techs.map((tech, index) => (
                            <span key={index} className="w-auto items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-blue-200 dark:text-blue-800">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
  }
  
}
