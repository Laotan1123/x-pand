import { motion } from 'framer-motion';
import { Building2, Shield, Users2, Globe2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe2,
      title: "African Market Expertise",
      description: "Deep understanding of Nigerian and Zimbabwean markets"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Secured transactions and ownership records"
    },
    {
      icon: Building2,
      title: "Accessible Investments",
      description: "Premium assets made affordable through crowdfunding"
    },
    {
      icon: Users2,
      title: "Strong Partnerships",
      description: "Backed by governments and financial institutions"
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
            Unlocking Investment Opportunities for Everyone
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At X-pand, we democratize access to high-value investments across Africa. Our platform specializes in real estate, agriculture, technology, mining, and renewable energy projects, making them accessible through innovative crowdfunding models.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Office meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We bridge the gap between capital and opportunity by breaking down large-scale projects into affordable investments. Whether it's a $1,000 real estate plot in Lagos or a shared stake in Zimbabwean lithium mines, we handle the research, due diligence, and management so you can invest with confidence.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <feature.icon className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;