
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users, 
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
  BarChart3,
  CalendarDays,
  ArrowLeft,
  ExternalLink,
  Send
} from 'lucide-react';

// --- Shared Components ---

const CTAButton = ({ className = "", children = "Book a Free Consultation" }) => (
  <button
    className={`gradient-bg px-8 py-4 rounded-full font-bold text-white hover:opacity-90 transition-all transform hover:scale-105 glow-purple ${className}`}
    data-cal-link="sayed-akbar-saadat-pevegt/discovery-call"
    data-cal-namespace="discovery-call"
    data-cal-config='{"layout":"month_view"}'
  >
    {children}
  </button>
);

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <div 
    className="group flex items-center gap-3 cursor-pointer select-none" 
    onClick={onClick}
  >
    {/* Icon Part: White circle with black diamond */}
    <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      {/* Rotation removed as requested */}
      <div className="w-4 h-4 bg-black rounded-sm transform rotate-45 transition-all duration-300 ease-out group-hover:scale-110"></div>
    </div>
    
    {/* Text Part: NEXTFLOW (white) AI (purple) */}
    <div className="flex items-baseline font-bold tracking-tighter text-2xl uppercase">
      <span className="text-white">NextFlow</span>
      <span className="text-[#a855f7] ml-1.5">AI</span>
    </div>
  </div>
);

// --- Page Components ---

