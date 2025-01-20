import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 mb-8">
          <Users className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl font-bold mb-6">Our Global Team</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
          Our team collaborates seamlessly with diverse organizations worldwide, ensuring we're always 
          at the forefront of cutting-edge technologies and testing methodologies.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Global Clients", value: "100+" },
            { label: "Team Members", value: "50+" },
            { label: "Success Rate", value: "99%" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;