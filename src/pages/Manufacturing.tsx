import { motion } from 'framer-motion';
import { Factory, ArrowRight, TrendingUp, Shield, Warehouse, Leaf, Briefcase, Building2, Truck } from 'lucide-react';

const Manufacturing = () => {
  const projects = [
    {
      title: "Textile Processing Hub",
      description: "State-of-the-art cotton processing facilities with integrated ginneries and modern Turkish machinery.",
      metrics: [
        "12 tons/hour lint production",
        "78% national cotton processing",
        "Duty-free machinery imports",
        "European retail partnerships"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80",
      icon: Factory
    },
    {
      title: "Steel & Cement Complex",
      description: "Integrated manufacturing facilities utilizing local iron ore reserves and innovative carbon reduction technologies.",
      metrics: [
        "82M tons ore reserves",
        "30% emissions reduction",
        "60% local materials quota",
        "Carbon credit benefits"
      ],
      image: "https://images.unsplash.com/photo-1565715101841-4e50654cbe76?auto=format&fit=crop&q=80",
      icon: Building2
    },
    {
      title: "Bulawayo Industrial Park",
      description: "Special Economic Zone offering unprecedented tax benefits and infrastructure advantages.",
      metrics: [
        "0% corporate tax until 2028",
        "50% power tariff discount",
        "Direct rail connections",
        "72-hour import approvals"
      ],
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
      icon: Warehouse
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "High Margins",
      description: "22-40% profit margins"
    },
    {
      icon: Shield,
      title: "Risk Protection",
      description: "ZIMTRADE price hedging"
    },
    {
      icon: Leaf,
      title: "Green Benefits",
      description: "Carbon credit trading"
    },
    {
      icon: Truck,
      title: "Export Access",
      description: "AfCFTA trade benefits"
    },
    {
      icon: Briefcase,
      title: "Tax Incentives",
      description: "Multi-year exemptions"
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
            Manufacturing Investment Opportunities
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capitalize on Zimbabwe's manufacturing renaissance with high-margin production facilities and export advantages through AfCFTA.
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
              className="card group"
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
              Why invest in Zimbabwe's manufacturing sector
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

        {/* Special Economic Zone Benefits */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white mb-8">Special Economic Zone Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tax & Duty Benefits",
                description: "Enjoy complete corporate tax exemption until 2028 and duty-free machinery imports, maximizing your return on investment.",
                metric: "0% Corporate Tax"
              },
              {
                title: "Infrastructure Support",
                description: "Access dedicated rail sidings and discounted power tariffs through ZETDC, reducing operational costs significantly.",
                metric: "50% Power Savings"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <p className="text-gold-500 font-bold text-2xl">{benefit.metric}</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Start Manufacturing in Zimbabwe</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the industrial revolution with unparalleled incentives and support
          </p>
          <button className="btn-primary">
            Explore Opportunities
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Manufacturing;