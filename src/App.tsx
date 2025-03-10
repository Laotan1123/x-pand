import { useState, useEffect } from 'react';
import { ArrowRight, Building2, Sprout, Hotel, Bitcoin, ChevronDown, Menu, X, ArrowUp, Calculator, LineChart, ShieldCheck } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState(5000000); // Changed default to 5M Naira
  const [investmentYears, setInvestmentYears] = useState(5);
  const [selectedRisk, setSelectedRisk] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [riskScore, setRiskScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const riskQuestions = [
    {
      question: "How would you react to a 20% drop in your investment value?",
      options: [
        { text: "Sell immediately to prevent further losses", score: 1 },
        { text: "Hold and wait for recovery", score: 2 },
        { text: "Buy more at lower prices", score: 3 }
      ]
    },
    {
      question: "What's your investment timeline?",
      options: [
        { text: "1-2 years", score: 1 },
        { text: "3-5 years", score: 2 },
        { text: "5+ years", score: 3 }
      ]
    },
    {
      question: "What's your primary investment goal?",
      options: [
        { text: "Preserve capital", score: 1 },
        { text: "Balanced growth", score: 2 },
        { text: "Maximum returns", score: 3 }
      ]
    }
  ];

  const calculateReturns = () => {
    const rateMap = {
      low: 0.06,
      moderate: 0.10,
      high: 0.15
    };
    const rate = rateMap[selectedRisk];
    return Math.round(investmentAmount * Math.pow(1 + rate, investmentYears));
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAnswerSelect = (score: number): void => {
    const newScore: number = riskScore + score;
    if (currentQuestion === riskQuestions.length - 1) {
      setRiskScore(newScore);
      const finalScore: number = newScore + score;
      if (finalScore <= 5) setSelectedRisk('low');
      else if (finalScore <= 7) setSelectedRisk('moderate');
      else setSelectedRisk('high');
    } else {
      setCurrentQuestion((prev: number) => prev + 1);
      setRiskScore(newScore);
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark-100/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-100">X-pand</span>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#investments" className="text-gray-300 hover:text-blue-500">Investments</a>
              <a href="#ai-advisor" className="text-gray-300 hover:text-blue-500">AI Advisor</a>
              <a href="#calculator" className="text-gray-300 hover:text-blue-500">Calculator</a>
              <a href="#risk-assessment" className="text-gray-300 hover:text-blue-500">Risk Assessment</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
            <div className="py-2 space-y-1">
              <a href="#investments" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Investments</a>
              <a href="#ai-advisor" className="block px-3 py-2 text-gray-300 hover:text-blue-500">AI Advisor</a>
              <a href="#calculator" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Calculator</a>
              <a href="#risk-assessment" className="block px-3 py-2 text-gray-300 hover:text-blue-500">Risk Assessment</a>
              <button className="w-full text-left px-3 py-2 text-blue-500 hover:bg-dark-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-100 tracking-tight">
              Bridging You to
              <span className="text-blue-500"> Smart Investments</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              Join X-pand and discover AI-powered investment opportunities across real estate,
              farming, hospitality, and digital finance in Nigeria.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                Start Investing <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:bg-dark-300 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      {/* Investment Categories */}
      <div id="investments" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-16">
            Diverse Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Real Estate",
                description: "Premium properties with high ROI potential across prime locations in Nigeria.",
                color: "blue",
                riskLevel: "Moderate"
              },
              {
                icon: Sprout,
                title: "Farming",
                description: "Sustainable agricultural investments with steady returns in Nigeria's farming sector.",
                color: "green",
                riskLevel: "Low"
              },
              {
                icon: Hotel,
                title: "Hospitality",
                description: "Luxury hotels and resorts with proven track records across Nigeria.",
                color: "amber",
                riskLevel: "Moderate"
              },
              {
                icon: Bitcoin,
                title: "Digital Finance",
                description: "Cutting-edge digital assets and blockchain investments for the Nigerian market.",
                color: "purple",
                riskLevel: "High"
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="p-6 bg-dark-200 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
              >
                <category.icon className={`h-12 w-12 text-${category.color}-500 mb-4`} />
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{category.title}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="flex items-center">
                  <span className={`inline-block px-2 py-1 rounded text-sm text-${category.color}-500 bg-${category.color}-900/30`}>
                    {category.riskLevel} Risk
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Calculator */}
      <div id="calculator" className="py-24 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calculator className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-100">Investment Calculator</h2>
            <p className="mt-4 text-xl text-gray-400">Plan your financial future with our advanced calculator</p>
          </div>
          <div className="max-w-2xl mx-auto bg-dark-300 rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Investment Amount (₦)
                </label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Investment Period (Years)
                </label>
                <input
                  type="number"
                  value={investmentYears}
                  onChange={(e) => setInvestmentYears(Number(e.target.value))}
                  className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Risk Level
                </label>
                <select
                  value={selectedRisk}
                  onChange={(e) => setSelectedRisk(e.target.value as 'low' | 'moderate' | 'high')}
                  className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                >
                  <option value="low">Low Risk (6% est. annual return)</option>
                  <option value="moderate">Moderate Risk (10% est. annual return)</option>
                  <option value="high">High Risk (15% est. annual return)</option>
                </select>
              </div>
              <div className="bg-dark-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Projected Value</h3>
                <p className="text-3xl font-bold text-blue-500">{formatNaira(calculateReturns())}</p>
                <p className="text-sm text-gray-400 mt-2">
                  *Projections are estimates based on historical data and are not guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div id="risk-assessment" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ShieldCheck className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-100">Risk Assessment</h2>
            <p className="mt-4 text-xl text-gray-400">Discover your investor profile</p>
          </div>
          <div className="max-w-2xl mx-auto bg-dark-200 rounded-2xl shadow-xl p-8">
            {currentQuestion < riskQuestions.length ? (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-100">
                  {riskQuestions[currentQuestion].question}
                </h3>
                <div className="space-y-4">
                  {riskQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option.score)}
                      className="w-full p-4 text-left bg-dark-300 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-md transition text-gray-300"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  Question {currentQuestion + 1} of {riskQuestions.length}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-100">Your Risk Profile</h3>
                <div className="bg-dark-300 p-6 rounded-xl mb-6">
                  <p className="text-lg mb-2 text-gray-300">Based on your answers, you have a</p>
                  <p className="text-3xl font-bold text-blue-500 mb-4 capitalize">
                    {selectedRisk} Risk Tolerance
                  </p>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setRiskScore(0);
                    }}
                    className="text-blue-500 hover:text-blue-400"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Advisory Feature */}
      <div id="ai-advisor" className="py-24 bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                AI-Powered Investment Advisory
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Our advanced AI system analyzes Nigerian market trends, risk factors, and your personal goals
                to provide tailored investment recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized portfolio recommendations for the Nigerian market',
                  'Real-time market insights for local investments',
                  'Risk assessment and management',
                  'Automated portfolio rebalancing'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="AI Analytics Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Simulation */}
      <div id="portfolio-simulation" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LineChart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-100">Portfolio Simulation</h2>
            <p className="mt-4 text-xl text-gray-400">Visualize different investment scenarios in the Nigerian market</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Conservative",
                allocation: {
                  "Real Estate": "40%",
                  "Farming": "30%",
                  "Hospitality": "20%",
                  "Digital Finance": "10%"
                },
                expectedReturn: "6-8%",
                risk: "Low",
                minInvestment: "₦500,000"
              },
              {
                title: "Balanced",
                allocation: {
                  "Real Estate": "30%",
                  "Farming": "25%",
                  "Hospitality": "25%",
                  "Digital Finance": "20%"
                },
                expectedReturn: "8-12%",
                risk: "Moderate",
                minInvestment: "₦1,000,000"
              },
              {
                title: "Aggressive",
                allocation: {
                  "Real Estate": "20%",
                  "Farming": "15%",
                  "Hospitality": "30%",
                  "Digital Finance": "35%"
                },
                expectedReturn: "12-18%",
                risk: "High",
                minInvestment: "₦2,000,000"
              }
            ].map((portfolio, index) => (
              <div key={index} className="bg-dark-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4 text-gray-100">{portfolio.title} Portfolio</h3>
                <div className="space-y-3">
                  {Object.entries(portfolio.allocation).map(([asset, percentage]) => (
                    <div key={asset} className="flex justify-between items-center">
                      <span className="text-gray-400">{asset}</span>
                      <span className="font-medium text-gray-300">{percentage}</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Expected Return</span>
                      <span className="font-medium text-blue-500">{portfolio.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Risk Level</span>
                      <span className="font-medium text-gray-300">{portfolio.risk}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Min Investment</span>
                      <span className="font-medium text-gray-300">{portfolio.minInvestment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;