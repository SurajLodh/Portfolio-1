"use client";

import React, { useState } from 'react';

export default function ContactsPage() {
  const [selectedInterest, setSelectedInterest] = useState('UI/UX Design');
  const interests = ['UI/UX Design', 'Visual Identity', 'User Research'];

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0f172a] transition-colors duration-300 w-full min-h-screen text-gray-900 dark:text-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-2 lg:pt-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 lg:mb-32">
          
          {/* Left Column */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="text-gray-500 dark:text-gray-400 text-xs font-label uppercase tracking-[0.2em]">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl font-headline font-semibold text-gray-900 dark:text-gray-50 leading-[1.1] tracking-tight">
                Let's craft <br />
                your next <br />
                <span className="italic text-[#e9c766]">story.</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md font-light leading-relaxed">
              I specialize in weaving data into compelling digital narratives. Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
            </p>

            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#e2e8f0] dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a37b12]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                hello@gurusha.design
              </div>
              <br />
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#e2e8f0] dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#a37b12]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Based in New Delhi
              </div>
            </div>

            <div className="relative pt-12 max-w-sm">
              <div className="absolute top-8 left-0 right-0 h-64 bg-[#fbf5dc] dark:bg-[#403310] rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-80 object-cover rounded-[2rem] shadow-xl grayscale"
              />
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-[#e9c766] px-8 py-6 rounded-2xl shadow-xl max-w-[240px]">
                <p className="font-headline italic text-gray-900 dark:text-gray-50 text-lg leading-snug">
                  "Design is intelligence made visible."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 lg:mt-0 mt-20">
            <div className="bg-white dark:bg-gray-900/50 dark:backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 shadow-2xl dark:border dark:border-gray-800 relative">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#fbf5dc] dark:bg-[#f4c844]/10 rounded-full blur-3xl -z-10 opacity-60"></div>
              
              <form className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Gurusha Arora" 
                      className="w-full pb-3 border-b border-gray-200 dark:border-gray-700 focus:border-[#e9c766] dark:focus:border-[#f4c844] outline-none transition-colors text-gray-900 dark:text-gray-50 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full pb-3 border-b border-gray-200 dark:border-gray-700 focus:border-[#e9c766] dark:focus:border-[#f4c844] outline-none transition-colors text-gray-900 dark:text-gray-50 bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block">Interest</label>
                  <div className="flex flex-wrap gap-4">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setSelectedInterest(interest)}
                        className={`px-5 py-2.5 font-semibold text-sm rounded-full transition-colors ${
                          selectedInterest === interest
                            ? 'bg-[#f0b92f] text-gray-900 dark:text-gray-50'
                            : 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block">Message</label>
                  <textarea 
                    placeholder="Tell me about your project or vision..." 
                    className="w-full pb-10 border-b border-gray-200 focus:border-[#e9c766] outline-none transition-colors resize-none text-gray-900 dark:text-gray-50 bg-transparent placeholder:text-gray-300 mt-2"
                    rows={2}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold">
                    Average Response Time: {'<'} 24h
                  </span>
                  <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[#111827] dark:bg-[#f4c844] text-white dark:text-[#251a00] font-bold text-sm rounded-full hover:bg-black dark:hover:bg-[#dfb12c] transition-colors flex items-center justify-center gap-3 shadow-lg">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-200 pt-20">
          <div className="space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08210] dark:text-[#f4c844]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" x2="15" y1="10" y2="10"></line><line x1="12" x2="12" y1="7" y2="13"></line></svg>
            <h3 className="text-2xl font-headline italic font-bold text-gray-900 dark:text-gray-50">Discovery Call</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light pr-4">
              A 30-minute deep dive to understand your business goals, user needs, and the impact you want to create.
            </p>
          </div>
          
          <div className="space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08210] dark:text-[#f4c844]"><circle cx="12" cy="5" r="2"></circle><path d="M4 22 10.5 8.5"></path><path d="M20 22 13.5 8.5"></path><path d="M6 16h12"></path></svg>
            <h3 className="text-2xl font-headline italic font-bold text-gray-900 dark:text-gray-50">Strategic Blueprint</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light pr-4">
              Translating insights into a curated design roadmap with defined milestones and success metrics.
            </p>
          </div>

          <div className="space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b08210] dark:text-[#f4c844]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            <h3 className="text-2xl font-headline italic font-bold text-gray-900 dark:text-gray-50">Refined Execution</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light pr-4">
              Polished, accessible, and high-converting interfaces that feel as good as they look.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
