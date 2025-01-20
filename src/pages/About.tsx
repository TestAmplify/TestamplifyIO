import React from 'react';
import VisionMission from '../components/about/VisionMission';
import WhyChooseUs from '../components/about/WhyChooseUs';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionizing QA Testing with AI
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are at the forefront of revolutionizing the test automation landscape. With a blend of 
            cutting-edge AI technology and deep-rooted expertise, we empower businesses to elevate 
            their testing processes.
          </p>
        </div>
      </div>

      {/* Vision, Mission, Technology Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisionMission />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;