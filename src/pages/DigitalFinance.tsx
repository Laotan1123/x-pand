import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Shield, ArrowRight, Banknote, Receipt, Building2, BarChart as ChartBar, Clock } from 'lucide-react';

const DigitalFinance = () => {
  const products = [
    {
      title: "High-Yield Savings",
      description: "Government-insured savings accounts with premium returns and flexible liquidity options.",
      metrics: [
        "7-12% annual yields",
        "30-day liquidity",
        "NDIC insured",
        "CBN certified"
      ],
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80",
      icon: Wallet
    },
    {
      title: "Digital Currency Solutions",
      description: "Access Zimbabwe's digital finance revolution through secure, regulated channels.",
      metrics: [
        "0.2% conversion fees",
        "9% APY on CBDC",
        "$7B annual volume",
        "FINTRAC compliant"
      ],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
      icon: Banknote
    },
    {
      title: "Supply Chain Finance",
      description: "Blockchain-powered working capital solutions for businesses across sectors.",
      metrics: [
        "8% interest rate",
        "60-day credit terms",
        "4-hour settlements",
        "Smart contracts"
      ],
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80",
      icon: Receipt
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "NDIC insurance up to ₦500,000"
    },
    {
      icon: Building2,
      title: "Institutional Partners",
      description: "CBN-certified banking partners"
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "197% YoY fintech growth"
    },
    {
      icon: ChartBar,
      title: "Risk Reduction",
      description: "63% lower forex risk"
    },
    {
      icon: Clock,
      title: "Quick Settlement",
      description: "4-hour transaction clearing"
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
            Digital Finance Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access innovative financial products bridging traditional banking with cutting-edge fintech.
            Secure, regulated, and designed for growth.
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
              className="card group hover:border-gold-500"
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
              <button className="text-gold-500 font-semibold flex items-center hover:text-gold-400 transition-colors">
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
              Why choose X-pand for digital finance investments
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

        {/* Investment Portfolio */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Diversified Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agro-bonds",
                allocation: "15%",
                description: "Agricultural sector bonds"
              },
              {
                title: "Infrastructure",
                allocation: "35%",
                description: "Infrastructure debt instruments"
              },
              {
                title: "Blue-chip Equities",
                allocation: "50%",
                description: "Premium stock holdings"
              }
            ].map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:border-gold-500"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{asset.title}</h3>
                <p className="text-4xl font-bold text-gold-500 mb-2">{asset.allocation}</p>
                <p className="text-gray-400">{asset.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Digital Finance Journey</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the financial revolution with secure, regulated investment options
          </p>
          <button className="bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-all duration-300 transform hover:scale-105 font-semibold">
            Open Account
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalFinance;