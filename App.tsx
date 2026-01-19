
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AICoach from './components/AICoach';
import StoryPage from './pages/StoryPage';
import HeroCirclePage from './pages/HeroCirclePage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'story' | 'hero-circle' | 'contact'>('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const blogPosts = [
    {
      subtitle: "Strategia 01",
      title: "Autenticità Radicale",
      desc: "Estrarre il valore unico e comunicarlo senza filtri per dominare il mercato.",
      img: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1200"
    },
    {
      subtitle: "Strategia 02",
      title: "Posizionamento Elite",
      desc: "Trovare il tuo 'Blue Ocean' e dominare la tua nicchia con autorità assoluta.",
      img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200"
    },
    {
      subtitle: "Strategia 03",
      title: "Ecosistema di Valore",
      desc: "Progettare touchpoint che guidano l'utente dal primo incontro alla conversione.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
    },
    {
      subtitle: "Strategia 04",
      title: "Network d'Influenza",
      desc: "Costruire relazioni strategiche per mobilitare capitali e opportunità.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const navigateTo = (page: 'home' | 'story' | 'hero-circle' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'story':
        return <StoryPage />;
      case 'hero-circle':
        return <HeroCirclePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            {/* SEZIONE: LA MIA STORIA (Preview) */}
            <section id="story-preview" className="bg-white relative overflow-hidden py-20 md:py-32 border-b border-gray-100">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="flex-1 text-left reveal reveal-slide-left">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-[1px] bg-gray-300"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">L'Uomo dietro il Metodo</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                      Will <br />
                      <span className="text-metallic-silver">Fernandez</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10 max-w-xl">
                      Oltre i titoli e i certificati, c'è una missione: aiutare leader e visionari a sbloccare quel 1% di potenziale che fa la differenza tra il successo e l'eccellenza assoluta.
                    </p>
                    <button 
                      onClick={() => navigateTo('story')}
                      className="inline-flex items-center gap-4 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl group border border-gray-700"
                    >
                      Scopri la mia storia
                      <div className="bg-metallic-silver p-1 rounded-full group-hover:translate-x-1 transition-transform">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </div>
                    </button>
                  </div>
                  <div className="flex-1 relative reveal reveal-fade w-full">
                    <div className="relative w-full max-w-lg mx-auto">
                      <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 p-1 bg-gradient-to-br from-gray-200 to-white">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                          alt="Will Fernandez Portrait" 
                          className="w-full h-auto grayscale rounded-[2rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SEZIONE: HERO CIRCLE (Preview) */}
            <section id="methodology-preview" className="bg-gray-50 py-20 md:py-32">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 reveal reveal-fade">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-md leading-tight">
                    Entra nell'<span className="text-metallic-silver">Hero Circle</span>
                  </h2>
                  <button 
                    onClick={() => navigateTo('hero-circle')}
                    className="bg-metallic-silver text-black px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all text-sm group shadow-lg"
                  >
                    Scopri la Tribù
                    <div className="bg-white/40 p-1 rounded-full group-hover:bg-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                  <div className="flex-1 w-full space-y-6 reveal reveal-slide-left">
                    <p className="text-gray-500 text-lg mb-8">Non è solo coaching. È una famiglia di leader che hanno deciso di non camminare più da soli.</p>
                    {[
                      "Accesso a una rete d'élite globale",
                      "Supporto reciproco e accountability radicale"
                    ].map((text, i) => (
                      <div key={i} className="flex justify-between items-center py-6 border-b border-gray-200 group cursor-pointer hover:px-2 transition-all">
                        <span className="text-lg md:text-xl font-semibold text-gray-700">{text}</span>
                        <div className="border border-gray-300 p-2 rounded-full group-hover:bg-metallic-silver transition-all">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 w-full reveal reveal-fade">
                    <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] relative border border-gray-200 p-1 bg-metallic-silver">
                      <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
                        alt="Hero Circle Community" 
                        className="w-full h-full object-cover grayscale rounded-[1.8rem] md:rounded-[2.8rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BLOG SECTION - REFINED SUPERPOSITION STACKING */}
            <section id="blog" className="bg-black py-32 md:py-48 relative">
              <div className="container mx-auto px-6 max-w-4xl text-center mb-40 reveal reveal-fade">
                <span className="text-white text-[11px] font-black uppercase tracking-[0.6em] mb-6 block">Personal Branding Insight</span>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-none uppercase tracking-tighter">
                  Strategie <br />
                  <span className="text-metallic-silver">Superposition</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                  Uno stack evolutivo di autorità. Ogni card si appoggia e sovrasta la precedente, creando un momentum inarrestabile.
                </p>
              </div>

              {/* Card Stacking Container */}
              <div className="container mx-auto px-6 max-w-5xl relative flex flex-col items-center">
                {blogPosts.map((project, i) => {
                  const baseStickyTop = 120; 
                  const stackDepthOffset = 35; 
                  const cardTop = baseStickyTop + (i * stackDepthOffset);
                  
                  return (
                    <div 
                      key={i} 
                      className="blog-post-card sticky rounded-[4rem] overflow-hidden mb-[30vh] border border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,1)] group transition-all duration-700"
                      style={{ 
                        zIndex: 10 + i, 
                        top: `${cardTop}px`,
                        backgroundColor: '#050505',
                        width: '100%',
                        minHeight: '550px'
                      }}
                    >
                      {/* Background Image - High Visibility, subtle tint */}
                      <div className="absolute inset-0 opacity-70 grayscale-[0.2] group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000 group-hover:scale-105">
                        <img src={project.img} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/70"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-20 text-center z-10 min-h-[550px]">
                        
                        {/* Title Header Always Visible */}
                        <div className="mb-4 transform transition-all duration-700 group-hover:-translate-y-2">
                          <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                            {project.title}
                          </h3>
                        </div>

                        {/* Details revealed on hover or in view - AS PER REQUESTED CODE SNIPPET */}
                        <div className="mt-10 space-y-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                          <p className="text-metallic-silver font-black tracking-[0.2em] uppercase text-xs md:text-sm">
                            {project.subtitle} • {project.desc}
                          </p>
                          <a 
                            href="#"
                            className="bg-white text-black font-black px-10 py-4 rounded-full uppercase text-xs tracking-widest inline-block hover:bg-metallic-silver hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl"
                          >
                            Scopri la strategia
                          </a>
                        </div>
                      </div>

                      {/* Decorative edge line - Silver accent */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full mt-6 group-hover:bg-metallic-silver/50 transition-colors duration-500"></div>
                      
                      {/* Side Index */}
                      <div className="absolute top-12 right-12 text-white/5 font-black text-6xl md:text-8xl select-none group-hover:text-metallic-silver/10 transition-colors">
                        0{i+1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section id="testimonials" className="bg-gray-50 py-20 md:py-32">
              <div className="container mx-auto px-6 max-w-7xl text-center">
                <div className="mb-16 reveal reveal-fade">
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Testimonianze</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Cosa dicono i <span className="text-metallic-silver">miei clienti</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Sara J.", role: "CEO @ TechFlow", icon: "https://i.pravatar.cc/150?u=sara", text: "Il metodo Hero Circle ha cambiato il mio approccio alla produttività." },
                    { name: "Marco B.", role: "Founder @ EliteX", icon: "https://i.pravatar.cc/150?u=marco", text: "Un sistema di coaching che bilancia performance e benessere reale." },
                    { name: "Elena R.", role: "Lead Creative", icon: "https://i.pravatar.cc/150?u=elena", text: "La strategia di branding mi ha dato la sicurezza necessaria per guidare." }
                  ].map((t, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] text-left border border-gray-100 hover:shadow-2xl transition-all group reveal reveal-fade" style={{ transitionDelay: `${i * 100}ms` }}>
                      <p className="text-gray-600 italic mb-8 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 grayscale group-hover:grayscale-0 transition-all">
                          <img src={t.icon} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover:text-metallic-silver transition-colors">{t.name}</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="bg-black font-['Montserrat'] overflow-x-hidden">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      {renderContent()}

      <Footer onNavigate={navigateTo} />
      <AICoach />
    </div>
  );
};

export default App;
