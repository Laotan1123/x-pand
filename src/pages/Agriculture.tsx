import { motion } from 'framer-motion';
import { Sprout, Leaf, Sun, TrendingUp, Shield, HandshakeIcon, ArrowRight } from 'lucide-react';

const Agriculture = () => {
  const projects = [
    {
      title: "Choice Farm Estate 3",
      location: "Abeokuta, Nigeria",
      price: "Starting at $270",
      size: "300 square meters",
      features: [
        "Solar-powered irrigation",
        "24/7 security patrols",
        "Laterite soil",
        "Multiple harvest cycles"
      ],
      crops: ["Cassava", "Oil Palm", "Maize", "Vegetables"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
    },
    {
      title: "Mashonaland East Farms",
      location: "Zimbabwe",
      price: "Investment from $500",
      size: "Flexible plot sizes",
      features: [
        "94.8% production growth",
        "Irrigation systems",
        "5-ton/hectare yields",
        "Government support"
      ],
      crops: ["Soybean", "Cotton", "Tobacco"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80"
    },
    {
      title: "Matabeleland Cattle Ranch",
      location: "Zimbabwe",
      price: "From $1,000",
      size: "Shared ownership",
      features: [
        "18-24 month cycles",
        "Guaranteed offtake",
        "Export agreements",
        "Professional management"
      ],
      crops: ["Livestock breeding", "Cattle ranching"],
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80"
    }
  ];

  const features = [
    {
      icon: Sun,
      title: "Year-round Production",
      description: "Solar-powered irrigation systems enable multiple harvest cycles"
    },
    {
      icon: Leaf,
      title: "Drought Resistant",
      description: "IITA hybrid crops ensure consistent yields"
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "ZIDA-backed titles and CBN-insured financing"
    },
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Guaranteed buyers at 15-30% above market rates"
    },
    {
      icon: HandshakeIcon,
      title: "Expert Management",
      description: "Professional farm managers and support"
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
            Agricultural Investment Opportunities
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Invest in Africa's most fertile lands and thriving agribusiness value chains.
            Generate returns through crop yields and land appreciation.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-emerald-500"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-emerald-500 font-semibold mb-4">{project.price}</p>
              <div className="flex items-center text-gray-400 mb-4">
                <Sprout className="h-4 w-4 mr-2" />
                {project.location}
              </div>
              <p className="text-gray-400 mb-4">{project.size}</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Supported Crops:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.crops.map((crop, cIndex) => (
                    <span
                      key={cIndex}
                      className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-sm"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-400 flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-emerald-500 font-semibold flex items-center group-hover:text-emerald-400">
                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-dark-200 rounded-2xl p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Key Advantages</h2>
            <p className="text-gray-400 text-lg">
              Why agricultural investments with X-pand make sense
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
                <feature.icon className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Streams */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Dual Revenue Streams</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Crop Sales Revenue",
                description: "Generate income through multiple harvest cycles annually, with guaranteed buyers and premium pricing.",
                timeline: "Annual returns"
              },
              {
                title: "Land Appreciation",
                description: "Benefit from natural land value appreciation in rapidly developing agricultural regions.",
                timeline: "3-5 year horizon"
              }
            ].map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{stream.title}</h3>
                <p className="text-gray-400 mb-4">{stream.description}</p>
                <span className="text-emerald-500 font-semibold">{stream.timeline}</span>
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
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Farming Journey</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join successful investors already benefiting from agricultural returns
          </p>
          <button className="btn-primary">
            Explore Farm Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Agriculture;