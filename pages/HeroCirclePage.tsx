
import React, { useEffect, useRef, useState } from 'react';

// Componente per le Icone 3D Argento
const Silver3DIcon: React.FC<{ type: 'handshake' | 'brain' | 'house' | 'sparkles' }> = ({ type }) => {
  const renderIcon = () => {
    switch (type) {
      case 'handshake':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-2xl">
            <defs>
              <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4b5563', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M7 11L10 14L12 12M17 11L14 14L12 12M12 12L10 10M12 12L14 10" stroke="url(#silver-grad)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glow)" />
            <path d="M16 17C16 17 15 19 12 19C9 19 8 17 8 17" stroke="url(#silver-grad)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" stroke="url(#silver-grad)" strokeWidth="1" className="opacity-30" />
            <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z" fill="url(#silver-grad)" />
          </svg>
        );
      case 'brain':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-2xl">
            <path d="M9.5 14.5C9.5 14.5 8 13 8 11C8 9 9.5 7.5 11.5 7.5C13.5 7.5 14.5 9 14.5 11C14.5 13 13 14.5 13 14.5" stroke="url(#silver-grad)" strokeWidth="1.5" filter="url(#glow)" />
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="url(#silver-grad)" strokeWidth="1" />
            <path d="M12 8V16M8 12H16" stroke="url(#silver-grad)" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="3" fill="url(#silver-grad)" fillOpacity="0.2" />
          </svg>
        );
      case 'house':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-2xl">
            <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="url(#silver-grad)" strokeWidth="1.5" filter="url(#glow)" />
            <path d="M9 21V12H15V21" stroke="url(#silver-grad)" strokeWidth="1.5" />
            <rect x="11" y="7" width="2" height="2" fill="url(#silver-grad)" />
          </svg>
        );
      case 'sparkles':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-2xl">
            <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="url(#silver-grad)" filter="url(#glow)" />
            <path d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z" fill="url(#silver-grad)" className="opacity-60" />
            <path d="M5 16L5.5 18.5L8 19L5.5 19.5L5 22L4.5 19.5L2 19L4.5 18.5L5 16Z" fill="url(#silver-grad)" className="opacity-40" />
          </svg>
        );
    }
  };

  return <div className="flex justify-center items-center">{renderIcon()}</div>;
};

