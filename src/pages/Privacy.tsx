import React from 'react';
import { Lock, Shield, Eye, Server } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy and data security are our top priorities
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Data Protection</h2>
              </div>
              <p className="text-gray-600 mb-6">
                TestAmplify implements industry-leading security measures to protect your testing data 
                and personal information. We use advanced encryption and secure protocols to ensure 
                your data remains private and protected.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Security Measures Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>End-to-end encryption for all data transfers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Secure data centers with 24/7 monitoring</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Data Collection</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We collect only essential information needed to provide our testing services:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="block text-gray-800">Account Information</strong>
                    <span className="text-gray-600">Name, email, and company details</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="block text-gray-800">Testing Data</strong>
                    <span className="text-gray-600">Test cases, results, and analytics</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <strong className="block text-gray-800">Usage Information</strong>
                    <span className="text-gray-600">Platform interaction and feature usage</span>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Data Usage</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Your data is used exclusively for:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Primary Uses</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Providing testing services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Improving platform performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Customer support</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Never Used For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Third-party marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Data selling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Unauthorized sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>
              <p className="text-gray-600 mb-6">
                You have full control over your data and can:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Request access to your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Update or correct your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Export your data in a portable format</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;