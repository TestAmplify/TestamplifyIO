import React from 'react';
import { Handshake, Users, BarChart, Rocket, MessageSquare, Calendar } from 'lucide-react';

const Engagement = () => {
  const engagementModels = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Project-Based",
      description: "Perfect for specific testing initiatives or time-bound projects",
      features: [
        "Dedicated project manager",
        "Custom test strategy",
        "Fixed scope and timeline",
        "Detailed reporting"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Augmentation",
      description: "Extend your QA capabilities with our expert testing professionals",
      features: [
        "Skilled QA engineers",
        "Flexible team scaling",
        "Knowledge transfer",
        "Seamless integration"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Continuous Testing",
      description: "Ongoing testing support integrated with your development lifecycle",
      features: [
        "24/7 testing coverage",
        "CI/CD integration",
        "Regular reporting",
        "Continuous improvement"
      ]
    }
  ];

  const processSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Initial Consultation",
      description: "We discuss your testing needs, challenges, and objectives"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Strategy Planning",
      description: "Develop a customized testing strategy aligned with your goals"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Implementation",
      description: "Execute the strategy with our AI-powered testing platform"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Engagement Models
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Flexible engagement options designed to meet your specific testing needs and business objectives
          </p>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work With You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the engagement model that best fits your organization's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Engagement Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth and effective testing partnership
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute h-0.5 bg-blue-200 w-24 transform translate-x-32"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;