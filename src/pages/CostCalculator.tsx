import React from 'react';
import QACostsSection from '../components/calculator/QACostsSection';
import SavingsCalculator from '../components/calculator/SavingsCalculator';

const CostCalculator = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your QA Cost Savings
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how much you can save by switching to TestAmplify's AI-powered testing solution
          </p>
        </div>
      </div>

      {/* Current QA Costs Section */}
      <div id="current-costs">
        <QACostsSection />
      </div>

      {/* Savings Calculator Section */}
      <div id="calculate-savings">
        <SavingsCalculator />
      </div>
    </div>
  );
}

export default CostCalculator;