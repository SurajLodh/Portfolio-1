import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#0f172a] transition-colors duration-300 w-full pb-20 text-gray-900 dark:text-gray-50">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-2 lg:pt-4 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1 space-y-8 z-10 w-full">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#b08210] dark:text-[#f4c844] font-label">
              The Editorial Curator
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline font-semibold text-gray-900 dark:text-gray-50 leading-[1.1] tracking-tight">
              Designing data-<br />informed stories <br />
              with a <span className="italic text-[#e9c766]">human pulse.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg font-light leading-relaxed">
              I am Gurusha Arora, a multidisciplinary designer focused on creating high-end gallery-like digital experiences. My approach balances the authority of a boutique agency with the intimacy of a solo practitioner.
            </p>
          </div>
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="absolute top-0 right-10 w-72 h-72 bg-[#fbf5dc] dark:bg-[#403310] rounded-full blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              alt="Gurusha Arora Portrait"
              className="w-full max-w-[500px] h-auto object-cover rounded-[2.5rem] shadow-2xl origin-bottom"
              style={{ aspectRatio: '4/5' }}
            />
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-4 mb-12 gap-4">
          <h2 className="text-4xl font-headline italic font-semibold text-gray-900 dark:text-gray-50">Core Expertise</h2>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Strategic Problem Solving</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between space-y-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a37b12]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            <div className="space-y-4">
              <h3 className="text-xl font-headline text-gray-900 dark:text-gray-50 font-semibold">Product Architecture</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Synthesizing complex data into intuitive navigation flows and scalable design systems that evolve with your user base.
              </p>
            </div>
          </div>

          <div className="bg-[#fbf5dc] dark:bg-[#403310] rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a37b12]"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
            <div className="space-y-4">
              <h3 className="text-xl font-headline text-gray-900 dark:text-gray-50 font-semibold">Editorial UI</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                Crafting high-contrast layouts that prioritize content through intentional white space and premium typography.
              </p>
            </div>
          </div>

          <div className="bg-[#f1f5f9] dark:bg-gray-800 rounded-[2rem] p-6 md:p-10 shadow-sm lg:col-span-1 md:col-span-2 flex flex-col justify-between space-y-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a37b12]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <div className="space-y-4">
              <h3 className="text-xl font-headline text-gray-900 dark:text-gray-50 font-semibold">User Research</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Qualitative insights translated into quantitative wins, ensuring every pixel serves a human-centric purpose.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-headline text-gray-900 dark:text-gray-50 font-semibold">Visual Storytelling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-md">
                Moving beyond aesthetics to build brand narratives that resonate on an emotional level with high-value audiences.
              </p>
            </div>
            <div className="w-[180px] h-[100px] bg-[#1a1a1a] rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e9c766" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path><path d="m18 21-6-6-6 6"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* The Toolkit & Academic Journey */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* The Toolkit */}
          <div className="flex-1">
            <h2 className="text-4xl font-headline italic font-semibold text-gray-900 dark:text-gray-50 mb-12">The Toolkit</h2>
            <div className="space-y-6">
              {[
                { tool: "Figma & FigJam", role: "VISUAL MASTER" },
                { tool: "Adobe Creative Suite", role: "ASSET CREATION" },
                { tool: "AI Agent", role: "IMPLEMENTATION" },
                { tool: "Notion & Jira", role: "STRATEGY & OPS" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex items-center gap-4 text-gray-900 dark:text-gray-50 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-[#f0b92f] rounded-full"></div>
                    {item.tool}
                  </div>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Journey */}
          <div className="flex-1">
            <h2 className="text-4xl font-headline italic font-semibold text-gray-900 dark:text-gray-50 mb-12">Academic Journey</h2>
            <div className="space-y-12 relative border-l border-gray-200 ml-2">
              <div className="relative pl-8">
                <div className="absolute top-1 -left-2 w-4 h-4 bg-[#fcfcfc] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#f0b92f] rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  2018  2020
                </div>
                <h3 className="text-lg font-headline text-gray-900 dark:text-gray-50 font-semibold">Master of Human-Computer Interaction</h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 mt-1">Parsons School of Design, New York</div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 italic mt-2">
                  Focused on ethical AI and sensory interface design.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute top-1 -left-2 w-4 h-4 bg-[#fcfcfc] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#f0b92f] rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  2014  2018
                </div>
                <h3 className="text-lg font-headline text-gray-900 dark:text-gray-50 font-semibold">Bachelor of Communication Design</h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 mt-1">National Institute of Design (NID)</div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 italic mt-2">
                  Specialization in typography and visual storytelling systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA Box */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#111827] rounded-[2.5rem] p-8 md:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1f2937] rounded-full blur-3xl -z-10 opacity-50"></div>

          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline italic font-semibold text-white leading-tight mb-6">
              Ready to curate your next digital exhibition?
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10 max-w-lg">
              I am currently accepting select project inquiries for late 2024. Let's create something that transcends the ordinary.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:gurushaa11@gmail.com" className="px-8 py-4 bg-[#f0b92f] text-gray-900 dark:text-gray-50 font-semibold rounded-full hover:bg-[#e9c766] transition-colors flex items-center gap-2 text-sm">
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="/media/Gurusha_Arora_UX_UI_Designer.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm text-center">
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
