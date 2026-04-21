"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'ERP', 'MEDIA', 'ACCESSIBILITY'];

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#0f172a] transition-colors duration-300 w-full min-h-screen pb-20 text-gray-900 dark:text-gray-50">
      
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-8 pt-0 lg:pt-6 pb-12">
        <div className="text-[10px] uppercase font-bold text-[#b08210] dark:text-[#f4c844] tracking-[0.2em] mb-4 font-label">
          PORTFOLIO 2024
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-bold text-gray-900 dark:text-gray-50 mb-8 leading-[1.1]">
          Selected <br /> Work
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed font-light text-lg">
          A curated collection of digital experiences focusing on ERP ecosystems, media platforms, and inclusive design.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'bg-[#f0b92f] text-gray-900 dark:text-gray-50 shadow-sm'
                  : 'bg-[#f1f5f9] dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 space-y-24 lg:space-y-32 mt-12">
        
        {/* Project 1 - ANI News */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full relative h-[300px] md:h-[450px]">
            <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
               className="w-full h-full object-cover rounded-[2rem] shadow-xl"
               alt="ANI News"
            />
          </div>
          <div className="flex-1 space-y-5">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              PRODUCT DESIGNER <span className="mx-2 font-normal text-gray-300"></span> FEB 2026
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 dark:text-gray-50 tracking-tight">
              ANI News  Platform Redesign
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg">
              Orchestrating a future-ready news consumption experience, balancing high-density information with cinematic editorial breathing room.
            </p>
            <div className="pt-4">
              <Link href="/work/ani-news" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-50 hover:text-[#b08210] dark:text-[#f4c844] transition-colors border-b border-transparent hover:border-[#b08210] pb-1">
                VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects 2 & 3 - Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          
          {/* ShriConnect */}
          <div className="space-y-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="ShriConnect" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="space-y-3">
              <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                LEAD DESIGNER <span className="mx-2 font-normal text-gray-300"></span> JUL 2024
              </div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 dark:text-gray-50 group-hover:text-[#b08210] dark:text-[#f4c844] transition-colors duration-300">ShriConnect  ERP Ecosystem</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed pr-4">
                Systematizing complex educational workflows into a cohesive, human-centered digital infrastructure.
              </p>
            </div>
          </div>

          {/* Wave City */}
          <div className="space-y-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                alt="Wave City" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="space-y-3">
              <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                UX COLLABORATOR <span className="mx-2 font-normal text-gray-300"></span> SEP 2024
              </div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 dark:text-gray-50 group-hover:text-[#b08210] dark:text-[#f4c844] transition-colors duration-300">Wave City  ERP & Billing Workflow</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed pr-4">
                Streamlining financial transparency through intuitive data architecture and billing automation.
              </p>
            </div>
          </div>

        </div>

        {/* Project 4 - Full Width Card */}
        <div className="bg-[#f8f9fa] dark:bg-gray-900 rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 shadow-sm border border-gray-100 dark:border-gray-800 group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-white dark:bg-gray-800 text-[9px] uppercase tracking-widest font-bold text-[#b08210] dark:text-[#f4c844] rounded shadow-sm border border-gray-100 dark:border-gray-800 group-hover:scale-105 transition-transform duration-300">
              ACCESSIBILITY FIRST
            </div>
            <h2 className="text-4xl font-headline font-bold text-gray-900 dark:text-gray-50 tracking-tight group-hover:text-[#b08210] dark:text-[#f4c844] transition-colors duration-300">Ability Connect</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg max-w-md">
              Designing for the edge cases. A platform built with WCAG 2.1 compliance at its core, ensuring seamless navigation for users of all abilities.
            </p>
            <div className="flex items-center gap-16 pt-6">
              <div>
                <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-1">ROLE</div>
                <div className="text-sm text-gray-900 dark:text-gray-50 font-semibold">Lead Designer</div>
              </div>
              <div>
                <div className="text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-1">DATE</div>
                <div className="text-sm text-gray-900 dark:text-gray-50 font-semibold">Jun 2024</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[300px] md:h-[400px] overflow-hidden rounded-[2rem] shadow-lg">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
               alt="Ability Connect"
             />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#7a5c10] rounded-[3rem] p-16 md:p-24 text-center mt-32 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b08210] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-white mb-10 max-w-2xl mx-auto leading-tight relative z-10 text-balance">
            Ready to start a <br/> new project?
          </h2>
          <button className="px-10 py-4 bg-white dark:bg-gray-800 text-[#7a5c10] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 active:scale-95 duration-300 relative z-10 text-sm">
            Get in touch
          </button>
        </div>

      </div>
    </div>
  );
}
