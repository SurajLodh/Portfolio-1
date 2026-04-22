'use client';

import React from 'react';

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative py-2 md:py-4 overflow-hidden bg-white dark:bg-[#0f172a] transition-colors duration-300 flex items-center min-h-[calc(100vh-6rem)]" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full">
        <div className="flex-1 space-y-5 z-10 w-full mt-4 md:mt-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#fcf1c5] dark:bg-[#403310] text-[#8e6e14] dark:text-[#f4c844] font-bold text-[10px] tracking-widest uppercase transition-colors">
            UI/UX DESIGNER
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline font-extrabold text-gray-900 dark:text-gray-50 transition-colors leading-[1.1]">
            <span className="block overflow-hidden pb-2 -mb-2 md:pb-3 md:-mb-3">
              <span className="block" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' }}>Hello, my</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2 md:pb-3 md:-mb-3">
              <span className="block" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both' }}>name is</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2 md:pb-3 md:-mb-3">
              <span className="block italic font-normal" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}>Gurusha</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2 md:pb-3 md:-mb-3">
              <span className="block italic font-normal text-[#b08210] dark:text-[#f4c844] transition-colors" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' }}>Arora.</span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 transition-colors max-w-lg leading-relaxed font-light pb-0 md:pb-1">
            UX/UI Designer with 2+ years of experience crafting intuitive, data-informed digital experiences. Blending user empathy with business outcomes across ERP, media, and accessibility platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              className="px-8 py-3 bg-[#cf9a17] dark:bg-[#f4c844] text-white dark:text-[#251a00] font-semibold rounded shadow hover:bg-[#b08210] dark:hover:bg-[#dfb12c] transition-colors flex items-center gap-2 text-sm cursor-pointer" 
              href="#work"
              onClick={scrollToWork}
            >
              Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a 
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm" 
              href="https://linkedin.com/in/gurushaarora1611" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center items-center mt-8 md:mt-0">
          {/* Subtle yellow glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#fbf5dc] dark:bg-[#403310] transition-colors rounded-full blur-3xl -z-10"></div>
          
          <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#e9c766] shadow-xl">
              <img 
                alt="Gurusha Arora" 
                className="w-full h-full object-cover grayscale opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUg3TOQLHfUIypLJPqCXzfn4-mvBrP-bF4oLeBOwvaHCCZUs_RdK_ucoiMj1qV9F-u_x7_qxroqJSpL7MnGExzPcTUOiJKn8miXum5BwcXJsxhZqNsW1J-LIpddt3bUDGCSVm2DzT7Ok098JaXDkIdc09IpY58FDzqXNkHtRxOLk4hYmpUTAmLMt90TrioLy9dz4N1vPD6pP665baImdLLifezwePxLkyhGWyW5MqqIwGCOyIW3umnpgNv_EL-EEkuTGfHaEEVohk"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
