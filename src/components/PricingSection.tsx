import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingTier = ({
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  onGetStarted
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onGetStarted: () => void;
}) => (
  <div className={`bg-white rounded-2xl shadow-xl relative cursor-pointer
   hover:border-blue-500 hover:border-2 ${highlighted ? 'ring-2 ring-blue-600' : ''}`}>
    <div className="p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="flex items-baseline mb-2">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 ml-1">/hour</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-blue-500 mr-3" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 bg-gray-50 rounded-b-2xl">
      <button
        onClick={onGetStarted}
        className={`w-full py-3 px-6 rounded-lg font-medium ${
          highlighted 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
        } transition-colors`}>
        Get Started
      </button>
    </div>
  </div>
);

const PricingSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const plans = [
    {
      name: 'Startup',
      price: '$99',
      description: 'Perfect for early-stage startups and MVPs',
      features: [
        'UI & API Automation Testing',
        'Starts at 100 hours/month',
        'AI-powered test generation',
        'Basic integrations',
        '8-hour feedback cycle',
        'Email support'
      ]
    },
    {
      name: 'Scale-Up',
      price: '$199',
      description: 'For growing teams with regular testing needs',
      features: [
        'Everything in Startup Plan',
        'Starts at 200 hours/month',
        'Advanced AI test optimization',
        'Priority integrations',
        '4-hour feedback cycle',
        '24/7 priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited test runs',
        'Custom AI model training',
        'Enterprise integrations',
        '1-hour feedback cycle',
        'Dedicated success manager'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your testing needs. All plans include our core AI-powered testing features.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingTier key={plan.name} {...plan} onGetStarted={handleGetStarted} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;