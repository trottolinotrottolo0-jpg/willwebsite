
import React, { useState } from 'react';

// Icone Premium per la Filosofia (Mente, Corpo, Spirito)
const PhilosophyIcon: React.FC<{ type: 'mente' | 'corpo' | 'spirito', active: boolean, onHover?: () => void }> = ({ type, active, onHover }) => {
  const gradId = `grad-${type}`;
  return (
    <div 
      onMouseEnter={onHover}
      className={`relative cursor-pointer transition-all duration-[1000ms] ease-out ${active ? 'scale-110 opacity-100' : 'scale-90 opacity-20 grayscale'}`}
    >
      <div className="relative p-6 md:p-8 rounded-full bg-black border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:border-white/30 transition-colors">
        <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 md:w-24 md:h-24">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow-icon-v3">
              <feGaussianBlur stdDeviation="2.5" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          {type === 'mente' && (
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke={`url(#${gradId})`} strokeWidth="1" filter="url(#glow-icon-v3)" />
          )}
          {type === 'mente' && <path d="M12 7V12L15 15" stroke={`url(#${gradId})`} strokeWidth="1.5" strokeLinecap="round" />}
          
          {type === 'corpo' && (
            <>
              <path d="M12 7V17M7 12H17" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" filter="url(#glow-icon-v3)" />
              <circle cx="12" cy="12" r="9" stroke={`url(#${gradId})`} strokeWidth="1" />
            </>
          )}
          
          {type === 'spirito' && (
            <>
              <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" 
                fill={`url(#${gradId})`} fillOpacity="0.2" stroke={`url(#${gradId})`} strokeWidth="1.5" filter="url(#glow-icon-v3)" />
              <circle cx="12" cy="12" r="3" fill={`url(#${gradId})`} fillOpacity="0.4" />
            </>
          )}
        </svg>
      </div>
      {/* Target area per hover più ampia */}
      <div className="absolute inset-0 scale-150 rounded-full z-[-1]"></div>
    </div>
  );
};

const StoryPage: React.FC = () => {
  // activeStep: 0=Mente, 1=Linea1, 2=Corpo, 3=Linea2, 4=Spirito
  const [activeStep, setActiveStep] = useState(0);

  const handleHoverCorpo = () => {
    if (activeStep < 2) {
      setActiveStep(1);
      setTimeout(() => setActiveStep(2), 400);
    }
  };

  const handleHoverSpirito = () => {
    if (activeStep < 4) {
      // Se saltiamo direttamente a Spirito, attiviamo tutto in sequenza rapida
      if (activeStep < 2) {
        setActiveStep(1);
        setTimeout(() => setActiveStep(2), 300);
        setTimeout(() => setActiveStep(3), 600);
        setTimeout(() => setActiveStep(4), 900);
      } else {
        setActiveStep(3);
        setTimeout(() => setActiveStep(4), 400);
      }
    }
  };

  const resetAnimation = () => {
    setActiveStep(0);
  };

  const philosophySteps = [
    { title: "Mente", text: "La padronanza dei propri pensieri è il presupposto per ogni azione di valore." },
    { title: "Corpo", text: "Un'energia biologica ottimizzata permette una produttività che altri definiscono impossibile." },
    { title: "Spirito", text: "Senza uno scopo profondo, il successo è solo un guscio vuoto." },
  ];

  return (
    <div className="pt-24 min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-40"
            alt="Ambition"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 text-center px-6 reveal reveal-fade active">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
            Passione. <span className="text-metallic-silver">Performance.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light tracking-widest uppercase">L'uomo dietro il metodo Hero Circle</p>
        </div>
      </section>

      {/* Philosophy Section - MOUSE RESPONSIVE & SENSITIVE */}
      <section 
        className="bg-black py-40 relative overflow-hidden"
        onMouseLeave={resetAnimation}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-32">
            <span className="text-metallic-silver text-xs font-black uppercase tracking-[0.5em] mb-4 block">Interagisci con i Pilastri</span>
            <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter">
              La Triade dell'<span className="text-metallic-silver">Eccellenza</span>
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-center items-start gap-12 md:gap-0 max-w-6xl mx-auto">
            
            {/* Segmento 1: Mente (Sempre attivo inizialmente) */}
            <div className="flex-1 flex flex-col items-center relative">
              <PhilosophyIcon type="mente" active={activeStep >= 0} />
              <div className={`mt-10 text-center transition-all duration-1000 ${activeStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter mb-2">{philosophySteps[0].title}</h3>
                <p className="text-gray-500 text-xs md:text-sm max-w-[200px] leading-relaxed mx-auto">{philosophySteps[0].text}</p>
              </div>
            </div>

            {/* Linea Connettiva 1 (Segmento isolato) */}
            <div className="hidden md:block w-24 lg:w-32 h-[1px] bg-white/5 mt-20 md:mt-24 self-start relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-white transition-all duration-700 ease-in-out origin-left"
                style={{ 
                  transform: activeStep >= 1 ? 'scaleX(1)' : 'scaleX(0)',
                  boxShadow: activeStep >= 1 ? '0 0 15px rgba(255,255,255,0.4)' : 'none'
                }}
              ></div>
            </div>

            {/* Segmento 2: Corpo (Checkpoint 1) */}
            <div className="flex-1 flex flex-col items-center relative">
              <PhilosophyIcon 
                type="corpo" 
                active={activeStep >= 2} 
                onHover={handleHoverCorpo}
              />
              <div className={`mt-10 text-center transition-all duration-1000 ${activeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 transition-colors duration-500 ${activeStep >= 2 ? 'text-white' : 'text-gray-700'}`}>
                  {philosophySteps[1].title}
                </h3>
                <p className={`text-xs md:text-sm max-w-[200px] leading-relaxed mx-auto transition-colors duration-500 ${activeStep >= 2 ? 'text-gray-500' : 'text-gray-800'}`}>
                  {philosophySteps[1].text}
                </p>
              </div>
            </div>

            {/* Linea Connettiva 2 (Segmento isolato) */}
            <div className="hidden md:block w-24 lg:w-32 h-[1px] bg-white/5 mt-20 md:mt-24 self-start relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-white transition-all duration-700 ease-in-out origin-left"
                style={{ 
                  transform: activeStep >= 3 ? 'scaleX(1)' : 'scaleX(0)',
                  boxShadow: activeStep >= 3 ? '0 0 15px rgba(255,255,255,0.4)' : 'none'
                }}
              ></div>
            </div>

            {/* Segmento 3: Spirito (Checkpoint 2) */}
            <div className="flex-1 flex flex-col items-center relative">
              <PhilosophyIcon 
                type="spirito" 
                active={activeStep >= 4} 
                onHover={handleHoverSpirito}
              />
              <div className={`mt-10 text-center transition-all duration-1000 ${activeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-4'}`}>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter mb-2 transition-colors duration-500 ${activeStep >= 4 ? 'text-white' : 'text-gray-700'}`}>
                  {philosophySteps[2].title}
                </h3>
                <p className={`text-xs md:text-sm max-w-[200px] leading-relaxed mx-auto transition-colors duration-500 ${activeStep >= 4 ? 'text-gray-500' : 'text-gray-800'}`}>
                  {philosophySteps[2].text}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Background Grid Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/[0.03] rotate-12 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/[0.03] -rotate-12 pointer-events-none"></div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-metallic-silver text-xs font-black uppercase tracking-[0.4em] mb-16 text-center">I Miei Traguardi</h3>
          <div className="space-y-24">
            {[
              { year: "2015", title: "Le Fondamenta", desc: "Inizio come Mental Coach per atleti professionisti, focalizzandomi sulla resilienza sotto pressione.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" },
              { year: "2018", title: "L'Espansione", desc: "Lancio del primo programma di Performance Executive per CEO della Silicon Valley.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" },
              { year: "2022", title: "Hero Circle Birth", desc: "Nascita del sistema olistico che integra biologia, psicologia e strategia di mercato.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
            ].map((milestone, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-12 reveal active">
                <div className={`flex-1 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="text-metallic-silver font-black text-4xl mb-2">{milestone.year}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h4>
                  <p className="text-gray-500">{milestone.desc}</p>
                </div>
                <div className="flex-1">
                  <div className="rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-gray-200">
                    <img src={milestone.img} alt={milestone.title} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl reveal active">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">Pronto a scrivere il tuo <span className="text-metallic-silver">prossimo capitolo?</span></h3>
          <p className="text-gray-500 mb-12 text-lg">Inizia oggi il percorso verso la tua versione d'élite.</p>
          <a href="#contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Prenota la tua Sessione
          </a>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
