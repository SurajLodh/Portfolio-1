import React from 'react';
import Link from 'next/link';
import CopyrightYear from './CopyrightYear';

export default function Contacts() {
  return (
    <footer className="w-full bg-[#f8f9fa] dark:bg-[#0b1221] transition-colors duration-300 mt-auto pb-10" id="contacts">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-16 gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-headline font-bold text-gray-900 dark:text-gray-100 transition-colors">Gurusha Arora</div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs font-light text-sm leading-relaxed transition-colors">Available for new opportunities in Product Design and UX Research.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6 text-right">
          <a className="text-2xl font-bold text-[#b08210] dark:text-[#f4c844] hover:text-[#8e6e14] active:text-[#8e6e14] dark:hover:text-[#dfb12c] dark:active:text-[#dfb12c] transition-colors" href="mailto:gurushaa11@gmail.com">
            gurushaa11@gmail.com
          </a>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            <Link className="hover:text-gray-700 active:text-gray-700 dark:hover:text-gray-300 dark:active:text-gray-300 transition-colors" href="/">INSTAGRAM</Link>
            <a className="hover:text-gray-700 active:text-gray-700 dark:hover:text-gray-300 dark:active:text-gray-300 transition-colors" href="https://linkedin.com/in/gurushaarora1611" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <span>GURUSHA ARORA <CopyrightYear /></span>
        <span>CURATED WITH INTENTION</span>
      </div>
    </footer>
  );
}
