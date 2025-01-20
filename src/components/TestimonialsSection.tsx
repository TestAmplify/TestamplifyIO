import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <Quote className="w-10 h-10 text-blue-500 mb-4" />
    <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
    <div>
      <p className="font-semibold text-gray-900">{testimonial.author}</p>
      <p className="text-gray-600">{testimonial.role}</p>
      <p className="text-blue-600">{testimonial.company}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "TestAmplify reduced our testing costs by 60% while improving our coverage. The AI-powered testing is a game-changer for our CI/CD pipeline.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechStart Solutions"
    },
    {
      quote: "We switched from traditional QA to TestAmplify and saw immediate results. Our feedback cycles went from days to hours.",
      author: "Michael Rodriguez",
      role: "Engineering Manager",
      company: "InnovateLab"
    },
    {
      quote: "The seamless integration and zero setup time made TestAmplify perfect for our fast-paced development environment.",
      author: "Emily Watson",
      role: "Lead Developer",
      company: "AgileFlow Systems"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how teams are transforming their testing process with TestAmplify
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;