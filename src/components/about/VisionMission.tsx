import React from 'react';
import { Target, Rocket, Cpu } from 'lucide-react';

const VisionMission = () => {
  const items = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "To provide innovative test automation solutions that drive efficiency, ensuring businesses achieve unparalleled quality at the speed of market demands."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Vision",
      description: "To be the global leader in AI-driven test automation, setting the benchmark for excellence, innovation, and collaboration in the industry."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technology",
      description: "We use cutting-edge tech to revolutionize test automation with AI integration, promoting team collaboration for efficient, scalable, and future-ready project solutions."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VisionMission;