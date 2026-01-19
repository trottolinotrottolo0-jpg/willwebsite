
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'story' | 'hero-circle' | 'contact') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md text-white py-5 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-16">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-xl tracking-tighter uppercase group flex items-center"
          >
            <span className="font-black">Will</span> <span className="text-metallic-silver font-light transition-all group-hover:tracking-widest ml-1">Fernandez</span>
          </button>
          <div className="hidden lg:flex space-x-8">
            <button
              onClick={() => onNavigate('story')}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${currentPage === 'story' ? 'text-metallic-silver' : 'text-gray-400 hover:text-metallic-silver'}`}
            >
              La mia storia
            </button>
            <button
              onClick={() => onNavigate('hero-circle')}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${currentPage === 'hero-circle' ? 'text-metallic-silver' : 'text-gray-400 hover:text-metallic-silver'}`}
            >
              Hero Circle
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${currentPage === 'contact' ? 'text-metallic-silver' : 'text-gray-400 hover:text-metallic-silver'}`}
            >
              Contatti
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <button className="bg-metallic-silver text-black text-[10px] font-black uppercase tracking-[0.15em] px-8 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg shadow-white/5 active:scale-95">
            Inizia ora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
