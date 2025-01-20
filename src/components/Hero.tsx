import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Gauge, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const handleCostCalculator = () => {
    navigate('/calculator#current-costs');
  };

  const handleVideoModal = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative bg-[#142e84] min-h-[92vh] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,#142e84,#2442a7)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22/%3E%3C/svg%3E')] bg-[size:20px_20px]" />
      </div>

      {/* Decorative illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute right-1/4 top-1/6 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-700" />
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500" />
        <img
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=300"
          alt="Abstract"
          className="absolute -right-20 top-1/3 w-96 opacity-10 rotate-12"
        />
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=300"
          alt="Abstract"
          className="absolute -left-20 bottom-1/3 w-96 opacity-10 -rotate-12"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 flex flex-col items-center justify-center min-h-[92vh]">
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <Bot className="w-4 h-4" />
            <span>AI-Powered Testing</span>
          </div>
          <div className="bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <Gauge className="w-4 h-4" />
            <span>10x Faster Results</span>
          </div>
        </div>

        {/* Headline Section */}
        <div className="text-center max-w-5xl mb-12">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-gradient-x mb-8">
            AI-Driven Testing Without the Hassle
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Transform your QA process with AI-powered automation. Get results 10x faster while reducing costs by up to 60%.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="inline-flex items-center gap-6">
          <button
            onClick={handleCostCalculator}
            className="group bg-white hover:bg-blue-50 text-[#142e84] px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Bot className="w-5 h-5" />
            <span className="text-lg">Reduce Your QA Costs Today</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={handleVideoModal} 
            className="text-white/80 hover:text-white transition-colors flex items-center gap-2 px-6 py-2 rounded-lg border border-white/20 hover:border-white/40"
          >
            <span className="text-lg">See how it works</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 border border-white/20">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white/90 text-sm">4.8 rating</span>
          <span className="text-white/60 text-sm">100+ reviews</span>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src="blob:https://www.youtube.com/218ab3c6-8469-4af7-8e39-53275e41e6e5?autoplay=1"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;