import React from 'react';
import Link from 'next/link';

export default function AniNewsCaseStudy() {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#0f172a] transition-colors duration-300 w-full min-h-screen pb-20 text-gray-900 dark:text-gray-50">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-8 pt-0 lg:pt-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          <div className="flex-[2] space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-[84px] font-headline font-bold text-[#1f2937] dark:text-gray-50 leading-[1.1] tracking-tight">
              ANI News  <br />
              <span className="italic">Platform Redesign</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed font-light text-lg lg:text-xl">
              A digital evolution for India's premier news agency, transforming content delivery for over 3 million monthly active users through a unified design language.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="border-l border-gray-200 dark:border-gray-700 pl-8 space-y-6">
               <div className="space-y-1">
                 <div className="text-[9px] text-[#9ca3af] font-bold uppercase tracking-widest">ROLE</div>
                 <div className="text-base font-medium text-gray-800 dark:text-gray-200">Product Designer</div>
               </div>
               <div className="space-y-1">
                 <div className="text-[9px] text-[#9ca3af] font-bold uppercase tracking-widest">TIMELINE</div>
                 <div className="text-base font-medium text-gray-800 dark:text-gray-200">Feb 2026  Present</div>
               </div>
               <div className="space-y-1">
                 <div className="text-[9px] text-[#9ca3af] font-bold uppercase tracking-widest">CLIENT</div>
                 <div className="text-base font-medium text-gray-800 dark:text-gray-200">ANI News  VoxturrLabs</div>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
            alt="ANI News Hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="bg-[#f8f9fa] dark:bg-gray-900 py-24 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            <div className="flex-1 space-y-8">
              <span className="inline-block px-4 py-1.5 bg-[#f0b92f] text-gray-900 dark:text-gray-50 text-[10px] uppercase font-bold tracking-widest rounded-sm">
                THE CHALLENGE
              </span>
              <h2 className="text-4xl lg:text-5xl font-headline font-bold text-gray-900 dark:text-gray-50 leading-tight">
                Fragmented workflows <br />
                and editorial <br />
                bottlenecks.
              </h2>
            </div>
            <div className="flex-1 space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg pt-2 md:pt-16">
              <p>
                ANI News operates as a massive scale, serving millions of viewers and thousands of media partners. However, the legacy platform suffered from a fragmented design language that made updates slow and inconsistent across web and mobile.
              </p>
              <p>
                The editorial team was bogged down by an aging CMS that lacked intuitive workflows, making it difficult to publish breaking news with the speed required in modern 24/7 news cycle. The primary goal was to create a scalable design system and a custom CMS dashboard that prioritizes editorial speed without compromising on design quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Editorial Approach */}
      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline italic font-bold text-gray-900 dark:text-gray-50 mb-6">
            The Editorial Approach
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg">
            Architecting a system that balances journalistic authority with modern digital efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-[2rem] p-10 shadow-sm lg:col-span-2 flex flex-col justify-between space-y-8 group transition-all duration-300 hover:shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f0b92f] flex items-center justify-center text-gray-900 dark:text-gray-50 font-bold text-sm">
                  01
                </div>
                <h3 className="text-2xl font-headline italic font-bold text-gray-900 dark:text-gray-50">Foundation: The 'News-First' Design System</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                We developed a comprehensive component library focusing on high-density information display. The system utilizes a hybrid typographic scaleNoto Serif for headlines to maintain ANI's heritage authority, and Manrope for data-heavy editorial dashboards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="h-40 bg-[#111827] rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="UI Element" />
               </div>
               <div className="h-40 bg-black rounded-xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Typography" />
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f9fa] dark:bg-gray-900 rounded-[2rem] p-10 shadow-sm flex flex-col space-y-8 group transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#e9c766] rounded-full blur-2xl opacity-40"></div>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-900 dark:text-gray-50 font-bold text-sm">
                  02
                </div>
                <h3 className="text-2xl font-headline italic font-bold text-gray-900 dark:text-gray-50">CMS Redesign</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm">
                Creating a custom dashboard for editors that reduced time-to-publish by 40% through intuitive UI architecture and real-time collaboration tools.
              </p>
            </div>
          </div>

          {/* Card 3 - Full width */}
          <div className="bg-[#1f2937] dark:bg-[#111827] rounded-[2rem] p-8 md:p-12 shadow-xl lg:col-span-3 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#374151] rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="flex-1 space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f0b92f] flex items-center justify-center text-gray-900 dark:text-gray-50 font-bold text-sm">
                  03
                </div>
                <h3 className="text-2xl font-headline italic font-bold text-white">User-Centric News Feed</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                Reimagining the news consumer UI model. We implemented gesture-based discovery experiences that allow users to swipe through breaking stories without leaving the context of their current category.
              </p>
            </div>
            
            <div className="flex-1 w-full flex justify-end relative z-10 md:pr-10">
               <div className="w-64 h-[400px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-2xl overflow-hidden translate-y-12 group-hover:translate-y-8 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Mobile UI" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interface Explorations */}
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline italic font-bold text-gray-900 dark:text-gray-50 inline-block pb-4 border-b-4 border-[#f0b92f]">
            Interface Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Huge Left Image */}
           <div className="md:col-span-2 md:row-span-2 h-[400px] md:h-[620px] rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dashboard UI" />
           </div>

           {/* Top Right Box */}
           <div className="bg-[#f8f9fa] dark:bg-gray-900 rounded-[2rem] p-8 space-y-6 flex flex-col justify-center border border-gray-100 dark:border-gray-800 shadow-sm h-[300px]">
             <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">DESIGN SYSTEM</span>
             <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed">
               The new CMS dashboard provides a modular block-based editor, allowing journalists to build complex stories up to 40% faster.
             </p>
           </div>
           
           {/* Mid Right Image */}
           <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-lg group border border-gray-100 dark:border-gray-800">
             <img src="https://images.unsplash.com/photo-1481481600674-e9a5c88b64a2?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover bg-white dark:bg-gray-800 p-4 group-hover:scale-105 transition-transform duration-700" alt="Article Mockup" />
           </div>

           {/* Bottom Left Image */}
           <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-lg bg-[#111827] group flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" alt="Code/Data" />
           </div>

           {/* Bottom Mid Image */}
           <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group flex items-center justify-center p-6">
             <div className="w-32 h-[90%] bg-black rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500 border border-gray-800"></div>
           </div>

           {/* Bottom Right Image */}
           <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-lg group">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="User Portrait" />
           </div>
        </div>
      </div>

      {/* The Impact */}
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="bg-gradient-to-br from-[#c99414] via-[#e2ab24] to-[#f4d048] rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white mb-24 relative z-10 border-b border-white/20 pb-16">
              <div className="text-center md:text-left space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-bold italic tracking-tighter">40%</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">reduction in publish time</div>
              </div>
              <div className="text-center md:text-left space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-bold italic tracking-tighter">3M+</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">monthly active users</div>
              </div>
              <div className="text-center md:text-left space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-bold italic tracking-tighter">100%</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">visual consistency</div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-end justify-between gap-10 relative z-10">
              <div className="max-w-lg">
                 <h2 className="text-3xl font-headline italic font-bold text-white mb-4">The Impact</h2>
                 <p className="text-white/80 font-light leading-relaxed text-sm">
                   The redesign didn't just change the visuals, it fundamentally altered the way News operates, allowing their team to scale in digital environments faster than ever before.
                 </p>
              </div>
              <div>
                 <Link href="/work" className="inline-flex items-center gap-3 px-8 py-4 bg-[#f0b92f] text-gray-900 dark:text-gray-50 font-bold rounded-full shadow-lg hover:bg-white dark:bg-gray-800 transition-colors duration-300 text-sm hover:scale-105 hover:-translate-y-1">
                   View Next Project
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                 </Link>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
}
