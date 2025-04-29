import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Sprout,
  Truck,
  Factory,
  Bitcoin,
  ChevronDown,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  LineChart,
  ShieldCheck,
  Briefcase,
  Users,
  TrendingUp,
  HelpCircle} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQs from './pages/FAQs';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Learn from './pages/Learn';
import RealEstate from './pages/RealEstate';
import Agriculture from './pages/Agriculture';
import TradingBlockchain from './pages/TradingBlockchain';
import DigitalFinance from './pages/DigitalFinance';
import TransportLogistics from './pages/TransportLogistics';
import Manufacturing from './pages/Manufacturing';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { 
      label: "Investment Opportunities",
      href: "#",
      submenu: [
        { label: "Real Estate", href: "/x-pand/investments/real-estate" },
        { label: "Agriculture", href: "/x-pand/investments/agriculture" },
        { label: "Trading & Blockchain", href: "/x-pand/investments/trading-blockchain" },
        { label: "Digital Finance", href: "/x-pand/investments/digital-finance" },
        { label: "Transport & Logistics", href: "/x-pand/investments/transport" },
        { label: "Manufacturing", href: "/x-pand/investments/manufacturing" }
      ]
    },
    { label: "How It Works", href: "/x-pand/how-it-works" }
  ];

  const investmentSectors = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Premium properties across prime locations with 8-15% annual returns.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80",
      color: "emerald"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Sustainable farming projects yielding 12-20% annual returns.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
      color: "emerald"
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Fleet management opportunities with 10-18% yearly returns.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      color: "emerald"
    },
    {
      icon: Bitcoin,
      title: "Trading & Blockchain",
      description: "AI-powered trading solutions with 15-25% projected returns.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
      color: "gold"
    },
    {
      icon: TrendingUp,
      title: "Digital Finance",
      description: "Innovative DeFi projects targeting 10-20% annual yields.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      color: "gold"
    },
     {
      icon: Factory,
      title: "Manufacturing",
      description: "Local production ventures projecting 12-22% annual ROI.",
      image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80",
      color: "gold"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-dark-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-100/90 backdrop-blur-sm z-50 border-b border-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Briefcase className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-2xl font-display font-bold text-white">X-pand</span>
              </a>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-emerald-500 transition-colors py-2"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="inline-block ml-1 h-4 w-4" />
                    )}
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-dark-200 rounded-lg shadow-xl border border-dark-300">
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-emerald-500 hover:bg-dark-300"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[32rem]' : 'max-h-0'} overflow-hidden`}>
            <div className="py-2 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-emerald-500"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-400 hover:text-emerald-500"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full mt-4 btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-dark-200 border-t border-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-2xl font-display font-bold text-white">X-pand</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner in building wealth through diversified investments across Africa.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4">Investment Sectors</h3>
              <ul className="space-y-2">
                <li><a href="/x-pand/investments/real-estate" className="text-gray-400 hover:text-emerald-500">Real Estate</a></li>
                <li><a href="/x-pand/investments/agriculture" className="text-gray-400 hover:text-emerald-500">Agriculture</a></li>
                <li><a href="/x-pand/investments/trading-blockchain" className="text-gray-400 hover:text-emerald-500">Trading & Blockchain</a></li>
                <li><a href="/x-pand/investments/digital-finance" className="text-gray-400 hover:text-emerald-500">Digital Finance</a></li>
                <li><a href="/x-pand/investments/transport" className="text-gray-400 hover:text-emerald-500">Transport & Logistics</a></li>
                <li><a href="/x-pand/investments/manufacturing" className="text-gray-400 hover:text-emerald-500">Manufacturing</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/x-pand/about" className="text-gray-400 hover:text-emerald-500">About Us</a></li>
                <li><a href="/x-pand/how-it-works" className="text-gray-400 hover:text-emerald-500">How It Works</a></li>
                <li><a href="/x-pand/partners" className="text-gray-400 hover:text-emerald-500">Partners</a></li>
                <li><a href="/x-pand/contact" className="text-gray-400 hover:text-emerald-500">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/x-pand/learn" className="text-gray-400 hover:text-emerald-500">Learn</a></li>
                <li><a href="/x-pand/faqs" className="text-gray-400 hover:text-emerald-500 flex items-center gap-2">
                  FAQs
                  <HelpCircle className="h-4 w-4" />
                </a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-emerald-500">Blog</a></li>
                <li><a href="/support" className="text-gray-400 hover:text-emerald-500">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} X-pand. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-emerald-500 text-sm">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-emerald-500 text-sm">Terms of Service</a>
                <a href="/legal" className="text-gray-400 hover:text-emerald-500 text-sm">Legal</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/x-pand/faqs" element={<Layout><FAQs /></Layout>} />
        <Route path="/x-pand/about" element={<Layout><About /></Layout>} />
        <Route path="/x-pand/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/x-pand/learn" element={<Layout><Learn /></Layout>} />
        <Route path="/x-pand/investments/real-estate" element={<Layout><RealEstate /></Layout>} />
        <Route path="/x-pand/investments/agriculture" element={<Layout><Agriculture /></Layout>} />
        <Route path="/x-pand/investments/trading-blockchain" element={<Layout><TradingBlockchain /></Layout>} />
        <Route path="/x-pand/investments/digital-finance" element={<Layout><DigitalFinance /></Layout>} />
        <Route path="/x-pand/investments/transport" element={<Layout><TransportLogistics /></Layout>} />
        <Route path="/x-pand/investments/manufacturing" element={<Layout><Manufacturing /></Layout>} />
        <Route path="/x-pand/" element={
          <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-dark-100/90 backdrop-blur-sm"></div>
              </div>
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-6">
                    Your Gateway to
                    <span className="text-emerald-500"> Smart Investments</span>
                  </h1>
                  <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                    Join X-pand and discover AI-powered investment opportunities across multiple sectors. 
                    Start building your wealth with as little as $100.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="btn-primary flex items-center justify-center">
                      Start Investing <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="btn-secondary flex items-center justify-center">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-6 w-6 text-emerald-500" />
              </div>
            </section>

            {/* Investment Sectors */}
            <section id="investments" className="py-24 bg-dark-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="section-title">Investment Opportunities</h2>
                  <p className="section-subtitle">Diversify your portfolio across high-growth sectors</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {investmentSectors.map((sector, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`card group ${sector.color === 'gold' ? 'hover:border-gold-500' : 'hover:border-emerald-500'}`}
                    >
                      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                        <img 
                          src={sector.image} 
                          alt={sector.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
                      </div>
                      <sector.icon className={`h-12 w-12 ${sector.color === 'gold' ? 'text-gold-500' : 'text-emerald-500'} mb-4`} />
                      <h3 className="text-xl font-semibold mb-2 text-white">{sector.title}</h3>
                      <p className="text-gray-400">{sector.description}</p>
                      <button className={`mt-6 font-semibold flex items-center ${sector.color === 'gold' ? 'text-gold-500 group-hover:text-gold-400' : 'text-emerald-500 group-hover:text-emerald-400'}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-dark-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="section-title">Why Choose X-pand</h2>
                  <p className="section-subtitle">Experience the future of investment management</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Secure & Regulated",
                      description: "Your investments are protected by industry-leading security measures and regulatory compliance."
                    },
                    {
                      icon: Users,
                      title: "Expert Management",
                      description: "Professional portfolio managers with proven track records handle your investments."
                    },
                    {
                      icon: LineChart,
                      title: "Real-time Tracking",
                      description: "Monitor your portfolio performance and returns through our intuitive dashboard."
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card text-center group hover:border-gold-500"
                    >
                      <feature.icon className="h-12 w-12 text-gold-500 mx-auto mb-4 group-hover:text-gold-400 transition-colors" />
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gold-500 transition-colors">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))
                  }
                </div>
              </div>
            </section>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;