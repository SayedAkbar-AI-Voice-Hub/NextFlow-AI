
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
  Send,
  Globe,
  Palette,
  TrendingUp,
  Target,
  Megaphone,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  PenTool,
  Sparkles,
  Rocket,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

// --- Shared Components ---

const CTAButton = ({ className = "", children = "Get Your Free Strategy Call" }) => (
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
      <div className="w-4 h-4 bg-black rounded-sm transform rotate-45 transition-all duration-300 ease-out group-hover:scale-110"></div>
    </div>

    {/* Text Part: Marketing Hub (white) Agency (purple) */}
    <div className="flex items-baseline font-bold tracking-tighter text-xl uppercase">
      <span className="text-white">Marketing Hub</span>
      <span className="text-[#a855f7] ml-1.5">Agency</span>
    </div>
  </div>
);

// --- Opt-In Form Component ---

const OptInForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    smsConsent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/Er1cETQk7bVrn97N4m8N/webhook-trigger/38de9f3d-10f6-4330-915e-510df7e7ee25', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          smsConsent: formData.smsConsent,
          source: 'Marketing Hub Agency - Opt-In Form',
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch {
      // Still show success — webhook may not return CORS headers
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }
    setSubmitting(false);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500";

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">You're In!</h3>
        <p className="text-gray-400">We'll be in touch within 24 hours to discuss your marketing goals.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Your Name *"
        />
      </div>
      <div>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="Email Address *"
        />
      </div>
      <div>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
          placeholder="Phone Number *"
        />
      </div>
      <div>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
          className={inputClass}
          placeholder="Business Name (Optional)"
        />
      </div>

      {/* SMS Consent Checkbox - A2P Compliant */}
      <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={formData.smsConsent}
            onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
            className="peer sr-only"
          />
          <div className="w-5 h-5 border-2 border-gray-500 rounded transition-all peer-checked:border-purple-500 peer-checked:bg-purple-500 group-hover:border-purple-400">
          </div>
          <svg className={`absolute top-0.5 left-0.5 w-4 h-4 text-white transition-opacity ${formData.smsConsent ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-xs text-gray-400 leading-relaxed">
          I consent to receive SMS messages from <span className="font-semibold text-white">Marketing Hub Agency</span> at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out. Consent is not required for purchase.
        </span>
      </label>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full gradient-bg py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Get My Free Strategy Session'} {!submitting && <ArrowRight size={18} />}
      </button>
      <p className="text-xs text-gray-500 text-center">Your data will not be shared with third parties.</p>
    </form>
  );
};

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
          <a href="#services" onClick={(e) => { e.preventDefault(); setView('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors">Services</a>
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
      <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      <div className="glass-card p-8 md:p-12 rounded-3xl text-gray-300 space-y-6 leading-relaxed">
        <p className="font-bold text-white">Marketing Hub Agency Privacy Policy</p>
        <p className="text-sm">Last updated: February 2026</p>

        <p>This Privacy Policy describes how Marketing Hub Agency (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or communicate with us (collectively, the "Services").</p>

        <h3 className="text-xl font-bold text-white mt-8">1. How We Collect Your Personal Information</h3>
        <p>To provide the Services, we collect personal information about you from a variety of sources. The information we collect directly from you may include: basic contact details (name, address, phone number, email), account information, and customer support communications.</p>

        <h3 className="text-xl font-bold text-white mt-8">2. Information Collected Through Cookies</h3>
        <p>We automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies. Usage Data may include information about how you access and use our Site, including device information, browser information, and IP address.</p>

        <h3 className="text-xl font-bold text-white mt-8">3. How We Use Your Personal Information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing Products and Services to perform our contract with you.</li>
          <li>Marketing and Advertising to send promotional communications (only with your explicit consent).</li>
          <li>Security and Fraud Prevention to detect and investigate malicious activity.</li>
          <li>Communicating with you to provide customer support.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">4. SMS/Text Messaging Terms</h3>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 space-y-4">
          <p><strong className="text-white">SMS Consent:</strong> By providing your phone number and checking the SMS consent checkbox(es) on our forms, you expressly consent to receive text messages from Marketing Hub Agency. Your consent is not required as a condition of purchase.</p>

          <p><strong className="text-white">Message Types:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Transactional Messages:</strong> Account alerts, appointment reminders, service notifications, and order updates.</li>
            <li><strong>Marketing Messages:</strong> Promotional offers, discounts, new service announcements, and newsletters (only if you opt-in).</li>
          </ul>

          <p><strong className="text-white">Message Frequency:</strong> Message frequency may vary based on your account activity and preferences. You may receive up to 10 messages per month.</p>

          <p><strong className="text-white">Carrier Charges:</strong> Message and data rates may apply. Check with your mobile carrier for details about your plan.</p>

          <p><strong className="text-white">Opt-Out:</strong> You can opt out of receiving SMS messages at any time by replying STOP to any message. After opting out, you will receive a confirmation message and will no longer receive messages from us.</p>

          <p><strong className="text-white">Help:</strong> For assistance, reply HELP to any message, or contact us at sayedakbar@aivoicehub.site.</p>

          <p className="font-bold text-green-400 border-t border-white/10 pt-4 mt-4">Important: Your SMS consent and phone number will NOT be shared with third parties or affiliates for marketing purposes. We do not sell, rent, or share your mobile phone number with any third parties except as required to provide our Services or as required by law.</p>
        </div>

        <h3 className="text-xl font-bold text-white mt-8">5. Your Rights and Choices</h3>
        <p>Depending on where you live, you may have rights relating to your personal information, including the right to access, delete, correct, or opt out of targeted advertising.</p>

        <h3 className="text-xl font-bold text-white mt-8">6. Contact</h3>
        <p>If you have complaints about how we process your personal information or questions about our SMS messaging program, please contact us at:</p>
        <ul className="list-none space-y-1 mt-2">
          <li><strong className="text-white">Email:</strong> <span className="text-purple-400">sayedakbar@aivoicehub.site</span></li>
          <li><strong className="text-white">Business Name:</strong> Marketing Hub Agency</li>
        </ul>
      </div>
    </div>
  </div>
);

const TermsPage = ({ setView }: { setView: (v: string) => void }) => (
  <div className="pt-32 pb-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
      <div className="glass-card p-8 md:p-12 rounded-3xl text-gray-300 space-y-6 leading-relaxed">
        <p className="font-bold text-white">TERMS OF SERVICE</p>
        <p className="text-sm">Last updated: February 2026</p>

        <h3 className="text-xl font-bold text-white mt-8">OVERVIEW</h3>
        <p>This website is operated by Marketing Hub Agency. Throughout the site, the terms "we", "us" and "our" refer to Marketing Hub Agency. Marketing Hub Agency offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 1 - GENERAL TERMS</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 2 - GENERAL CONDITIONS</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 3 - SMS/TEXT MESSAGING TERMS</h3>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 space-y-4">
          <p><strong className="text-white">Consent:</strong> By opting in to receive SMS messages from Marketing Hub Agency, you agree to receive recurring automated text messages at the mobile number provided. Your consent is not a condition of any purchase.</p>

          <p><strong className="text-white">Message Frequency:</strong> Message frequency varies based on your interactions and preferences.</p>

          <p><strong className="text-white">Costs:</strong> Message and data rates may apply. You are responsible for all charges from your mobile carrier.</p>

          <p><strong className="text-white">Opt-Out:</strong> To stop receiving messages, reply STOP at any time. You will receive a confirmation message.</p>

          <p><strong className="text-white">Help:</strong> For help, reply HELP or contact sayedakbar@aivoicehub.site.</p>

          <p><strong className="text-white">Sample Messages:</strong></p>
          <div className="bg-black/30 rounded-lg p-4 space-y-2 font-mono text-sm">
            <p className="text-gray-400">Transactional Examples:</p>
            <p className="text-green-400">"Hi [Name], your Marketing Hub Agency appointment is confirmed for [Date] at [Time]. Reply HELP for help, STOP to cancel."</p>
            <p className="text-green-400">"Marketing Hub Agency: Your campaign report is ready! Check your email for details. Reply STOP to opt out."</p>
            <p className="text-gray-400 mt-4">Marketing Examples (requires opt-in):</p>
            <p className="text-blue-400">"Marketing Hub Agency: 🎉 Limited offer! Get 20% off your next marketing package. Reply STOP to opt out."</p>
            <p className="text-blue-400">"Marketing Hub Agency: New AI marketing tools available! Book your free demo. Reply STOP to unsubscribe."</p>
          </div>

          <p className="font-bold text-green-400 border-t border-white/10 pt-4 mt-4">Your SMS consent, opt-in data, and phone number will NOT be shared, sold, or rented to any third parties or affiliates for their marketing purposes.</p>
        </div>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 4 - DISCLAIMER OF WARRANTIES</h3>
        <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. In no case shall Marketing Hub Agency, our directors, officers, employees, or affiliates be liable for any injury, loss, or claim.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 5 - GOVERNING LAW</h3>
        <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United Arab Emirates.</p>

        <h3 className="text-xl font-bold text-white mt-8">SECTION 6 - CONTACT INFORMATION</h3>
        <p>Questions about the Terms of Service should be sent to us at:</p>
        <ul className="list-none space-y-1 mt-2">
          <li><strong className="text-white">Email:</strong> <span className="text-purple-400">sayedakbar@aivoicehub.site</span></li>
          <li><strong className="text-white">Business Name:</strong> Marketing Hub Agency</li>
        </ul>
      </div>
    </div>
  </div>
);

const ContactPage = ({ setView }: { setView: (v: string) => void }) => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    currentMarketing: [] as string[],
    monthlyBudget: '',
    goals: '',
    website: '',
  });

  const industryOptions = ['E-commerce', 'SaaS', 'Local Business', 'Healthcare', 'Real Estate', 'Finance', 'Education', 'Other'];
  const marketingOptions = ['Social Media', 'Google Ads', 'SEO', 'Email Marketing', 'Content Marketing', 'Influencer Marketing', 'None Yet'];

  const toggleMarketing = (option: string) => {
    setFormData(prev => ({
      ...prev,
      currentMarketing: prev.currentMarketing.includes(option)
        ? prev.currentMarketing.filter(s => s !== option)
        : [...prev.currentMarketing, option]
    }));
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/Er1cETQk7bVrn97N4m8N/webhook-trigger/38de9f3d-10f6-4330-915e-510df7e7ee25', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Marketing Hub Agency - Contact Form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Still show success — webhook may not return CORS headers
    }
    setSubmitting(false);
    setStep(3);
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors";

  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-purple-400 mb-8 hover:text-purple-300 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="gradient-text">Grow Together.</span></h1>
            <p className="text-xl text-gray-400 mb-10">Ready to transform your marketing with AI? Let's discuss how we can help your business dominate online.</p>

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
                    Book a Strategy Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-3xl border border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -z-10"></div>

            {step < 3 && (
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{step === 1 ? 'Get in Touch' : 'About Your Marketing'}</h3>
                <span className="text-sm text-gray-500">Step {step} of 2</span>
              </div>
            )}

            {step === 1 && (
              <form className="space-y-4" onSubmit={handleStep1}>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={inputClass}
                    placeholder="Your Company Name"
                  />
                </div>
                <button type="submit" className="w-full gradient-bg py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Next <ArrowRight size={18} />
                </button>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-5" onSubmit={handleStep2}>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Your Industry</label>
                  <div className="grid grid-cols-2 gap-2">
                    {industryOptions.map(option => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData({ ...formData, industry: option })}
                        className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all ${formData.industry === option
                          ? 'border-purple-500 bg-purple-500/20 text-white'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Current Marketing Channels</label>
                  <div className="flex flex-wrap gap-2">
                    {marketingOptions.map(option => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => toggleMarketing(option)}
                        className={`px-3 py-2 rounded-full text-sm font-medium border transition-all ${formData.currentMarketing.includes(option)
                          ? 'border-purple-500 bg-purple-500/20 text-white'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Website URL (if any)</label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className={inputClass}
                    placeholder="www.yourcompany.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Main Marketing Goal</label>
                  <input
                    type="text"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. Get more leads, Build brand awareness"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-xl font-bold border border-white/10 hover:border-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button type="submit" disabled={submitting} className="flex-1 gradient-bg py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitting ? 'Submitting...' : 'Submit'} {!submitting && <Send size={18} />}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-gray-400 mb-8">We've received your information. Our marketing strategist will reach out within 24 hours.</p>
                <button
                  onClick={() => { setView('home'); window.scrollTo(0, 0); }}
                  className="gradient-bg px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- A2P Compliance Form Page ---

const A2PFormPage = ({ setView }: { setView: (v: string) => void }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    transactionalConsent: false,
    marketingConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('https://services.leadconnectorhq.com/hooks/Er1cETQk7bVrn97N4m8N/webhook-trigger/38de9f3d-10f6-4330-915e-510df7e7ee25', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          transactionalConsent: formData.transactionalConsent,
          marketingConsent: formData.marketingConsent,
          source: 'Marketing Hub Agency - A2P Form',
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
    } catch {
      // Still show success — webhook may not return CORS headers
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder-gray-400";

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-[80vh] flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 mb-8">Your registration has been submitted successfully. We'll be in touch soon.</p>
            <button
              onClick={() => { setView('home'); window.scrollTo(0, 0); }}
              className="gradient-bg px-8 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-xl">
        <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-blue-600 mb-8 hover:text-blue-700 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Home
        </button>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Registration Form</h1>
            <p className="text-gray-500">Complete the form below to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={inputClass}
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={inputClass}
                placeholder="Last Name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
                placeholder="Phone"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                placeholder="Email"
              />
            </div>

            {/* SMS Consent Section */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              {/* Transactional SMS Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.transactionalConsent}
                    onChange={(e) => setFormData({ ...formData, transactionalConsent: e.target.checked })}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded transition-all peer-checked:border-blue-500 peer-checked:bg-blue-500 group-hover:border-blue-400">
                    <CheckCircle2 size={16} className="text-white opacity-0 peer-checked:opacity-100 transition-opacity absolute top-0.5 left-0.5" />
                  </div>
                  <svg className={`absolute top-0.5 left-0.5 w-4 h-4 text-white transition-opacity ${formData.transactionalConsent ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">
                  I consent to receive transactional messages from <span className="font-semibold text-gray-900">Marketing Hub Agency</span> at the phone number provided. Message frequency may vary. <span className="font-semibold">Message & Data rates may apply.</span> Reply HELP for help or STOP to opt-out.
                </span>
              </label>

              {/* Marketing SMS Consent (Optional) */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded transition-all peer-checked:border-blue-500 peer-checked:bg-blue-500 group-hover:border-blue-400">
                  </div>
                  <svg className={`absolute top-0.5 left-0.5 w-4 h-4 text-white transition-opacity ${formData.marketingConsent ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">
                  I consent to receive marketing and promotional messages from <span className="font-semibold text-gray-900">Marketing Hub Agency</span> at the phone number provided. Message frequency may vary. <span className="font-semibold">Message & Data rates may apply.</span> Reply HELP for help or STOP to opt-out.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-500/25"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>

            {/* Privacy & Terms Links */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                <button type="button" onClick={() => { setView('privacy'); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  Privacy Policy
                </button>
                {' '} | {' '}
                <button type="button" onClick={() => { setView('terms'); window.scrollTo(0, 0); }} className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  Terms of Service
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Compliance Info Box */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck size={18} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">SMS Disclosure</h4>
              <ul className="text-sm text-blue-800 space-y-1.5">
                <li>• <strong>Who is sending:</strong> Marketing Hub Agency</li>
                <li>• <strong>Message types:</strong> Account alerts, reminders, notifications, and promotional offers</li>
                <li>• <strong>Frequency:</strong> Message frequency may vary</li>
                <li>• <strong>Rates:</strong> Message & Data rates may apply</li>
                <li>• <strong>Help:</strong> Reply HELP for assistance</li>
                <li>• <strong>Opt-out:</strong> Reply STOP to unsubscribe</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Messages Box */}
        <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">📱 Sample Messages You May Receive</h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Transactional Message Example:</p>
              <p className="text-sm text-gray-700">"Hi [Name], your Marketing Hub Agency appointment is confirmed for [Date] at [Time]. Reply HELP for help, STOP to cancel."</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Marketing Message Example (requires opt-in):</p>
              <p className="text-sm text-gray-700">"Marketing Hub Agency: 🎉 Limited offer! Get 20% off your next marketing package. Reply STOP to opt out."</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">Your consent and phone number will NOT be shared with third parties.</p>
        </div>
      </div>
    </div>
  );
};

// --- Landing Page Sections ---

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-10"></div>
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
            <span className="ml-2 text-sm font-medium text-gray-400">Trusted by 200+ Businesses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            AI-Powered <span className="gradient-text">Marketing</span> That Delivers Results.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-10 leading-relaxed">
            We help businesses build their brand, dominate social media, and generate leads using cutting-edge AI marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <CTAButton className="w-full sm:w-auto" />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Free Strategy Call</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> No Long Contracts</div>
          </div>
        </div>

        {/* Opt-In Form */}
        <div className="glass-card p-8 rounded-3xl border border-purple-500/20 glow-purple">
          <h3 className="text-2xl font-bold mb-2 text-center">Get Your Free Marketing Audit</h3>
          <p className="text-gray-400 text-center mb-6">Discover how AI can transform your marketing</p>
          <OptInForm />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
        {[
          { metric: "300%", label: "Avg. ROI Increase" },
          { metric: "10M+", label: "Impressions Generated" },
          { metric: "200+", label: "Happy Clients" },
          { metric: "24/7", label: "AI-Powered Marketing" }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-1 gradient-text">{item.metric}</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Platforms = () => (
  <section className="py-16 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-400">We Master Every Platform</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {[
          { icon: <Instagram className="text-pink-500" size={28} />, label: "Instagram" },
          { icon: <Facebook className="text-blue-500" size={28} />, label: "Facebook" },
          { icon: <Linkedin className="text-blue-400" size={28} />, label: "LinkedIn" },
          { icon: <Twitter className="text-sky-400" size={28} />, label: "Twitter/X" },
          { icon: <Globe className="text-green-500" size={28} />, label: "Google Ads" },
          { icon: <TrendingUp className="text-purple-500" size={28} />, label: "TikTok" }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl text-center hover:border-purple-500/30 transition-all group">
            <div className="mb-3 group-hover:scale-110 transition-transform flex justify-center">{item.icon}</div>
            <div className="text-sm font-medium text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section className="py-20 bg-[#050505]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Traditional Marketing vs <span className="text-purple-500">AI Marketing</span></h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div> Traditional Marketing
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">❌ <span>Generic content that doesn't resonate.</span></li>
            <li className="flex gap-3">❌ <span>Manual posting and slow response times.</span></li>
            <li className="flex gap-3">❌ <span>Expensive agencies with unclear results.</span></li>
            <li className="flex gap-3">❌ <span>Guessing what works without data.</span></li>
          </ul>
        </div>
        <div className="bg-purple-500/5 border border-purple-500/20 p-8 rounded-3xl glow-purple">
          <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div> AI-Powered Marketing
          </h3>
          <ul className="space-y-4 text-gray-200">
            <li className="flex gap-3 font-medium">✅ <span className="text-white">AI-generated content that converts.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Automated posting at peak engagement times.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Transparent reporting with clear ROI.</span></li>
            <li className="flex gap-3 font-medium">✅ <span className="text-white">Data-driven decisions that improve over time.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive marketing solutions powered by AI to grow your business.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Megaphone className="text-purple-500" size={32} />,
            title: "Social Media Marketing",
            desc: "AI-driven content creation, scheduling, and engagement strategies across all major platforms to build your audience and drive sales."
          },
          {
            icon: <Palette className="text-purple-500" size={32} />,
            title: "Branding & Design",
            desc: "Create a memorable brand identity with AI-assisted logo design, brand guidelines, and visual assets that set you apart."
          },
          {
            icon: <Target className="text-purple-500" size={32} />,
            title: "Lead Generation",
            desc: "Automated lead capture funnels, landing pages, and nurture sequences that turn visitors into paying customers."
          },
          {
            icon: <TrendingUp className="text-purple-500" size={32} />,
            title: "SEO & Content",
            desc: "AI-powered content strategy, blog posts, and SEO optimization to rank higher and attract organic traffic."
          },
          {
            icon: <BarChart3 className="text-purple-500" size={32} />,
            title: "Paid Advertising",
            desc: "Data-driven Google Ads and social media campaigns with AI optimization for maximum ROI."
          },
          {
            icon: <Mail className="text-purple-500" size={32} />,
            title: "Email Marketing",
            desc: "Automated email sequences with AI-written copy that nurtures leads and drives repeat business."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why Businesses Choose Us</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">AI That Works 24/7</h4>
                <p className="text-gray-400">Our AI tools analyze, create, and optimize your marketing around the clock—no breaks, no sick days.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Rapid Results</h4>
                <p className="text-gray-400">See measurable growth in weeks, not months. Our clients average 300% ROI in the first 90 days.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Eye className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Full Transparency</h4>
                <p className="text-gray-400">Real-time dashboards show exactly where your money goes and what results you're getting.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"></div>
          <div className="relative glass-card p-2 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Marketing Dashboard" className="rounded-2xl border border-white/5" />
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
      <h2 className="text-4xl font-bold text-center mb-16">How We Work</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0"></div>
        {[
          { step: "01", title: "Discovery & Strategy", desc: "We analyze your business, competitors, and market to create a custom AI-powered marketing strategy." },
          { step: "02", title: "Build & Launch", desc: "Our team sets up your campaigns, creates content, and deploys AI tools across all channels." },
          { step: "03", title: "Optimize & Scale", desc: "AI continuously learns and optimizes your campaigns while we scale what's working." }
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
        <p className="text-gray-400">Real results from businesses like yours.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Jennifer Cole",
            role: "CEO, TechStart Inc.",
            content: "Marketing Hub Agency transformed our online presence. Our lead generation increased by 400% in just 3 months. The AI-powered approach is a game-changer.",
            image: "https://i.pravatar.cc/150?u=jennifer"
          },
          {
            name: "Michael Roberts",
            role: "Founder, GrowthPath",
            content: "Finally, a marketing agency that delivers on their promises. The transparency and results speak for themselves. Best ROI we've ever seen on marketing spend.",
            image: "https://i.pravatar.cc/150?u=michael"
          },
          {
            name: "Amanda Chen",
            role: "Marketing Director, StyleCo",
            content: "Their AI content creation is incredible. We went from posting 2x per week to 2x per day with better engagement. Our Instagram following tripled in 6 months.",
            image: "https://i.pravatar.cc/150?u=amanda"
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
          question="How does AI improve my marketing?"
          answer="AI analyzes vast amounts of data to identify what content, timing, and channels work best for your audience. It creates optimized content, automates posting, and continuously improves based on performance data."
        />
        <FAQItem
          question="What's included in your services?"
          answer="Our packages include social media management, content creation, paid advertising, SEO, branding, and lead generation. We customize based on your specific needs and goals."
        />
        <FAQItem
          question="How long before I see results?"
          answer="Most clients see measurable improvements within 30 days. Significant ROI typically comes within 60-90 days as our AI systems learn and optimize your campaigns."
        />
        <FAQItem
          question="Do you require long-term contracts?"
          answer="No. We offer flexible month-to-month agreements. We believe in earning your business every month through results, not locking you into contracts."
        />
        <FAQItem
          question="How is pricing structured?"
          answer="We offer tiered packages based on your business size and needs. Book a free strategy call and we'll provide a custom quote with no hidden fees."
        />
      </div>
    </div>
  </section>
);

const Footer = ({ setView }: { setView: (v: string) => void }) => (
  <footer className="py-16 border-t border-white/5 bg-[#050505]">
    <div className="container mx-auto px-6">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <Logo onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            AI-powered marketing solutions that help businesses grow. Transform your marketing with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Home</button>
            <button onClick={() => { setView('contact'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Contact Us</button>
            <button onClick={() => { setView('a2p-form'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">SMS Consent Form</button>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <button onClick={() => { setView('privacy'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Privacy Policy</button>
            <button onClick={() => { setView('terms'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Terms of Service</button>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="mailto:sayedakbar@aivoicehub.site" className="hover:text-purple-400 transition-colors">
              sayedakbar@aivoicehub.site
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">© 2026 <strong className="text-gray-400">Marketing Hub Agency</strong>. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-1">AI-Powered Marketing Solutions</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Business Name: Marketing Hub Agency</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    if (view !== 'home') window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'privacy': return <PrivacyPage setView={setView} />;
      case 'terms': return <TermsPage setView={setView} />;
      case 'contact': return <ContactPage setView={setView} />;
      case 'a2p-form': return <A2PFormPage setView={setView} />;
      default: return (
        <>
          <Hero />
          <Platforms />
          <Comparison />
          <Solutions />
          <Benefits />
          <Process />
          <Testimonials />

          <section className="py-20 bg-purple-600/10">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join hundreds of businesses growing with AI-powered marketing. Book your free strategy call today.</p>
              <CTAButton />
            </div>
          </section>

          <FAQ />

          <section id="book" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-8">Get Your Free Marketing Audit</h2>
              <div className="max-w-xl mx-auto glass-card p-10 rounded-3xl border border-purple-500/20">
                <p className="text-xl text-gray-400 mb-8">Fill out the form below and we'll analyze your current marketing and show you how AI can help.</p>
                <OptInForm />
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
