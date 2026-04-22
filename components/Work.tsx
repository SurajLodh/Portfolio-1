'use client';

import React from 'react';
import Link from 'next/link';
const workData = [
  {
    id: 'ani-news',
    role: 'PRODUCT DESIGNER',
    date: 'FEB 2026 - PRESENT',
    title: 'ANI News  Platform Redesign',
    description: 'Led the full redesign of ANI\'s high-traffic news platform. Built a scalable design system supporting 3M+ monthly active users and a custom CMS dashboard to accelerate editorial workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkI4z17REN5LDFmk-b3w5ZotNSAm4SuS1_jdg1wjixKkw2W7BunfrwezsQPK_fiDtvcxSEB3WL2SFiC8KG8kQh1aPz5ncBsQOct7M0wo-LL6DY_A0d_b2v67G2EUip1Sg0muUM07Y31DtFLbLPj07G6knDirjhfNd5bvUVFjTf9NY4nBV-ftbMe-WOK2LsqGO1aWsu-RMcIz9zqv-HycnVX749Y7e_FC4zCIkMLywtj6s0zFgZ1RgrObHgZGkVRDmN8PctrSCK8Qi',
    reverse: false
  },
  {
    id: 'shriconnect',
    role: 'LEAD DESIGNER',
    date: 'JUL 2024 - PRESENT',
    title: 'ShriConnect  ERP Ecosystem',
    description: 'Architected a large-scale ERP ecosystem  13 custom mobile apps and 40+ modules across 100+ schools  serving 200,000+ students, parents, and staff with three distinct persona-based workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJV58gIbu3UEn8NF4l5zdWWtvWk5glyaIj7MuuO5T-QDi9IXdMM8FZOY7zK7W_FUY3pNEsKAWKAMm-Ptfzds-mu4Tg3XsvAJ1rE2ESaLQKnkc6i-zW3ofWZxQGzUjztd5UwZY_av4RnKSkis_oph9oH-4wn6KK-tX-UbAt5SFZ8hLrtVsOS83Ser7_TdTOz3bQBZh1fu4PO7MZkmEnWGCREWUqD_nJo95OMB_l5RWm4eyqh0Uf_Us0HSRPlIny-rsJwHJbmatOt_0a',
    reverse: true
  },
  {
    id: 'wave-city',
    role: 'UX COLLABORATOR',
    date: 'SEP 2024 - DEC 2025',
    title: 'Wave City  ERP & Billing Workflow',
    description: 'Revamped an internal ERP billing workflow for a global finance client, simplifying citywide billing flows and delivering a 25% reduction in administrative processing time. Designed secure wheelchair billing modules meeting financial compliance standards.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDu4wvSpJA8kWvxJ712hnyQluhHtukoeA0nBW-K9YqDRD4QUEdCRuHKj4nRBMI-7GZ3tC-3mrf70iXkXdh0XmvmACGIzjEufWfGi1lWeeAgZrrY6tcrSeLJ8Kqhy5CECWdIpW6dwAbF0j3KN8K6TxJAJJ4FvPUKNplokd5Iw4m2IdUygwcZ7ERiE-pOCeYkI_ofAFvbinYFNrqYjrd3ikQfsHvVfcpingFNvUMj25FyCfHNs_RKHp-mAVCn9uryCU_duapSzRgVHAc',
    reverse: false
  },
  {
    id: 'ability-connect',
    role: 'LEAD DESIGNER',
    date: 'JUN 2024 - AUG 2024',
    title: 'Ability Connect  Accessible Platform',
    description: 'Designed a fully accessible digital resource platform from the ground up, achieving WCAG 2.1 compliance with enhanced screen-reader and high-contrast mode support for users with diverse disabilities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyPuqho1--zV6gwK2ySqRs-S-fa99GA1vORs5e3WIupUOywHppoJkGQg7SI8HNmb-R9UgBJZY3NFisd4lsGZ31L5-Vvn2oPOGlCJMAF1eG86xjEiDifpz1tv2-tQhGof_P1CFajXBxFDs9tGYXcBODmxnUBQe4ZtcGDey4I9irCmLvb-wbcZNIeI9eHPtMjKQ1Jjnv1W4KeB5XHoT4kqIg_i44Sq2u_xLBjYJXTHTr2grGdl05ve3yDbb7MHzHJWWLVPKZcX1tK6M5',
    reverse: true
  }
];

export default function Work() {
  return (
    <main className="py-24 bg-[#f8f9fa] dark:bg-[#0b1221] transition-colors duration-300" id="work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-gray-900 dark:text-gray-100 border-b-[5px] border-[#e9c766] dark:border-[#f4c844] inline-block pb-1 transition-colors">
            Work
          </h2>
        </div>

        <div className="space-y-32">
          {workData.map((project) => (
            <section
              key={project.id}
              className={`group flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 cursor-pointer`}
            >
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 transition-colors">
                  <span className="font-bold border border-gray-200 dark:border-gray-700 px-3 py-1 rounded bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:border-[#e9c766] group-hover:text-[#b08210] dark:group-hover:border-[#f4c844] dark:group-hover:text-[#f4c844]">{project.role}</span>
                  <span className="font-semibold">{project.date}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-[#b08210] dark:group-hover:text-[#f4c844]">{project.title}</h3>
                <p className="text-[15px] font-body text-gray-600 dark:text-gray-400 leading-relaxed font-light transition-colors">
                  {project.description}
                </p>
                <div className="pt-2">
                  <Link href={project.id === 'ani-news' ? '/work/ani-news' : ''}>
                    <button className="px-6 py-2.5 border border-gray-300 dark:border-gray-700 bg-[#f8f9fa] dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded transition-colors text-sm shadow-sm group-hover:bg-[#111827] group-hover:text-white group-hover:border-[#111827] dark:group-hover:bg-white dark:group-hover:text-gray-900 dark:group-hover:border-white duration-300">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full rounded-[24px] shadow-xl bg-white dark:bg-[#0f172a] p-2 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800">
                <div className="w-full h-full rounded-[16px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src={project.image}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
