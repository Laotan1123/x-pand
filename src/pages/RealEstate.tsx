import { motion } from 'framer-motion';
import { Building2, MapPin, TrendingUp, Wallet, Clock, ArrowRight } from 'lucide-react';

const RealEstate = () => {
  const properties = [
    {
      title: "The Residence Estate, Imota",
      location: "Lagos, Nigeria",
      price: "Starting at $1,000",
      size: "300 square meters",
      features: [
        "Gated community",
        "Near Imota Rice Mill",
        "Close to Caleb University",
        "Clear titles"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    },
    {
      title: "New Castle Development",
      location: "Epe, Lagos",
      price: "Plots from $1,600",
      size: "Up to 16,000 sqm available",
      features: [
        "Near Dangote Refinery",
        "Lekki Free Trade Zone proximity",
        "Future commercial hub",
        "High appreciation potential"
      ],
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80"
    },
    {
      title: "Victoria Falls Resort",
      location: "Victoria Falls, Zimbabwe",
      price: "Investment from $2,000",
      size: "Shared ownership available",
      features: [
        "Tourism hotspot",
        "High rental yield",
        "Natural wonder proximity",
        "Growing market"
      ],
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
    }
  ];

  const features = [
    {
      icon: Building2,
      title: "Premium Locations",
      description: "Strategic properties in high-growth areas"
    },
    {
      icon: MapPin,
      title: "Verified Titles",
      description: "All properties with clear documentation"
    },
    {
      icon: TrendingUp,
      title: "Growth Potential",
      description: "Markets projected to reach $85B by 2025"
    },
    {
      icon: Wallet,
      title: "Flexible Investment",
      description: "Start from $1,000 with payment plans"
    },
    {
      icon: Clock,
      title: "12-Month Plans",
      description: "Extended payment options available"
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
            Premium Real Estate Investments
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access high-potential properties across Africa's fastest-growing markets. 
            From Lagos to Harare, we offer carefully vetted opportunities with strong appreciation potential.
          </p>
        </motion.div>

        {/* Featured Properties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{property.title}</h3>
              <p className="text-emerald-500 font-semibold mb-4">{property.price}</p>
              <div className="flex items-center text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {property.location}
              </div>
              <p className="text-gray-400 mb-4">{property.size}</p>
              <ul className="space-y-2 mb-6">
                {property.features.map((feature, fIndex) => (
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
            <h2 className="text-3xl font-bold text-white mb-4">Why Invest with X-pand</h2>
            <p className="text-gray-400 text-lg">
              Secure, transparent, and profitable real estate investments
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

        {/* Investment Models */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Investment Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Ownership",
                description: "Purchase full plots with clear titles and complete control over your property."
              },
              {
                title: "Crowdfunding",
                description: "Participate in shared ownership with investments starting from $1,000."
              },
              {
                title: "Land Banking",
                description: "Secure pre-development land at reduced prices for maximum appreciation."
              }
            ].map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{model.title}</h3>
                <p className="text-gray-400">{model.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Investing?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of investors building wealth through African real estate
          </p>
          <button className="btn-primary">
            Explore Properties
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RealEstate;