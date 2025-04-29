import { motion } from 'framer-motion';
import { Truck, Train, Plane, ArrowRight, Clock, Shield, TrendingUp, Warehouse, Landmark } from 'lucide-react';

const TransportLogistics = () => {
  const projects = [
    {
      title: "NRZ Freight Corridors",
      description: "15-year concessions for operating refurbished railway corridors connecting major mining regions to ports.",
      metrics: [
        "3M tons annual capacity",
        "15-year concession",
        "Chrome and lithium transport",
        "Maputo port access"
      ],
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80",
      icon: Train
    },
    {
      title: "Victoria Falls Airport",
      description: "Strategic expansion project including cargo terminals and aircraft maintenance facilities.",
      metrics: [
        "50,000 tons/year capacity",
        "100+ regional jets serviced",
        "10-year tax holiday",
        "Duty-free warehousing"
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
      icon: Plane
    },
    {
      title: "Harare-Beitbridge Highway",
      description: "Public-private partnership reducing transit times with revenue sharing from toll collections.",
      metrics: [
        "3.5-hour transit time",
        "$0.18/vehicle-km revenue",
        "AI route optimization",
        "Blockchain tracking"
      ],
      image: "https://images.unsplash.com/photo-1545179605-1296651e9d43?auto=format&fit=crop&q=80",
      icon: Truck
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Reduced Transit Times",
      description: "8 to 3.5 hours on key routes"
    },
    {
      icon: Shield,
      title: "Government Support",
      description: "100% capital allowance"
    },
    {
      icon: TrendingUp,
      title: "Proven Returns",
      description: "12-25% IRR potential"
    },
    {
      icon: Warehouse,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities"
    },
    {
      icon: Landmark,
      title: "Tax Benefits",
      description: "5-year VAT exemption"
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
            Transport & Logistics Investments
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capitalize on Zimbabwe's strategic position as Southern Africa's transportation hub through high-return infrastructure projects.
          </p>
        </motion.div>

        {/* Investment Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-gold-500"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <project.icon className="h-6 w-6 text-gold-500" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="space-y-3 mb-6">
                {project.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="flex items-center text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-2"></span>
                    {metric}
                  </div>
                ))}
              </div>
              <button className="text-gold-500 font-semibold flex items-center group-hover:text-gold-400">
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
              Why invest in transport and logistics with X-pand
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

        {/* Technology Integration */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Optimization",
                description: "Route optimization algorithms reduce fuel costs by 18% for truck fleets while improving delivery times.",
                metric: "18% cost reduction"
              },
              {
                title: "Blockchain Integration",
                description: "Smart customs clearance system reduces border delays from 5 days to just 8 hours.",
                metric: "5x faster clearance"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:border-gold-500 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors duration-300">{tech.title}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <p className="text-gold-500 font-bold text-2xl">{tech.metric}</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Join Africa's Logistics Revolution</h2>
          <p className="text-gray-400 text-lg mb-8">
            Invest in the future of African transportation infrastructure
          </p>
          <button className="btn-primary">
            Explore Opportunities
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TransportLogistics;