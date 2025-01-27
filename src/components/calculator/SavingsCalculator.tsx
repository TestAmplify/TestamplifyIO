import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const SavingsCalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    qaEngineers: 5,
    avgSalary: 80000,
    toolingCosts: 3000,
    infrastructureCosts: 2000
  });

  const formatLargeNumber = (num: number): string => {
    const formatUSDLarge = (value: number, suffix: string = ''): string => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value) + suffix;
    };

    if (num >= 1e12) { // Trillion
      return formatUSDLarge(num / 1e12, );
    } else if (num >= 1e9) { // Billion
      return formatUSDLarge(num / 1e9,);
    } else if (num >= 1e6) { // Million
      return formatUSDLarge(num / 1e6,);
    } else {
      return formatUSDLarge(num);
    }
  };

  const formatUSD = (value: number): string => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

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
    <div className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Calculate Your Savings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            See how much you could save with TestAmplify's AI-powered testing solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Enter Your Current Costs</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of QA Engineers
                </label>
                <input
                  type="text"
                  value={formData.qaEngineers === 0 ? '0' : formData.qaEngineers}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow numbers
                    if (!/^\d*$/.test(value)) return;
                    
                    // Remove leading zeros and convert to number
                    const numValue = value ? parseInt(value, 10) : 0;
                    
                    // Limit to reasonable number
                    if (numValue > 99999999) return;
                    
                    setFormData({
                      ...formData,
                      qaEngineers: numValue
                    });
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  maxLength={10}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Salary per Engineer ($)
                </label>
                <input
                  type="text"
                  value={formData.avgSalary === 0 ? '0' : formatUSD(formData.avgSalary)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, '');
                    if (!/^\d*$/.test(value)) return;
                    
                    const numValue = value ? parseInt(value, 10) : 0;
                    if (numValue > 9999999999999) return;
                    
                    setFormData({
                      ...formData,
                      avgSalary: numValue
                    });
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  maxLength={15}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Tooling Costs per Engineer ($)
                </label>
                <input
                  type="text"
                  value={formData.toolingCosts === 0 ? '0' : formatUSD(formData.toolingCosts)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, '');
                    if (!/^\d*$/.test(value)) return;
                    
                    const numValue = value ? parseInt(value, 10) : 0;
                    if (numValue > 9999999999999) return;
                    
                    setFormData({
                      ...formData,
                      toolingCosts: numValue
                    });
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Infrastructure Costs ($)
                </label>
                <input
                  type="text"
                  value={formData.infrastructureCosts === 0 ? '0' : formatUSD(formData.infrastructureCosts)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, '');
                    if (!/^\d*$/.test(value)) return;
                    
                    const numValue = value ? parseInt(value, 10) : 0;
                    if (numValue > 999999999999999) return;
                    
                    setFormData({
                      ...formData,
                      infrastructureCosts: numValue
                    });
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  maxLength={20}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-lg p-4 sm:p-8 text-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
              Your Estimated Savings
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-blue-200 mb-1 sm:mb-2 text-sm sm:text-base">Current Annual Costs</p>
                <p className="text-2xl sm:text-3xl font-bold flex items-center">
                  <span className="truncate">
                    {formatLargeNumber(savings.current)}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-blue-200 mb-1 sm:mb-2 text-sm sm:text-base">Estimated Annual Savings</p>
                <p className="text-2xl sm:text-3xl font-bold text-green-400 flex items-center">
                  <span className="truncate">
                    {formatLargeNumber(savings.savings)}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-blue-200 mb-1 sm:mb-2 text-sm sm:text-base">New Annual Costs with TestAmplify</p>
                <p className="text-2xl sm:text-3xl font-bold flex items-center">
                  <span className="truncate">
                    {formatLargeNumber(savings.new)}
                  </span>
                </p>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-blue-900 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-50 transition-colors">
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