const Navbar = ({ setView }: { setView: (v: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <button onClick={handleHomeClick} className="hover:text-white transition-colors">Home</button>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); setView('home'); setTimeout(() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Benefits</a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); setView('home'); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">How it Works</a>
          <button onClick={() => setView('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
        <button
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all"
          data-cal-link="sayed-akbar-saadat-pevegt/discovery-call"
          data-cal-namespace="discovery-call"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
};

const PrivacyPage = ({ setView }: { setView: (v: string) => void }) => (
  <div className="pt-32 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      <div className="glass-card p-8 md:p-12 rounded-3xl text-gray-300 space-y-6 leading-relaxed">
        <p className="font-bold text-white">NextFlow AI Privacy Policy</p>
        <p className="text-sm">Last updated: January 2024</p>
        
        <p>This Privacy Policy describes how NextFlow AI (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or communicate with us (collectively, the "Services").</p>

        <h3 className="text-xl font-bold text-white mt-8">1. How We Collect Your Personal Information</h3>
        <p>To provide the Services, we collect personal information about you from a variety of sources. The information we collect directly from you may include: basic contact details (name, address, phone number, email), account information, and customer support communications.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">2. Information Collected Through Cookies</h3>
        <p>We automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies. Usage Data may include information about how you access and use our Site, including device information, browser information, and IP address.</p>

        <h3 className="text-xl font-bold text-white mt-8">3. How We Use Your Personal Information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing Products and Services to perform our contract with you.</li>
          <li>Marketing and Advertising to send promotional communications.</li>
          <li>Security and Fraud Prevention to detect and investigate malicious activity.</li>
          <li>Communicating with you to provide customer support.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">4. Your Rights and Choices</h3>
        <p>Depending on where you live, you may have rights relating to your personal information, including the right to access, delete, correct, or opt out of targeted advertising.</p>

        <h3 className="text-xl font-bold text-white mt-8">5. Contact</h3>
        <p>If you have complaints about how we process your personal information, please contact us at: <span className="text-purple-400">sayedakbar@aivoicehub.site</span></p>
      </div>
    </div>
  </div>
);

const TermsPage = ({ setView }: { setView: (v: string) => void }) => (
  <div className="pt-32 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
      <div className="glass-card p-8 md:p-12 rounded-3xl text-gray-300 space-y-6 leading-relaxed">
        <p className="font-bold text-white">TERMS OF SERVICE</p>
        
        <h3 className="text-xl font-bold text-white mt-8">OVERVIEW</h3>
        <p>This website is operated by NextFlow AI. Throughout the site, the terms “we”, “us” and “our” refer to NextFlow AI. NextFlow AI offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
        
        <h3 className="text-xl font-bold text-white mt-8">SECTION 1 - ONLINE STORE TERMS</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 2 - GENERAL CONDITIONS</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 13 - DISCLAIMER OF WARRANTIES</h3>
        <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. In no case shall NextFlow AI, our directors, officers, employees, or affiliates be liable for any injury, loss, or claim.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 18 - GOVERNING LAW</h3>
        <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United Arab Emirates.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 20 - CONTACT INFORMATION</h3>
        <p>Questions about the Terms of Service should be sent to us at <span className="text-purple-400">sayedakbar@aivoicehub.site</span>.</p>
      </div>
    </div>
  </div>
);

const ContactPage = ({ setView }: { setView: (v: string) => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sayedakbar@aivoicehub.site?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => { setView('home'); window.scrollTo(0,0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </button>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="gradient-text">Connect.</span></h1>
            <p className="text-xl text-gray-400 mb-10">Whether you're ready to automate your lead flow or just have a few questions, we're here to help.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <a href="mailto:sayedakbar@aivoicehub.site" className="text-lg font-bold hover:text-purple-400 transition-colors">sayedakbar@aivoicehub.site</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <CalendarDays size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fast Track</p>
                  <button 
                    data-cal-link="sayed-akbar-saadat-pevegt/discovery-call"
                    data-cal-namespace="discovery-call"
                    data-cal-config='{"layout":"month_view"}'
                    className="text-lg font-bold hover:text-purple-400 transition-colors text-left"
                  >
                    Book a Discovery Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-3xl border border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -z-10"></div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" 
                  placeholder="Jane Doe" 
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" 
                  placeholder="jane@realty.com" 
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" 
                  placeholder="How can we help your business?"
                ></textarea>
              </div>
              <button type="submit" className="w-full gradient-bg py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Send size={18} /> Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Landing Page Sections ---

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-10"></div>
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
        <span className="ml-2 text-sm font-medium text-gray-400">Trusted by top Real Estate Teams</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight max-w-5xl mx-auto leading-tight">
        Capture Leads Instantly, <span className="gradient-text">Convert 24/7.</span>
      </h1>
      <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Stop losing deals because you were at a showing. Our AI instantly calls, texts, and qualifies your leads—booking them directly into your calendar.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <CTAButton className="w-full sm:w-auto" />
        <p className="text-gray-500 text-sm italic">Never miss a lead again, day or night.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { metric: "5-Sec", label: "Response Time" },
          { metric: "100%", label: "Lead Coverage" },
          { metric: "3x", label: "Appointment Rate" },
          { metric: "24/7", label: "Active Availability" }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold mb-1 gradient-text">{item.metric}</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-20 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Old Way vs <span className="text-purple-500">The NextFlow Way</span></h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div> The Old Way
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">❌ <span>Leads sit in your CRM for hours until you're free.</span></li>
            <li className="flex gap-3">❌ <span>Missing calls from Zillow while at a closing.</span></li>
            <li className="flex gap-3">❌ <span>Manual follow-ups that get forgotten.</span></li>
            <li className="flex gap-3">❌ <span>Lead goes cold and moves to the next agent.</span></li>
          </ul>
        </div>
        <div className="bg-purple-500/5 border border-purple-500/20 p-8 rounded-3xl glow-purple">
          <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div> The NextFlow Way
          </h3>
          <ul className="space-y-4 text-gray-200">
            <li className="flex gap-3 font-medium">✅ <span className="text-white">AI calls leads within 30 seconds of submission.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Personalized SMS & Email sequences that never stop.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Instant qualification via AI conversation.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Direct call transfer if you're available.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions Built for Conversion</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">We don't just "notify" you about leads. We build the system that closes them.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Phone className="text-purple-500" size={32} />,
            title: "Instant AI Call-Back",
            desc: "When a lead enters your system, our AI calls them instantly, qualifies them, and can even transfer them live to your phone."
          },
          {
            icon: <MessageSquare className="text-purple-500" size={32} />,
            title: "Multi-Channel Follow-up",
            desc: "Omnichannel persistence. We engage through SMS, Email, and Voice concurrently to ensure the highest possible reach rate."
          },
          {
            icon: <BarChart3 className="text-purple-500" size={32} />,
            title: "Automated Qualification",
            desc: "AI identifies if the lead is a buyer/seller, their budget, timeline, and location before it ever touches your schedule."
          }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-10 rounded-3xl hover:border-purple-500/50 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-24 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why Leading Agents Choose NextFlow</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Eliminate Lead Decay</h4>
                <p className="text-gray-400">A lead's interest drops by 80% after 5 minutes of no response. We respond in seconds.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">High-Fidelity AI</h4>
                <p className="text-gray-400">Our voice and text AI sounds human, warm, and professional. No robotic scripts.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Scale Without Hiring</h4>
                <p className="text-gray-400">Get the results of a 10-person ISA team for a fraction of the cost, with 100% reliability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="relative glass-card p-2 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="rounded-2xl border border-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">The 3-Step Success Path</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0"></div>
        {[
          { step: "01", title: "Connect Sources", desc: "We link your Zillow, Realtor.com, Facebook Ads, and Website to our AI central hub." },
          { step: "02", title: "Design Persona", desc: "We craft an AI voice and messaging style that perfectly matches your brand identity." },
          { step: "03", title: "Leads on Autopilot", desc: "Sit back as leads are qualified and booked into your calendar while you work or sleep." }
        ].map((item, idx) => (
          <div key={idx} className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-purple-500 mx-auto mb-8 flex items-center justify-center text-2xl font-black text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              {item.step}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-400">Results from real estate teams across North America.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Jenkins",
            role: "Principal Broker, SJ Realty",
            content: "NextFlow changed my life. I used to be glued to my phone 24/7. Now I wake up to 2-3 booked appointments every single morning.",
            image: "https://i.pravatar.cc/150?u=sarah"
          },
          {
            name: "Marcus Thorne",
            role: "Luxury Agent, Bev Hills",
            content: "The speed-to-lead is insane. My conversion rate on Facebook leads has nearly tripled because the AI catches them while they're still on their couch.",
            image: "https://i.pravatar.cc/150?u=marcus"
          },
          {
            name: "David Chen",
            role: "Team Leader, 50+ Agents",
            content: "We replaced our entire ISA team with NextFlow. Better coverage, no drama, and a fraction of the cost. Highly recommended.",
            image: "https://i.pravatar.cc/150?u=david"
          }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
            </div>
            <p className="text-gray-300 italic mb-8">"{item.content}"</p>
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border border-purple-500/30" />
              <div>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-2">
        <FAQItem 
          question="How fast is the response time?" 
          answer="Our system responds to new lead arrivals in under 30 seconds. In many cases, it is near-instant, ensuring you are the first agent the lead speaks to."
        />
        <FAQItem 
          question="Does the AI sound robotic?" 
          answer="Not at all. We use state-of-the-art natural language processing and ultra-realistic voice models. Most leads can't tell they are speaking with an AI agent."
        />
        <FAQItem 
          question="Which CRMs do you integrate with?" 
          answer="We integrate with almost every major Real Estate CRM including Follow Up Boss, KVCore, BoomTown, Chime, and more via direct API or Zapier."
        />
        <FAQItem 
          question="What happens if I want to take over the call?" 
          answer="The AI can be configured to live-transfer the lead to your cell phone if they are highly qualified and you are available. If not, it simply books a meeting on your calendar."
        />
        <FAQItem 
          question="Is there a contract?" 
          answer="We offer flexible month-to-month plans as well as discounted annual commitments. We believe in earning your business every single month."
        />
      </div>
    </div>
  </section>
);

const Footer = ({ setView }: { setView: (v: string) => void }) => (
  <footer className="py-12 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <button onClick={() => { setView('privacy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => { setView('terms'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Terms of Service</button>
          <button onClick={() => { setView('contact'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Contact Us</button>
        </div>
        <p className="text-gray-500 text-sm">© 2026 NextFlow AI Agency.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    // Only auto-scroll to top if we are switching views
    // For smooth anchors, we handle explicitly in clicks
    if (view !== 'home') window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch(view) {
      case 'privacy': return <PrivacyPage setView={setView} />;
      case 'terms': return <TermsPage setView={setView} />;
      case 'contact': return <ContactPage setView={setView} />;
      default: return (
        <>
          <Hero />
          <Comparison />
          <Solutions />
          <Benefits />
          <Process />
          <Testimonials />
          
          <section className="py-20 bg-purple-600/10">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to stop chasing leads?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join the top 1% of agents who use AI to work less and close more. Book your discovery call today.</p>
              <CTAButton />
            </div>
          </section>

          <FAQ />

          <section id="book" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-8">Book Your Speed-to-Lead Audit</h2>
              <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border border-purple-500/20">
                <p className="text-xl text-gray-400 mb-8">Schedule 15 minutes to see how we can automate your lead flow.</p>
                <CTAButton className="text-lg px-12 py-5" />
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Free Implementation Plan</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Lead Flow Analysis</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> CRM Integration Audit</div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar setView={setView} />
      <main>
        {renderView()}
      </main>
      <Footer setView={setView} />
    </div>
  );
}
