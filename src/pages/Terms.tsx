import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using TestAmplify's services
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Service Terms
              </h2>
              <p className="text-gray-600 mb-4">
                By accessing and using TestAmplify's AI-powered testing platform, you agree to comply 
                with and be bound by these terms and conditions. Our services are provided "as is" 
                and are designed to help optimize your QA testing processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <span>Users must maintain the confidentiality of their account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <span>All testing data remains the property of the client</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  <span>Service availability is subject to maintenance and updates</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Usage Policy</h2>
              <p className="text-gray-600 mb-4">
                TestAmplify's services are provided for legitimate testing purposes only. Users agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the service for any illegal activities</li>
                <li>Attempt to breach or circumvent service security</li>
                <li>Share account access with unauthorized users</li>
                <li>Reverse engineer the testing algorithms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Billing and Subscriptions</h2>
              <p className="text-gray-600 mb-4">
                Payment terms are based on the selected subscription plan. Users agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Pay all fees according to the chosen billing cycle</li>
                <li>Maintain valid payment information</li>
                <li>Contact support for any billing discrepancies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Service Modifications</h2>
              <p className="text-gray-600">
                TestAmplify reserves the right to modify or discontinue services with appropriate notice. 
                Users will be notified of any significant changes to these terms or service features.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;