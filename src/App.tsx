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
          <a href="#payment" className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Getting Paid</a>
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
          <a href="#payment" className="block text-sm text-gray-600 dark:text-gray-300" onClick={() => setMobileOpen(false)}>Getting Paid</a>
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

function PaymentMethods() {
  const payments = [
    {
      icon: '🏦',
      title: 'Bank Transfer',
      platforms: 'Freelancing, E-Commerce, SaaS',
      description: 'Direct deposit to your local bank account. Most platforms support this.',
      details: ['Works with all major banks', 'Takes 1-5 business days', 'Low fees for local transfers', 'May have currency conversion fees'],
      best: 'Best for stable, regular income'
    },
    {
      icon: '💳',
      title: 'PayPal',
      platforms: 'Freelancing, E-Commerce, Content',
      description: 'Most widely accepted payment method globally. Easy to set up.',
      details: ['Instant transfers to PayPal balance', 'Withdraw to bank in 1-3 days', 'Works in 200+ countries', 'Fees: ~4.4% + fixed fee per transaction'],
      best: 'Best for international clients'
    },
    {
      icon: '🌍',
      title: 'Wise (TransferWise)',
      platforms: 'Freelancing, Remote Work',
      description: 'Low-cost international money transfers with real exchange rates.',
      details: ['Up to 5x cheaper than banks', 'Real mid-market exchange rate', 'Multi-currency account', 'Fast transfers (same day often)'],
      best: 'Best for receiving foreign currency'
    },
    {
      icon: '💼',
      title: 'Payoneer',
      platforms: 'Freelancing, Affiliate Marketing',
      description: 'Popular for freelancers. Get a virtual US/EU bank account.',
      details: ['Receive USD, EUR, GBP easily', 'Withdraw to local bank', 'Free to receive payments', 'Withdrawal fees vary by country'],
      best: 'Best for Upwork, Fiverr, Amazon'
    },
    {
      icon: '📱',
      title: 'Stripe',
      platforms: 'SaaS, E-Commerce, Digital Products',
      description: 'Payment processor for online businesses. Direct to bank.',
      details: ['Accept credit cards', 'Automatic payouts to bank', 'Payouts every 2-7 days', 'Fees: 2.9% + 30¢ per transaction'],
      best: 'Best for selling products/services online'
    },
    {
      icon: '🪙',
      title: 'Crypto (USDC/USDT)',
      platforms: 'Web3, Freelancing, Trading',
      description: 'Receive payments in cryptocurrency. Convert to local currency.',
      details: ['Fast global transfers', 'Low fees', 'Convert to local currency via exchanges', 'Use Binance, Coinbase, Luno'],
      best: 'Best for tech-savvy, global clients'
    },
  ];

  return (
    <section id="payment" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Getting Paid</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            How Money Enters Your Account
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Understanding payment methods is crucial. Here's how you actually receive money from each platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {payments.map((payment, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-700/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{payment.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{payment.title}</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-3">{payment.platforms}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{payment.description}</p>
              <ul className="space-y-2 mb-4">
                {payment.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{payment.best}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-800/50">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            💰 Payment Flow: How Money Reaches You
          </h3>
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-2xl mb-2">
                👤
              </div>
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Client/Buyer</div>
            </div>
            <div className="text-center text-gray-400">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-xs mt-1">Pays</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-2xl mb-2">
                🌐
              </div>
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Platform</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">(Upwork, Shopify, etc.)</div>
            </div>
            <div className="text-center text-gray-400">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-xs mt-1">Transfers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-sm flex items-center justify-center text-2xl mb-2">
                🏦
              </div>
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Your Bank</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">💵 Money!</div>
            </div>
          </div>
        </div>

        {/* Quick tips */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
            <div className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">💡 Pro Tip #1</div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Set up PayPal AND Wise early. Most platforms pay to these. Having both gives you flexibility.</p>
          </div>
          <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50">
            <div className="text-sm font-semibold text-purple-700 dark:text-purple-400 mb-2">💡 Pro Tip #2</div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Use Wise for international payments to save 3-5% on currency conversion vs banks.</p>
          </div>
          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50">
            <div className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">💡 Pro Tip #3</div>
            <p className="text-xs text-gray-700 dark:text-gray-300">Keep a separate bank account for online income. Makes tax time much easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<{ title: string; description: string; earning: string; icon: string; steps: string[] } | null>(null);

  const questions = [
    {
      q: "How much time can you commit daily?",
      options: [
        { label: "Less than 1 hour", value: "low" },
        { label: "1–3 hours", value: "medium" },
        { label: "4+ hours (full-time)", value: "high" },
      ]
    },
    {
      q: "How much money can you invest upfront?",
      options: [
        { label: "$0 (no budget)", value: "zero" },
        { label: "$100–$1,000", value: "low" },
        { label: "$1,000+", value: "high" },
      ]
    },
    {
      q: "What's your primary skill?",
      options: [
        { label: "Writing / Communication", value: "writing" },
        { label: "Technical / Coding", value: "tech" },
        { label: "Creative / Design", value: "creative" },
        { label: "Teaching / Explaining", value: "teaching" },
        { label: "Sales / Marketing", value: "marketing" },
        { label: "No specific skill yet", value: "none" },
      ]
    },
    {
      q: "How soon do you need income?",
      options: [
        { label: "This week", value: "urgent" },
        { label: "Within 1–3 months", value: "soon" },
        { label: "I can wait 6+ months", value: "patient" },
      ]
    },
    {
      q: "What's your risk tolerance?",
      options: [
        { label: "Very low — I need stability", value: "low" },
        { label: "Medium — I can take some risks", value: "medium" },
        { label: "High — I'm willing to bet on myself", value: "high" },
      ]
    },
  ];

  const getResult = (ans: string[]) => {
    const [time, budget, skill, urgency, risk] = ans;

    // Urgent + no budget = freelancing or tutoring
    if (urgency === 'urgent' && budget === 'zero') {
      return {
        title: 'Freelancing',
        icon: '💻',
        earning: '$1,000–$10,000/mo',
        description: 'Start offering your skills on Upwork or Fiverr immediately. You can land your first client this week.',
        steps: ['Create profiles on Upwork & Fiverr today', 'List 3 services you can deliver confidently', 'Send 10 proposals per day for the first week', 'Price competitively to build reviews fast', 'Raise rates after 5 positive reviews']
      };
    }

    // Tech skill + patient = SaaS
    if (skill === 'tech' && urgency === 'patient') {
      return {
        title: 'Micro-SaaS',
        icon: '🔧',
        earning: '$2,000–$50,000/mo',
        description: 'Build a small software tool that solves a specific problem. Recurring revenue with high margins.',
        steps: ['Find a niche problem people complain about online', 'Build an MVP in 2–4 weeks using AI coding tools', 'Launch on Product Hunt & Indie Hackers', 'Charge $9–$49/month per user', 'Iterate based on user feedback']
      };
    }

    // Teaching skill = digital products or tutoring
    if (skill === 'teaching') {
      return {
        title: 'Digital Products + Tutoring',
        icon: '📚',
        earning: '$500–$15,000/mo',
        description: 'Teach what you know. Start with 1-on-1 tutoring for quick cash, then scale with courses.',
        steps: ['Sign up on tutoring platforms (Wyzant, Chegg)', 'Create a simple course outline on your expertise', 'Record 5–10 lessons using free tools', 'Sell on Gumroad or Teachable', 'Use student testimonials to grow']
      };
    }

    // Writing skill = content + affiliate
    if (skill === 'writing') {
      return {
        title: 'Content + Affiliate Marketing',
        icon: '📝',
        earning: '$500–$20,000/mo',
        description: 'Build a blog or newsletter, grow an audience, and monetize with affiliate links and sponsorships.',
        steps: ['Pick a profitable niche (finance, tech, health)', 'Start a blog or newsletter this week', 'Write 3 SEO-optimized articles per week', 'Join affiliate programs (Amazon, ShareASale)', 'Build an email list from day one']
      };
    }

    // Creative skill = content creation
    if (skill === 'creative') {
      return {
        title: 'Content Creation',
        icon: '📹',
        earning: '$200–$50,000/mo',
        description: 'Build an audience on YouTube, TikTok, or Instagram. Monetize through ads, sponsorships, and products.',
        steps: ['Pick one platform and commit to it', 'Post consistently (3–5x per week minimum)', 'Study what works in your niche', 'Engage with every comment', 'Once at 1k followers, add monetization']
      };
    }

    // Marketing skill = e-commerce or affiliate
    if (skill === 'marketing') {
      return {
        title: 'E-Commerce / Dropshipping',
        icon: '🛒',
        earning: '$1,000–$50,000/mo',
        description: 'Use your marketing skills to sell products online. Start with dropshipping to minimize risk.',
        steps: ['Research trending products on TikTok/Amazon', 'Set up a Shopify store', 'Run targeted ads on Facebook/TikTok', 'Test 3–5 products before going all-in', 'Scale winners, cut losers fast']
      };
    }

    // High budget + high risk = trading or e-commerce
    if (budget === 'high' && risk === 'high') {
      return {
        title: 'E-Commerce Brand',
        icon: '🛒',
        earning: '$5,000–$100,000/mo',
        description: 'Invest in building a real e-commerce brand. Higher risk but massive upside with the right product.',
        steps: ['Find a product with proven demand', 'Source from manufacturers (Alibaba)', 'Build a professional brand & website', 'Launch with influencer marketing', 'Reinvest profits into inventory & ads']
      };
    }

    // No skill yet = learn + freelancing
    if (skill === 'none') {
      return {
        title: 'AI-Powered Freelancing',
        icon: '🤖',
        earning: '$1,000–$8,000/mo',
        description: 'Use AI tools to offer services you don\'t traditionally have skills for. The new equalizer.',
        steps: ['Learn ChatGPT, Claude, and Midjourney deeply', 'Offer AI-assisted services: writing, design, research', 'Create portfolio pieces using AI tools', 'List services on Fiverr at competitive prices', 'Deliver fast, over-deliver on quality']
      };
    }

    // Default
    return {
      title: 'Freelancing + Digital Products',
      icon: '💼',
      earning: '$1,000–$20,000/mo',
      description: 'Start with freelancing for immediate income, then build digital products for passive income over time.',
      steps: ['Pick a service you can offer this week', 'Create profiles on 2 freelancing platforms', 'Start delivering and collecting reviews', 'Document your process as you go', 'Turn your knowledge into a digital product']
    };
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getResult(newAnswers));
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Interactive Tool</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Find Your Best Income Path
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Answer 5 quick questions and get a personalized recommendation.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          {!result ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>{Math.round(((step) / questions.length) * 100)}% complete</span>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {questions[step].q}
              </h3>

              <div className="space-y-3">
                {questions[step].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 text-gray-700 dark:text-gray-200 font-medium"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">{result.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Your Best Match: {result.title}
              </h3>
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                Potential: {result.earning}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                {result.description}
              </p>

              <div className="text-left bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Your Action Plan:</h4>
                <ol className="space-y-3">
                  {result.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={reset}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
              >
                Retake Quiz
              </button>
            </div>
          )}
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
      <Quiz />
      <PaymentMethods />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
