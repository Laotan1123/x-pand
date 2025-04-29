import { motion } from 'framer-motion';
import { Building2, Sprout, Cpu, Pickaxe, Wind, BookOpen, TrendingUp, Users2, GraduationCap, FileText } from 'lucide-react';

const Learn = () => {
  const sectors = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Invest in strategic properties across Nigeria's urban centers and Zimbabwe's developing areas. Our portfolio includes residential developments, commercial spaces, and tourism properties with strong appreciation potential.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Participate in commercial farming ventures or own farmland with full support services. Options range from cash crop production to livestock operations, all selected for their profitability and growth potential.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
    },
    {
      icon: Cpu,
      title: "Technology & Innovation",
      description: "Access Africa's digital revolution through blockchain projects, fintech solutions, and AI applications. These cutting-edge opportunities offer exposure to the continent's fastest-growing sector.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
    },
    {
      icon: Pickaxe,
      title: "Mining & Resources",
      description: "Fractional ownership in verified mineral projects including gold, lithium, and platinum mines. All operations comply with government regulations and international standards.",
      image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80"
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description: "Contribute to sustainable power solutions while earning returns. Our solar, wind, and hydro projects address Africa's energy needs while providing stable, long-term income.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
    }
  ];

  const resources = [
    {
      icon: TrendingUp,
      title: "Market Trend Reports",
      description: "Quarterly updates on sector performance and market analysis",
      color: "emerald"
    },
    {
      icon: GraduationCap,
      title: "Investment Strategy Guides",
      description: "Comprehensive guides for beginners to advanced investors",
      color: "gold"
    },
    {
      icon: Users2,
      title: "Webinars & Workshops",
      description: "Interactive sessions on specific investment sectors",
      color: "emerald"
    },
    {
      icon: FileText,
      title: "Investment Glossary",
      description: "Detailed explanations of investment terms and concepts",
      color: "gold"
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
            Investment Sectors Explained
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our diverse range of investment opportunities and learn how to make informed decisions.
          </p>
        </motion.div>

        {/* Investment Sectors */}
        <div className="space-y-16 mb-24">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-60"></div>
              </div>
              <div className={`${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <sector.icon className="h-8 w-8 text-emerald-500" />
                  <h2 className="text-2xl font-bold text-white">{sector.title}</h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-200 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Educational Resources</h2>
            <p className="text-gray-400 text-lg">
              Enhance your investment knowledge with our comprehensive learning materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card text-center hover:border-${resource.color}-500 group`}
              >
                <resource.icon className={`h-12 w-12 text-${resource.color}-500 mx-auto mb-4 group-hover:text-${resource.color}-400`} />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-${resource.color}-500">{resource.title}</h3>
                <p className="text-gray-400">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <button className="btn-primary">
            Access Resources
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;