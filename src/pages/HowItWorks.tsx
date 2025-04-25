import { motion } from 'framer-motion';
import { Search, Wallet, TrendingUp, Blocks, UserCheck, DoorOpen, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Opportunities",
      description: "Explore our curated selection of real estate developments, agricultural projects, tech innovations, and mining ventures. Each opportunity includes detailed information about location, projected returns, and investment requirements."
    },
    {
      icon: Wallet,
      title: "Select Your Investment",
      description: "Choose to invest a portion or full stake in any project. Our crowdfunding model allows participation with amounts as low as $270 for farmland or $1,000 for prime real estate. Payment plans and financing options are available for larger investments."
    },
    {
      icon: TrendingUp,
      title: "Earn Returns",
      description: "Watch your investment grow through regular updates on our platform. Returns may come through rental income, agricultural yields, mineral royalties, or asset appreciation, depending on your chosen sector."
    }
  ];

  const features = [
    {
      icon: Blocks,
      title: "Blockchain Registration",
      description: "All investments are blockchain-registered for transparency"
    },
    {
      icon: UserCheck,
      title: "Dedicated Management",
      description: "Dedicated account managers for premium investors"
    },
    {
      icon: DoorOpen,
      title: "Flexible Exit Options",
      description: "Flexible exit strategies for liquidity options"
    },
    {
      icon: FileCheck,
      title: "Risk Assessment",
      description: "Comprehensive risk assessment for every project"
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
            Three Simple Steps to Start Investing
          </h1>
        </motion.div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="card h-full">
                <div className="relative">
                  <step.icon className="h-12 w-12 text-emerald-500 mb-6" />
                  <div className="absolute top-0 right-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-dark-100 font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-dark-200 rounded-2xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Investing?</h2>
          <button className="btn-primary">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;