import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Clock, Calendar } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 inline-flex items-center text-[#142e84] hover:text-[#142e84]/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section with Image */}
      <div className="relative h-[600px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>
              <div className="flex items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/blog')}
          className="mb-8 inline-flex items-center text-[#142e84] hover:text-[#142e84]/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <div className="prose prose-lg max-w-none">
          <p className="text-2xl text-gray-600 mb-12 font-light leading-relaxed">{blog.description}</p>
          <div className="space-y-8">
            {blog.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                // Heading
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('```')) {
                // Code block
                const code = paragraph.split('\n').slice(1, -1).join('\n');
                return (
                  <pre key={index} className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                );
              } else {
                // Regular paragraph
                return <p key={index} className="text-gray-700 leading-relaxed">{paragraph}</p>;
              }
            })}
          </div>
        </div>
        </div>
      </div>
  );
};

export default BlogPost;