const HeroCirclePage: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [activePoints, setActivePoints] = useState<number[]>([]);

  const pillars = [
    { 
      title: "Accountability Radicale", 
      desc: "In questa tribù, la tua parola è legge. Ci teniamo responsabili a vicenda perché sappiamo che l'eccellenza non ammette scuse.", 
      iconType: "handshake" as const
    },
    { 
      title: "Saggezza Collettiva", 
      desc: "Il genio individuale è limitato. La mente collettiva del Cerchio risolve problemi complessi attraverso prospettive incrociate d'élite.", 
      iconType: "brain" as const
    },
    { 
      title: "Rifugio Sicuro", 
      desc: "Per guidare fuori, devi essere integro dentro. Il Cerchio è l'unico posto dove puoi deporre l'armatura e ricostruire la tua forza.", 
      iconType: "house" as const
    },
    { 
      title: "Eredità Condivisa", 
      desc: "Non costruiamo solo business, costruiamo legami che durano decenni. La tua crescita è la nostra vittoria comune.", 
      iconType: "sparkles" as const
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const points = document.querySelectorAll('.pillar-point');
      const newActivePoints: number[] = [];
      const triggerMargin = window.innerHeight * 0.7;

      points.forEach((point, index) => {
        const rect = point.getBoundingClientRect();
        if (rect.top < triggerMargin) {
          newActivePoints.push(index);
        }
      });

      setActivePoints(newActivePoints);

      if (lineRef.current) {
        const pointsArray = Array.from(points);
        if (pointsArray.length > 0) {
          const firstPoint = pointsArray[0].getBoundingClientRect();
          const lastPoint = pointsArray[pointsArray.length - 1].getBoundingClientRect();
          const currentPos = triggerMargin;
          
          let progress = 0;
          if (currentPos > firstPoint.top) {
            progress = (currentPos - firstPoint.top) / (lastPoint.top - firstPoint.top);
          }
          
          const scrollProgress = Math.max(0, Math.min(1, progress));
          lineRef.current.style.height = `${scrollProgress * 100}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Hero: The Tribe Spirit */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-30"
            alt="Tribe Gathering"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6 reveal reveal-fade">
          <span className="text-metallic-silver text-xs font-black uppercase tracking-[0.5em] mb-6 block">Benvenuto a Casa</span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Più di un Metodo.<br />
            <span className="text-metallic-silver">Una Tribù.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            In un mondo che ti spinge a camminare da solo, l'Hero Circle è il luogo dove la tua ambizione trova una famiglia.
          </p>
        </div>
      </section>

      {/* Philosophy of Belonging */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 reveal reveal-slide-left">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 leading-tight">
                Non siamo numeri. <br />
                Siamo <span className="text-metallic-silver">Legami.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  L'Hero Circle nasce dalla consapevolezza che l'eccellenza solitaria è fragile. Per durare, hai bisogno di specchi onesti e di spalle su cui contare.
                </p>
                <p>
                  Qui non trovi solo coaching strategico, trovi una fratellanza di visionari che condividono le stesse sfide, le stesse paure e la stessa sete di impatto globale.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full reveal reveal-fade">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl p-1 bg-metallic-silver">
                  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale rounded-2xl" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl mt-8 p-1 bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Linear Animation Section (The Silver Thread) */}
      <section className="bg-black py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative">
          <div className="text-center mb-32 reveal reveal-fade">
            <h3 className="text-metallic-silver text-xs font-black uppercase tracking-[0.4em] mb-6">L'Architettura del Cerchio</h3>
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">I Pilastri della <span className="text-metallic-silver">Famiglia</span></h2>
          </div>

          <div className="relative">
            {/* Background Line (Static White Trace) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 z-0"></div>
            
            {/* Animated Active Line */}
            <div 
              ref={lineRef}
              className="absolute left-1/2 top-0 w-[1px] bg-white -translate-x-1/2 z-10 transition-all duration-300 ease-out origin-top"
              style={{ height: '0%' }}
            ></div>

            {/* Pillar Points */}
            <div className="relative z-20 space-y-32 md:space-y-48">
              {pillars.map((pillar, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content Side */}
                  <div className={`flex-1 w-full text-center ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} transition-all duration-1000 ${activePoints.includes(i) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="mb-6 flex justify-center md:justify-end">
                       <Silver3DIcon type={pillar.iconType} />
                    </div>
                    <h4 className={`text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter ${activePoints.includes(i) ? 'text-white' : 'text-gray-600'}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* The Silver Point (Central Anchor) */}
                  <div className="relative flex items-center justify-center pillar-point">
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-700 z-30 ${activePoints.includes(i) ? 'bg-metallic-silver border-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-black border-gray-700 scale-100'}`}></div>
                    {/* Glowing pulse if active */}
                    {activePoints.includes(i) && (
                      <div className="absolute w-8 h-8 rounded-full bg-metallic-silver/20 animate-ping z-20"></div>
                    )}
                  </div>

                  {/* Spacer for reverse layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="bg-black py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 reveal reveal-fade">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">I Rituali del <span className="text-metallic-silver">Cerchio</span></h2>
            <p className="text-gray-400 text-lg">Come viviamo e cresciamo insieme ogni giorno.</p>
          </div>

          <div className="space-y-32">
            {[
              { 
                title: "Deep Dives Mensili", 
                tag: "Sessioni di Gruppo",
                desc: "Workshop intensivi dove smontiamo e rimontiamo le nostre strategie di vita e di business sotto la guida di Will.",
                img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Tribe Retreats", 
                tag: "Esperienze Off-line",
                desc: "Incontri dal vivo in location mozzafiato per riconnetterci con la natura, il corpo e la nostra visione profonda.",
                img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-16 reveal ${i % 2 === 0 ? 'reveal-slide-left' : 'reveal-fade'}`}>
                <div className={`flex-1 ${i % 2 !== 0 ? 'md:order-2 text-right' : 'text-left'}`}>
                  <span className="text-metallic-silver font-bold uppercase tracking-widest text-sm mb-4 block">{item.tag}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[3rem] overflow-hidden border border-gray-800 p-2 bg-gradient-to-br from-gray-700 to-black group">
                    <img src={item.img} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-[2.5rem]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-white py-32 text-center">
        <div className="container mx-auto px-6 max-w-4xl reveal reveal-fade">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-none">
            La tua sedia ti <br />
            sta <span className="text-metallic-silver">aspettando.</span>
          </h2>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
            L'ammissione all'Hero Circle è selettiva. Cerchiamo persone che vogliano dare tanto quanto vogliono ricevere.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Candidati Ora
            </button>
            <button className="border-2 border-black text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Parla con un Membro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroCirclePage;
