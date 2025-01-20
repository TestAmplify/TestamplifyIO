import React from 'react';
import { Zap, Clock, DollarSign, Shield, Cpu, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Efficiency",
      description: "Leverage advanced AI algorithms for smarter, faster testing cycles"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Results",
      description: "Get comprehensive test results in hours instead of days or weeks"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective",
      description: "Reduce QA costs by up to 60% while improving coverage and quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols protecting your testing data"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Cutting-Edge Tech Stack",
      description: "Always updated with the latest testing technologies and frameworks"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 expert support ensuring smooth testing operations"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose TestAmplify?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine AI innovation with industry expertise to deliver a testing solution that's faster, 
            smarter, and more cost-effective than traditional approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;