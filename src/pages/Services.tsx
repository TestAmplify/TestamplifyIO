import React from 'react';
import { Zap, Code, GitBranch, Workflow, Bot, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Test Generation",
      description: "Automatically generate comprehensive test cases using advanced AI algorithms that understand your application's behavior and requirements.",
      features: [
        "Smart test case generation",
        "Automated test maintenance",
        "Continuous learning & optimization"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "End-to-End Testing",
      description: "Comprehensive testing across your entire application stack, from UI interactions to API integrations and database operations.",
      features: [
        "Cross-browser testing",
        "Mobile responsiveness",
        "API integration testing"
      ]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "CI/CD Integration",
      description: "Seamlessly integrate automated testing into your development pipeline with support for all major CI/CD platforms.",
      features: [
        "GitHub Actions integration",
        "Jenkins pipeline support",
        "Automated deployment testing"
      ]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Performance Testing",
      description: "Ensure your application performs under pressure with comprehensive load testing and performance monitoring.",
      features: [
        "Load testing",
        "Stress testing",
        "Performance monitoring"
      ]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Automated Regression Testing",
      description: "Catch bugs before they reach production with automated regression testing that ensures new changes don't break existing functionality.",
      features: [
        "Visual regression testing",
        "Automated test execution",
        "Detailed regression reports"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Testing",
      description: "Protect your application with comprehensive security testing that identifies vulnerabilities before they can be exploited.",
      features: [
        "Vulnerability scanning",
        "Security compliance testing",
        "Penetration testing"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Testing Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From AI-powered test generation to end-to-end testing solutions, we provide everything 
            you need to ensure your application's quality and reliability.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
    </div>
  );
};

export default Services;