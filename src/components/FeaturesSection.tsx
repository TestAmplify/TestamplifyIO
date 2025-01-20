import React from 'react';
import { Zap, Clock, Cpu, Shield, Bot, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Save up to 60% on QA costs with AI-powered automation"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Results",
      description: "Get feedback in hours instead of days or weeks"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Testing",
      description: "Smart automation that learns and adapts to your needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security protecting your testing data"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "Deep insights into your testing process and results"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "AI that evolves with your application changes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Revolutionize Your Testing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-driven testing with features designed to transform 
            your QA workflow and deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#142e84]/10 text-[#142e84] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;