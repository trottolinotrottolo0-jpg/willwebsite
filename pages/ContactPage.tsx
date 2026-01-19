
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    goal: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per averci contattato. Will o un membro del team ti risponderà entro 24 ore.");
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-600 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center reveal reveal-fade">
          <span className="text-metallic-silver text-xs font-black uppercase tracking-[0.5em] mb-6 block">Accesso Diretto</span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Inizia la tua <br />
            <span className="text-metallic-silver">Ascesa.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Il tempo è la tua risorsa più preziosa. Usiamolo per costruire qualcosa di leggendario.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left side: Form */}
            <div className="flex-[1.5] reveal reveal-slide-left">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 uppercase tracking-tighter">Performance Audit Request</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Will Fernandez"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-metallic-silver/20 focus:bg-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Professionale</label>
                    <input 
                      type="email" 
                      required
                      placeholder="ceo@company.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-metallic-silver/20 focus:bg-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Ruolo / Azienda</label>
                    <input 
                      type="text" 
                      placeholder="Founder & Visionary"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-metallic-silver/20 focus:bg-white transition-all"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Obiettivo Principale</label>
                    <select 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-metallic-silver/20 focus:bg-white transition-all appearance-none cursor-pointer"
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    >
                      <option value="">Seleziona un'area</option>
                      <option value="branding">Personal Branding</option>
                      <option value="performance">Mental Performance</option>
                      <option value="tribe">Hero Circle Membership</option>
                      <option value="consulting">Strategic Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">La tua Visione (Messaggio)</label>
                  <textarea 
                    rows={6}
                    placeholder="Parlami di dove sei oggi e dove vuoi arrivare..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-metallic-silver/20 focus:bg-white transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-6 rounded-full font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-4 group"
                >
                  Invia la Richiesta
                  <div className="bg-metallic-silver p-1 rounded-full group-hover:translate-x-2 transition-transform">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </button>
              </form>
            </div>

            {/* Right side: Info */}
            <div className="flex-1 space-y-16 reveal reveal-fade">
              <div>
                <h3 className="text-metallic-silver text-xs font-black uppercase tracking-[0.4em] mb-8">Canali Diretti</h3>
                <div className="space-y-10">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Strategica</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-metallic-silver transition-colors">info@willfernandez.com</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Networking Professionale</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-metallic-silver transition-colors">LinkedIn Profile</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Instagram Insight</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-metallic-silver transition-colors">@willfernandez_elite</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Base Operativa</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lavoriamo globalmente, ma la nostra mente risiede tra<br />
                  <span className="font-bold text-gray-900">Milano & Londra.</span><br />
                  Incontri esclusivi solo su invito.
                </p>
              </div>

              <div className="rounded-[2rem] overflow-hidden aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt="Workspace"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-white font-black uppercase tracking-widest text-xs">Visita il nostro Hub Virtuale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center reveal reveal-fade">
          <p className="text-2xl md:text-3xl font-light italic text-gray-400 leading-relaxed">
            "La distanza tra chi sei e chi vuoi diventare è solo una decisione coraggiosa. <br />
            <span className="text-gray-900 font-bold not-italic">Cominciamo da qui.</span>"
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
