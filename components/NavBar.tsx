'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <nav 
      className="fixed top-0 w-full z-50 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all dark:bg-[#0f172a]/80 bg-white/65 backdrop-blur-md"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-24">
        {/* Logo */}
        <Link href="/" className="text-3xl font-headline font-bold text-[#0f172a] dark:text-white italic tracking-tight">
          Gurusha Arora
        </Link>
        
        {/* Navigation Links & Button */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/work"
            className={`${(pathname === '/work' || pathname.startsWith('/work/')) ? 'text-[#1e293b] dark:text-white border-b-2 border-[#f0b92f]' : 'text-[#64748b] hover:text-[#1e293b] dark:text-gray-400 dark:hover:text-gray-100 border-b-2 border-transparent'} pb-1 font-label text-xs uppercase tracking-widest font-medium transition-all`}
          >
            Work
          </Link>
          <Link 
            href="/about"
            className={`${pathname === '/about' || pathname.startsWith('/about/')  ? 'text-[#1e293b] dark:text-white border-b-2 border-[#f0b92f]' : 'text-[#64748b] hover:text-[#1e293b] dark:text-gray-400 dark:hover:text-gray-100 border-b-2 border-transparent'} pb-1 font-label text-xs uppercase tracking-widest font-medium transition-all`}
          >
            About
          </Link>
          <Link 
            href="/contacts"
            className={`${pathname === '/contacts' || pathname.startsWith('/contacts/') ? 'text-[#1e293b] dark:text-white border-b-2 border-[#f0b92f]' : 'text-[#64748b] hover:text-[#1e293b] dark:text-gray-400 dark:hover:text-gray-100 border-b-2 border-transparent'} pb-1 font-label text-xs uppercase tracking-widest font-medium transition-all`}
          >
            Contact
          </Link>
          
          <a 
            href="mailto:gurushaa11@gmail.com"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#987624] to-[#f4c844] text-[#1a1500] font-bold text-sm rounded-md shadow-sm hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-900 transition-transform active:scale-90" aria-label="Toggle Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
}
