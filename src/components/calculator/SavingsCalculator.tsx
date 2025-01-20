import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, DollarSign } from 'lucide-react';

const SavingsCalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    qaEngineers: 5,
    avgSalary: 80000,
    toolingCosts: 3000,
    infrastructureCosts: 2000
  });

  const calculateSavings = () => {
    const currentCosts = (
      formData.qaEngineers * formData.avgSalary +
      formData.qaEngineers * formData.toolingCosts +
      formData.infrastructureCosts * 12
    );
    
    const estimatedSavings = currentCosts * 0.6; // 60% savings
    return {
      current: currentCosts,
      savings: estimatedSavings,
      new: currentCosts - estimatedSavings
    };
  };

  const savings = calculateSavings();

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Calculate Your Savings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how much you could save with TestAmplify's AI-powered testing solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Enter Your Current Costs</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of QA Engineers
                </label>
                <input
                  type="number"
                  value={formData.qaEngineers}
                  onChange={(e) => setFormData({...formData, qaEngineers: parseInt(e.target.value) || 0})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Salary per Engineer ($)
                </label>
                <input
                  type="number"
                  value={formData.avgSalary}
                  onChange={(e) => setFormData({...formData, avgSalary: parseInt(e.target.value) || 0})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Tooling Costs per Engineer ($)
                </label>
                <input
                  type="number"
                  value={formData.toolingCosts}
                  onChange={(e) => setFormData({...formData, toolingCosts: parseInt(e.target.value) || 0})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Infrastructure Costs ($)
                </label>
                <input
                  type="number"
                  value={formData.infrastructureCosts}
                  onChange={(e) => setFormData({...formData, infrastructureCosts: parseInt(e.target.value) || 0})}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Your Estimated Savings
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-blue-200 mb-2">Current Annual Costs</p>
                <p className="text-3xl font-bold flex items-center">
                  <DollarSign className="w-6 h-6" />
                  {savings.current.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-blue-200 mb-2">Estimated Annual Savings</p>
                <p className="text-3xl font-bold text-green-400 flex items-center">
                  <DollarSign className="w-6 h-6" />
                  {savings.savings.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-blue-200 mb-2">New Annual Costs with TestAmplify</p>
                <p className="text-3xl font-bold flex items-center">
                  <DollarSign className="w-6 h-6" />
                  {savings.new.toLocaleString()}
                </p>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-blue-900 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get Started with TestAmplify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;