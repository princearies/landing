import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-lg text-gray-900 dark:text-white">Welcome</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Features</a>
          <a href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About</a>
          <a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</a>
          <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-200/20 to-indigo-200/20 dark:from-violet-800/10 dark:to-indigo-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #6d28d9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100/80 dark:bg-violet-900/30 rounded-full mb-8 border border-violet-200/50 dark:border-violet-700/50">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-violet-700 dark:text-violet-300 font-medium">Welcome to the future</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Build something{' '}
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            amazing
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Create beautiful, modern web experiences with clean design and smooth interactions. Your journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5">
            Start Building →
          </button>
          <button className="px-8 py-3.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">10k+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Users</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">99%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Uptime</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">4.9★</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance that loads in milliseconds. No compromises on speed.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Crafted with attention to every pixel. Modern aesthetics that delight users.',
      color: 'from-violet-400 to-purple-500'
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every layer of the application.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect experience on every device, from mobile to desktop.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '🧩',
      title: 'Modular System',
      description: 'Composable components that work together seamlessly.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Deploy anywhere with built-in support for internationalization.',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Everything you need
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A complete toolkit for building modern web applications with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-violet-200 dark:hover:border-violet-700/50 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
              Designed for the modern web
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We believe great software starts with great design. Our platform combines cutting-edge technology with thoughtful user experience to create tools that people love to use.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Built with React, TypeScript, and Tailwind CSS — the tools that power the best products on the web today.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['bg-violet-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${color} border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Join 10,000+ developers</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">building amazing things</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-violet-500/10 border border-gray-100 dark:border-gray-700 p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-gray-400 dark:text-gray-500">// Your next project</div>
                  <div><span className="text-purple-500">const</span> <span className="text-blue-600 dark:text-blue-400">app</span> = <span className="text-purple-500">create</span>({'{'}</div>
                  <div className="pl-4"><span className="text-green-600 dark:text-green-400">name</span>: <span className="text-amber-600 dark:text-amber-400">"my-project"</span>,</div>
                  <div className="pl-4"><span className="text-green-600 dark:text-green-400">design</span>: <span className="text-amber-600 dark:text-amber-400">"beautiful"</span>,</div>
                  <div className="pl-4"><span className="text-green-600 dark:text-green-400">speed</span>: <span className="text-amber-600 dark:text-amber-400">"lightning"</span>,</div>
                  <div className="pl-4"><span className="text-green-600 dark:text-green-400">scale</span>: <span className="text-amber-600 dark:text-amber-400">"infinite"</span></div>
                  <div>{'}'});</div>
                  <div className="mt-3"><span className="text-purple-500">await</span> app.<span className="text-blue-600 dark:text-blue-400">deploy</span>();</div>
                  <div className="text-green-500">✓ Deployed successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Drop us a message and we'll get back to you within 24 hours.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
            />
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
            />
          </div>
          <textarea
            placeholder="Your message..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all resize-none mb-4"
          ></textarea>
          <button className="w-full px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300">
            Send Message
          </button>
        </div>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">Welcome</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 Welcome. All rights reserved.
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
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
