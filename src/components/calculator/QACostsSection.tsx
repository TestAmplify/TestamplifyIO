import React from 'react';
import { DollarSign, Users, Clock, Building2 } from 'lucide-react';

const QACostsSection = () => {
  const costFactors = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Manual Testing Team",
      description: "Average cost per QA engineer: $80,000/year",
      impact: "For a team of 5: $400,000 annually"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time to Market",
      description: "Delayed releases due to testing bottlenecks",
      impact: "2-4 weeks delay per release"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Tool Licenses",
      description: "Traditional testing tool licenses",
      impact: "$1,000-$5,000 per user annually"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Testing environment maintenance",
      impact: "$2,000-$5,000 monthly"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Current QA Costs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding your current QA costs is the first step toward optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {costFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                {factor.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
              <p className="text-gray-600 mb-4">{factor.description}</p>
              <p className="text-blue-600 font-semibold">{factor.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QACostsSection;