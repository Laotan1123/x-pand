import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, TrendingUp, Shield, BookOpen, Clock } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  icon: React.ElementType;
  description: string;
  items: FAQItem[];
}

const FAQs = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleQuestion = (sectionTitle: string, questionIndex: number) => {
    const key = `${sectionTitle}-${questionIndex}`;
    setOpenQuestions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqSections: FAQSection[] = [
    {
      title: "Real Estate & Land Ownership",
      icon: Building2,
      description: "Learn about property investment opportunities in Nigeria and Zimbabwe.",
      items: [
        {
          question: "Can foreigners buy land in Nigeria through X-pand?",
          answer: "Yes, non-Nigerians can legally acquire land in Nigeria through what's called a Right of Occupancy, granted by the government. X-pand works with reputable real estate companies that provide properties with proper documentation (e.g., Certificate of Occupancy). We also guide foreign investors through the legal process, including obtaining Governor's Consent where required."
        },
        {
          question: "What about Zimbabwe? Can foreigners invest in property there?",
          answer: "Absolutely. Foreigners can invest in property through partnerships with licensed developers or companies. All investments are overseen and protected by ZIDA (Zimbabwe Investment and Development Agency), ensuring legal compliance and investor protection."
        },
        {
          question: "How do I know the land is legit and secure?",
          answer: "At X-pand, we partner only with vetted real estate companies that provide verified titles and documents. Before listing any property, our team conducts thorough due diligence. You'll have access to those documents, and we encourage legal consultation where necessary."
        }
      ]
    },
    {
      title: "Investment Structure & Returns",
      icon: TrendingUp,
      description: "Understand our investment models and potential returns.",
      items: [
        {
          question: "What's the minimum amount I need to start investing?",
          answer: (
            <div>
              We offer flexible packages across sectors:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Real Estate: From $300</li>
                <li>Farming: From $100</li>
                <li>Trading & Blockchain: From $100</li>
                <li>Transport & Tech: From $200</li>
                <li>Hospitality or Energy: From $500</li>
              </ul>
            </div>
          )
        },
        {
          question: "How are investments structured?",
          answer: "Investments are made through a crowdfunding model, giving you fractional ownership (measured in units or shares). Your returns are proportional to your stake, and we provide clear terms for each opportunity."
        },
        {
          question: "What returns should I expect?",
          answer: (
            <div>
              Returns vary depending on the sector:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Real Estate: 8–15% annually</li>
                <li>Farming: 10–20% annually</li>
                <li>Trading/Blockchain: 1–10% monthly</li>
                <li>Energy & Hospitality: 12–25% annually</li>
              </ul>
              We never guarantee profit, but we always show you historical data, projections, and risk levels.
            </div>
          )
        }
      ]
    },
    {
      title: "Tracking & Transparency",
      icon: Clock,
      description: "Monitor your investments and understand our reporting.",
      items: [
        {
          question: "Can I monitor my investments in real-time?",
          answer: "Yes! Each user will have a dashboard where you can track your investments, ROI, project updates, and documents. We believe in full transparency from day one."
        },
        {
          question: "Will there be a calculator to estimate returns?",
          answer: "Definitely. You'll find custom calculators on each investment page that let you test different scenarios based on how much you want to invest and for how long."
        },
        {
          question: "Can I compare different investment options?",
          answer: "Yes. In future updates, we'll include a comparison tool to help you evaluate opportunities by ROI, risk, sector, and duration—making smarter investing easier."
        }
      ]
    },
    {
      title: "Education & Community",
      icon: BookOpen,
      description: "Resources and support for investors at all levels.",
      items: [
        {
          question: "I'm new to investing. Can I still use X-pand?",
          answer: (
            <div>
              100%. In fact, that's why we exist—to make investing simple and safe for people with little or no experience. Our platform includes:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Short guides</li>
                <li>Video explainers</li>
                <li>Free webinars</li>
                <li>Learning community groups</li>
              </ul>
            </div>
          )
        },
        {
          question: "Will I get updates on my investments?",
          answer: "Yes. You'll receive regular updates via your dashboard and email. Some projects also include videos and image reports from the field."
        },
        {
          question: "Are there any testimonials I can read?",
          answer: "Yes, we'll be featuring real investor stories and videos to show how others are using X-pand to grow their wealth."
        }
      ]
    },
    {
      title: "Security & Legal Assurance",
      icon: Shield,
      description: "Understanding our security measures and legal compliance.",
      items: [
        {
          question: "Is my money safe?",
          answer: (
            <div>
              While every investment carries risk, X-pand takes extra steps to minimize that risk through:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Due diligence</li>
                <li>Partner verification</li>
                <li>Transparent contracts</li>
                <li>Clear ROI expectations</li>
              </ul>
            </div>
          )
        },
        {
          question: "Is X-pand licensed or registered?",
          answer: "We are in the process of securing all required licenses and legal affiliations in both Nigeria and Zimbabwe, working with local regulators and investment boards."
        },
        {
          question: "What if I need to pull out my investment early?",
          answer: "Exit options depend on the investment type. Some allow early withdrawal with notice or fees, while others require a fixed duration. Each listing includes terms so you know what you're getting into upfront."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-100 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to know about investing with X-pand
          </p>
        </div>

        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-dark-200 rounded-xl border border-dark-300 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <section.icon className="h-6 w-6 text-emerald-500" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">{section.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-emerald-500 transition-transform ${
                    openSections[section.title] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openSections[section.title] && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 space-y-4">
                      {section.items.map((item, itemIndex) => {
                        const questionKey = `${section.title}-${itemIndex}`;
                        return (
                          <div
                            key={itemIndex}
                            className="border-b border-dark-300 last:border-0"
                          >
                            <button
                              onClick={() => toggleQuestion(section.title, itemIndex)}
                              className="w-full py-4 flex items-center justify-between text-left"
                            >
                              <span className="text-gray-200 font-medium pr-8">
                                {item.question}
                              </span>
                              <ChevronDown
                                className={`h-5 w-5 text-emerald-500 transition-transform flex-shrink-0 ${
                                  openQuestions[questionKey] ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openQuestions[questionKey] && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-4 text-gray-400">
                                    {item.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;