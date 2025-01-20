import React from 'react';
import { Calendar } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Get Started
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a consultation with our testing experts and see how TestAmplify can transform your QA process.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <ContactForm />
              </div>
              
              {/* Calendar Booking */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Schedule a Meeting</h2>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">Book a Consultation</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Choose a convenient time for a 30-minute consultation with our testing experts.
                  </p>
                  <button
                    className="w-full bg-[#142e84] text-white py-3 px-6 rounded-lg hover:bg-[#142e84]/90 transition-colors"
                    onClick={() => window.open('https://calendly.com/incollabstudio/testamplify-taas', '_blank')}
                  >
                    Schedule Now
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold mb-4">What happens next?</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm mr-3 flex-shrink-0">1</span>
                      <span className="text-gray-600">We'll discuss your testing challenges and objectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm mr-3 flex-shrink-0">2</span>
                      <span className="text-gray-600">Our experts will create a customized testing plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm mr-3 flex-shrink-0">3</span>
                      <span className="text-gray-600">Get started with TestAmplify in less than 30 minutes</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;