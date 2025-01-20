import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      traditional: {
        title: "Traditional Testing",
        points: [
          "High costs with dedicated QA teams",
          "Complex tool setup and maintenance",
          "Requires extensive QA expertise",
          "Days or weeks for feedback cycles",
          "Expensive tool licenses and training"
        ]
      },
      testamplify: {
        title: "TestAmplify.io",
        points: [
          "Pay-as-you-go testing plans",
          "Instant setup, no installation",
          "AI-powered test generation",
          "Results within hours",
          "Seamless integration with your tools"
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Smart Choice for Modern QA
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Perfect for startups, MVPs, and fast-paced development teams looking for efficient, 
          cost-effective testing solutions without compromising quality.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <React.Fragment key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100">
                <h3 className="text-xl font-semibold text-red-600 mb-6">
                  {comparison.traditional.title}
                </h3>
                <ul className="space-y-4">
                  {comparison.traditional.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <XCircle className="w-5 h-5 text-red-500 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
                <h3 className="text-xl font-semibold text-green-600 mb-6">
                  {comparison.testamplify.title}
                </h3>
                <ul className="space-y-4">
                  {comparison.testamplify.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;