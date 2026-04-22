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
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-24">
        {/* Logo */}
        <Link href="/" className="text-3xl font-headline font-bold text-[#0f172a] dark:text-white italic tracking-tight">
          Gurusha Arora
        </Link>
        
        {/* Desktop Navigation Links & Button */}
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

        {/* Mobile — Theme toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Close on route change
  React.useEffect(() => { setOpen(false); }, [pathname]);

  const linkClass = (active: boolean) =>
    `block w-full text-left px-4 py-3 rounded-lg font-label text-sm uppercase tracking-widest font-medium transition-all ${
      active
        ? 'bg-[#fef9ec] dark:bg-[#403310] text-[#b08210] dark:text-[#f4c844]'
        : 'text-[#64748b] dark:text-gray-300 hover:bg-gray-100 active:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-800'
    }`;

  return (
    <div ref={menuRef} className="relative">
      {/* Hamburger / Close button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md text-gray-900 dark:text-white transition-all active:scale-90"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? (
          /* X icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-[calc(100%+0.5rem)] w-56 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-2 flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className={linkClass(pathname === '/')}>Home</Link>
            <Link href="/work" onClick={() => setOpen(false)} className={linkClass(pathname === '/work' || pathname.startsWith('/work/'))}>Work</Link>
            <Link href="/about" onClick={() => setOpen(false)} className={linkClass(pathname === '/about' || pathname.startsWith('/about/'))}>About</Link>
            <Link href="/contacts" onClick={() => setOpen(false)} className={linkClass(pathname === '/contacts' || pathname.startsWith('/contacts/'))}>Contact</Link>
            <div className="mt-1 pt-2 border-t border-gray-100 dark:border-gray-800">
              <a
                href="mailto:gurushaa11@gmail.com"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#987624] to-[#f4c844] text-[#1a1500] font-bold text-sm rounded-lg hover:opacity-90 active:opacity-75 active:scale-95 transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
