import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">$</span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">IncomeLab</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#methods" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Methods</a>
          <a href="#compare" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Compare</a>
          <a href="#tools" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tools</a>
          <a href="#guide" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Guide</a>
          <a href="#faq" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">FAQ</a>
        </div>
        <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 space-y-3">
          <a href="#methods" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>Methods</a>
          <a href="#compare" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>Compare</a>
          <a href="#tools" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>Tools</a>
          <a href="#guide" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>Guide</a>
          <a href="#faq" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>FAQ</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-300/20 dark:bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-full mb-8 border border-emerald-200/50 dark:border-emerald-700/50">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Research-backed strategies for 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Your Guide to{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Online Income
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Research-tested methods to generate real income online. Compare strategies, understand earning potential, and find the path that fits your skills and goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#methods" className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5">
            Explore Methods →
          </a>
          <a href="#compare" className="px-8 py-3.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm">
            Compare Earnings
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">12+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Methods Researched</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">$0–$50k</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Monthly Range</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">50+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tools Reviewed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">2026</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Updated Data</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Methods() {
  const methods = [
    {
      icon: '💻',
      title: 'Freelancing',
      earning: '$1k–$15k/mo',
      difficulty: 'Medium',
      timeToIncome: '1–4 weeks',
      description: 'Offer your skills on platforms like Upwork, Fiverr, or Toptal. High demand for developers, designers, writers, and marketers.',
      skills: ['Writing', 'Design', 'Development', 'Marketing'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      earning: '$500–$50k/mo',
      difficulty: 'High',
      timeToIncome: '1–6 months',
      description: 'Sell products online via Shopify, Amazon FBA, or dropshipping. Requires upfront investment but scales well.',
      skills: ['Marketing', 'Product Research', 'Customer Service'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '📹',
      title: 'Content Creation',
      earning: '$200–$100k/mo',
      difficulty: 'High',
      timeToIncome: '6–18 months',
      description: 'Build an audience on YouTube, TikTok, or a blog. Monetize through ads, sponsorships, and merchandise.',
      skills: ['Video Editing', 'Storytelling', 'SEO', 'Consistency'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '📚',
      title: 'Digital Products',
      earning: '$500–$30k/mo',
      difficulty: 'Medium',
      timeToIncome: '1–3 months',
      description: 'Create courses, ebooks, templates, or software. Build once, sell repeatedly with high profit margins.',
      skills: ['Teaching', 'Design', 'Marketing', 'Niche Knowledge'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: '📈',
      title: 'Affiliate Marketing',
      earning: '$100–$50k/mo',
      difficulty: 'Medium',
      timeToIncome: '3–12 months',
      description: 'Promote other companies\' products and earn commissions. Works well with blogs, social media, or email lists.',
      skills: ['SEO', 'Content Marketing', 'Analytics', 'Copywriting'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '🤖',
      title: 'AI Services',
      earning: '$2k–$20k/mo',
      difficulty: 'Medium',
      timeToIncome: '2–8 weeks',
      description: 'Offer AI-powered services: prompt engineering, AI consulting, chatbot building, or AI-assisted content creation.',
      skills: ['AI Tools', 'Automation', 'Problem Solving'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: '📊',
      title: 'Online Trading',
      earning: 'Variable',
      difficulty: 'Very High',
      timeToIncome: '3–12 months',
      description: 'Trade stocks, crypto, or forex. High risk, high reward. Requires significant learning and capital.',
      skills: ['Analysis', 'Risk Management', 'Patience', 'Capital'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: '🎓',
      title: 'Online Tutoring',
      earning: '$500–$8k/mo',
      difficulty: 'Low',
      timeToIncome: '1–2 weeks',
      description: 'Teach subjects you know on platforms like VIPKid, Chegg, or independently. Low barrier to entry.',
      skills: ['Teaching', 'Subject Expertise', 'Communication'],
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: '🔧',
      title: 'SaaS / Micro-SaaS',
      earning: '$1k–$100k/mo',
      difficulty: 'Very High',
      timeToIncome: '3–12 months',
      description: 'Build software tools that solve specific problems. Recurring revenue model with high scalability.',
      skills: ['Programming', 'Product Design', 'Marketing'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="methods" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Income Methods</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Proven Ways to Earn Online
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each method is researched for realistic earning potential, difficulty level, and time to first income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-700/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  method.difficulty === 'Low' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  method.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>{method.difficulty}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{method.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{method.earning}</span>
                <span className="text-xs text-gray-400">• {method.timeToIncome}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{method.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {method.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const data = [
    { method: 'Freelancing', startup: '$0', monthly: '$1k–$15k', risk: 'Low', passive: '★☆☆☆☆', scalability: 'Medium' },
    { method: 'E-Commerce', startup: '$500–$5k', monthly: '$500–$50k', risk: 'Medium', passive: '★★☆☆☆', scalability: 'High' },
    { method: 'Content Creation', startup: '$0–$200', monthly: '$200–$100k', risk: 'Low', passive: '★★★☆☆', scalability: 'Very High' },
    { method: 'Digital Products', startup: '$0–$100', monthly: '$500–$30k', risk: 'Low', passive: '★★★★☆', scalability: 'Very High' },
    { method: 'Affiliate Marketing', startup: '$0–$50', monthly: '$100–$50k', risk: 'Low', passive: '★★★★☆', scalability: 'High' },
    { method: 'AI Services', startup: '$0–$50', monthly: '$2k–$20k', risk: 'Low', passive: '★★☆☆☆', scalability: 'Medium' },
    { method: 'Online Trading', startup: '$1k+', monthly: 'Variable', risk: 'Very High', passive: '★☆☆☆☆', scalability: 'High' },
    { method: 'Online Tutoring', startup: '$0', monthly: '$500–$8k', risk: 'Very Low', passive: '★☆☆☆☆', scalability: 'Low' },
    { method: 'SaaS', startup: '$0–$500', monthly: '$1k–$100k', risk: 'Medium', passive: '★★★★★', scalability: 'Very High' },
  ];

  return (
    <section id="compare" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Side-by-Side Analysis
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compare key factors across all methods to find the best fit for your situation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Method</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Startup Cost</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Monthly Income</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Risk</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Passive</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-700 dark:text-gray-200">Scale</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.method}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{row.startup}</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600 dark:text-emerald-400">{row.monthly}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      row.risk === 'Very Low' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      row.risk === 'Low' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      row.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>{row.risk}</span>
                  </td>
                  <td className="px-6 py-4 text-amber-500">{row.passive}</td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{row.scalability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50">
            <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">🏆 Best for Beginners</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Freelancing & Tutoring</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Low cost, fast start, proven demand</div>
          </div>
          <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50">
            <div className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-1">💰 Highest Ceiling</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">SaaS & Content Creation</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Unlimited scaling potential</div>
          </div>
          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50">
            <div className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">🔄 Most Passive</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Digital Products & SaaS</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Build once, earn repeatedly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const tools = [
    { category: 'Freelancing', items: ['Upwork', 'Fiverr', 'Toptal', 'Freelancer'] },
    { category: 'E-Commerce', items: ['Shopify', 'Amazon FBA', 'Gumroad', 'Etsy'] },
    { category: 'Content', items: ['YouTube', 'Substack', 'Medium', 'WordPress'] },
    { category: 'Marketing', items: ['ConvertKit', 'Beehiiv', 'Carrd', 'Linktree'] },
    { category: 'AI Tools', items: ['ChatGPT', 'Claude', 'Midjourney', 'Cursor'] },
    { category: 'Analytics', items: ['Google Analytics', 'Hotjar', 'Plausible', 'Mixpanel'] },
  ];

  return (
    <section id="tools" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Tools & Platforms</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Essential Tools for Each Path
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The right tools make all the difference. Here are the top platforms for each income method.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((group, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm font-bold">
                      {item[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  const steps = [
    { step: '01', title: 'Assess Your Skills', description: 'Take inventory of what you already know. Your existing skills are your fastest path to income. List your expertise, hobbies, and things people ask you for help with.' },
    { step: '02', title: 'Choose Your Method', description: 'Based on your skills, time availability, and risk tolerance, pick 1–2 methods from the list above. Don\'t spread yourself too thin — focus beats variety.' },
    { step: '03', title: 'Learn the Basics', description: 'Invest 1–2 weeks learning the fundamentals. Use free resources first: YouTube, blogs, documentation. Avoid expensive courses until you\'ve validated the method works for you.' },
    { step: '04', title: 'Start Small & Validate', description: 'Launch your first offer, publish your first piece of content, or make your first sale. The goal isn\'t perfection — it\'s proof that people will pay for what you offer.' },
    { step: '05', title: 'Iterate & Scale', description: 'Analyze what\'s working. Double down on successful strategies. Reinvest earnings into tools, ads, or outsourcing to grow faster.' },
    { step: '06', title: 'Diversify Income', description: 'Once one stream is stable ($1k+/month), add a second method. Build a portfolio of income sources for resilience and growth.' },
  ];

  return (
    <section id="guide" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Your 6-Step Action Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow this proven framework to go from zero to your first online income.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-700/50 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'How much can I realistically earn in the first month?', a: 'Most people earn $0–$500 in their first month. Freelancing and tutoring can generate income within 1–2 weeks. Content creation and e-commerce typically take 3–6 months to become profitable. Set realistic expectations and focus on learning.' },
    { q: 'Do I need money to start?', a: 'Most methods require little to no startup capital. Freelancing, content creation, and affiliate marketing can start at $0. E-commerce and trading require investment. Start with what you have and reinvest profits as you grow.' },
    { q: 'Which method is the easiest to start?', a: 'Freelancing and online tutoring have the lowest barriers to entry. If you have a marketable skill (writing, design, coding, teaching), you can start earning within days. The key is offering something people are already paying for.' },
    { q: 'Is passive income real?', a: 'Yes, but it requires significant upfront work. Digital products, courses, and SaaS can generate passive income after months of building. True passive income is a myth — even "passive" streams need occasional maintenance and marketing.' },
    { q: 'How do I avoid scams?', a: 'If something promises guaranteed high returns with no effort, it\'s likely a scam. Legitimate online income requires real skills and consistent work. Research thoroughly, start with reputable platforms, and never pay upfront for "opportunities."' },
    { q: 'Can I do this alongside a full-time job?', a: 'Absolutely. Most successful online earners started as a side hustle. Dedicate 1–2 hours daily consistently. Freelancing and content creation work well as side projects. Transition to full-time only when income is stable.' },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white text-sm md:text-base pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800/30">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with New Strategies
        </h2>
        <p className="text-emerald-100 mb-8">
          Get weekly research on the latest online income methods, tools, and success stories.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-xl text-white font-medium backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            You're in! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              required
            />
            <button type="submit" className="px-6 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">IncomeLab</span>
          </div>
          <p className="text-xs text-gray-400 text-center max-w-md">
            Disclaimer: Income figures are estimates based on research and may vary. This site is for educational purposes only and does not constitute financial advice.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 IncomeLab
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Methods />
      <Compare />
      <Tools />
      <Guide />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
