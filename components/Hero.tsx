
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);

  // Gestione chiusura con tasto ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVideoActive(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="hero" className="bg-black pt-24 pb-12 px-4 md:px-8 overflow-hidden min-h-screen flex items-center relative">
      
      {/* Main Hero Container - Scalable Background Layer */}
      <div 
        className={`relative w-full max-w-7xl mx-auto min-h-[600px] md:min-h-[500px] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-800 flex flex-col md:block transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) ${isVideoActive ? 'scale-[0.92] blur-md opacity-40' : 'scale-100 opacity-100'}`}
      >
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Will Fernandez"
            className={`w-full h-full object-cover grayscale transition-transform duration-[2000ms] ease-out ${isVideoActive ? 'scale-110' : 'scale-100 opacity-50 md:opacity-60'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content Layer */}
        <div className={`relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white py-16 md:py-12 transition-all duration-700 ${isVideoActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              È tempo di <br /> 
              <span className="text-metallic-silver">Elevarsi nel 2026!</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed font-medium">
              Unisciti a Elite Performance LIVE per un summit virtuale gratuito di 3 giorni che ti aiuterà a costruire un momentum inarrestabile.
            </p>
            <button className="w-full md:w-auto bg-metallic-silver text-black px-8 md:px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl active:scale-95">
              SÌ! SALVA IL MIO POSTO GRATUITO
            </button>
          </div>

          {/* Next Event Card */}
          <div className="mt-12 lg:mt-0 md:absolute md:bottom-8 md:right-8 w-full md:max-w-xs animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-metallic-silver rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Prossimo Evento</span>
              </div>
              
              <div className="relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden mb-3 group/vid border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover/vid:scale-110 transition-transform duration-700"
                  alt="Anteprima Prossimo Evento"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/50">
                    <span className="text-xs md:text-xs font-black uppercase tracking-tighter leading-tight mb-3 text-white">Libera il Potere Interiore</span>
                    <button 
                      onClick={() => setIsVideoActive(true)}
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold transition-all hover:bg-metallic-silver active:scale-95"
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                        Guarda Ora
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay Layer (Apple-like transition) */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) ${isVideoActive ? 'opacity-100 pointer-events-auto backdrop-blur-3xl' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Background Click to Close */}
        <div className="absolute inset-0 bg-black/95 cursor-zoom-out" onClick={() => setIsVideoActive(false)}></div>

        {/* Global Close Button (Always visible at top-right of overlay) */}
        <button 
          onClick={() => setIsVideoActive(false)}
          className={`absolute top-6 right-6 md:top-10 md:right-10 z-[120] w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-all duration-700 ${isVideoActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-75'}`}
          aria-label="Chiudi video"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Video Player Container */}
        <div 
          className={`relative w-full max-w-6xl aspect-video bg-gray-900 rounded-[2rem] overflow-hidden shadow-[0_0_120px_rgba(255,255,255,0.1)] border border-white/10 transition-all duration-[1200ms] cubic-bezier(0.19, 1, 0.22, 1) ${isVideoActive ? 'scale-100 translate-y-0' : 'scale-[0.85] translate-y-24'}`}
        >
          {/* Simulated Video Player */}
          <div className="absolute inset-0 flex items-center justify-center group/player overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Video Content"
            />
            <div className="absolute inset-0 bg-black/20 group-hover/player:bg-black/0 transition-all duration-500"></div>
            
            {/* Play Button Overlay */}
            <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
              <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
            </button>
          </div>

          {/* Video Title & Description Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-1000 delay-300 ${isVideoActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Il Futuro della Performance</h2>
            <p className="text-gray-400 max-w-2xl text-sm md:text-lg">Un'esclusiva anteprima di come la biologia e la mentalità si fondono per creare risultati straordinari. Benvenuto nell'Elite Circle.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
