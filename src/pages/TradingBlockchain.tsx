import { motion } from 'framer-motion';
import { LineChart, Wallet, Shield, TrendingUp, BarChart3, Building2, ArrowRight, Gem, Coins } from 'lucide-react';

const TradingBlockchain = () => {
  const products = [
    {
      title: "AI-Powered Trading",
      description: "Self-learning bots analyzing 14 market indicators for optimal trades across forex, crypto, and commodities.",
      metrics: [
        "1.8-3.2% monthly returns",
        "0.35 max drawdown",
        "50-200 daily trades",
        "89% win rate (4H)"
      ],
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80",
      icon: LineChart
    },
    {
      title: "Tokenized Real Assets",
      description: "Blockchain-powered fractional ownership of premium properties and mining rights.",
      metrics: [
        "Victoria Falls Hotel NFTs",
        "Lithium mining royalties",
        "4,200 TPS throughput",
        "23% avg NFT ROI"
      ],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
      icon: Building2
    },
    {
      title: "Regulated Crypto Gateway",
      description: "Secure stablecoin conversions and CBDC staking through EcoCash partnership.",
      metrics: [
        "0.2% conversion fees",
        "9% APY staking",
        "$7B annual volume",
        "FINTRAC certified"
      ],
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80",
      icon: Wallet
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Institutional Grade",
      description: "Professional trading algorithms"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "89% win rate on gold trading"
    },
    {
      icon: BarChart3,
      title: "Risk Management",
      description: "0.35 maximum drawdown"
    },
    {
      icon: Gem,
      title: "Real Asset Backing",
      description: "Tokenized physical assets"
    },
    {
      icon: Coins,
      title: "Liquidity Access",
      description: "24/7 trading availability"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trading & Blockchain Investments
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access institutional-grade trading strategies and blockchain-powered investments through our innovative platform.
          </p>
        </motion.div>

        {/* Investment Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <product.icon className="h-6 w-6 text-gold-500" />
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{product.description}</p>
              <div className="space-y-3 mb-6">
                {product.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="flex items-center text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-2"></span>
                    {metric}
                  </div>
                ))}
              </div>
              <button className="text-gold-500 font-semibold flex items-center group-hover:text-gold-400">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-dark-200 rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Key Advantages</h2>
            <p className="text-gray-400 text-lg">
              Why choose X-pand for trading and blockchain investments
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-8 w-8 text-gold-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Live Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gold Trading",
                metric: "89%",
                description: "Win rate on 4H timeframe"
              },
              {
                title: "NFT Farming",
                metric: "23%",
                description: "Average ROI from tokenization"
              },
              {
                title: "Prop Trading",
                metric: "1:5",
                description: "Leverage on S&P500 CFDs"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-4xl font-bold text-gold-500 mb-2">{metric.metric}</p>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Start Trading Today</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join successful traders leveraging our institutional-grade strategies
          </p>
          <button className="btn-primary">
            Open Trading Account
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TradingBlockchain;