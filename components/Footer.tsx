
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'story' | 'hero-circle' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact-footer" className="bg-white pt-24 pb-12 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Testimonial Mini Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 reveal reveal-fade">
          {[
            { name: "David R.", role: "Marketing Strategist", img: "https://i.pravatar.cc/150?u=david" },
            { name: "Nadia S.", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?u=nadia" },
            { name: "James T.", role: "Tech Consultant", img: "https://i.pravatar.cc/150?u=james" }
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-lg shadow-gray-100 rounded-2xl p-4 flex items-center gap-4 min-w-[240px] border border-gray-50 transform hover:-translate-y-1 transition-transform">
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Middle Navigation & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-12 mb-12 gap-8 reveal reveal-slide-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 lg:gap-12">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('story')} 
              className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
            >
              La mia storia
            </button>
            <button 
              onClick={() => onNavigate('hero-circle')} 
              className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
            >
              Hero Circle
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
            >
              Contatti
            </button>
            <button 
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors"
            >
              Blog
            </button>
          </div>
          
          <div 
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="bg-white p-1.5 rounded-full shadow-sm">
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-sm font-bold text-gray-900">info@willfernandez.com</span>
          </div>
        </div>
      </div>

      {/* Massive Brand Name Slider - Animated */}
      <div className="relative mb-20 overflow-hidden whitespace-nowrap select-none w-full py-4 reveal reveal-fade">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h2 className="text-[12vw] font-black tracking-tighter uppercase leading-none text-gray-900 px-8">
                Will <span className="text-metallic-silver opacity-80">Fernandez</span>
              </h2>
              <div className="w-4 h-4 rounded-full bg-metallic-silver mx-4"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl reveal reveal-fade" style={{ transitionDelay: '300ms' }}>
        {/* Bottom Socials & Legals */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            <span>@Copyright 2025</span>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          </div>
          
          <div className="flex items-center gap-4">
            {['linkedin', 'instagram', 'facebook', 'twitter'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all text-gray-400 hover:border-black">
                 <span className="sr-only">{social}</span>
                 {social === 'linkedin' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                 {social === 'instagram' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                 {social === 'facebook' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>}
                 {social === 'twitter' && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>}
              </a>
            ))}
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms Condition</a>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
