import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How does AI-powered testing work?",
      answer: "Our AI analyzes your application's behavior, generates test cases, and continuously learns from results to improve coverage and efficiency. It combines machine learning with traditional testing approaches for optimal results."
    },
    {
      question: "What types of applications can TestAmplify test?",
      answer: "TestAmplify supports web applications, mobile apps, APIs, and enterprise software. Our platform is technology-agnostic and can adapt to various frameworks and programming languages."
    },
    {
      question: "How long does it take to set up TestAmplify?",
      answer: "Setup typically takes less than 30 minutes. Our platform integrates seamlessly with your existing CI/CD pipeline, and our team provides comprehensive onboarding support."
    },
    {
      question: "What makes TestAmplify different from traditional testing tools?",
      answer: "TestAmplify combines AI-driven automation, cloud scalability, and intelligent test maintenance to deliver faster, more reliable testing with minimal manual intervention."
    },
    {
      question: "Can I integrate TestAmplify with my existing tools?",
      answer: "Yes, TestAmplify integrates with popular development tools, CI/CD platforms, and issue tracking systems. We support GitHub, GitLab, Jenkins, JIRA, and many others."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, comprehensive documentation, and dedicated success managers for enterprise clients. Our team is always available to help you maximize testing efficiency."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about TestAmplify's AI-powered testing platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg ${
                  openIndex === index ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'
                } transition-all duration-200 shadow-md`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <p className={`mt-4 text-sm ${openIndex === index ? 'text-blue-100' : 'text-gray-600'}`}>
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;