import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Clock, Calendar, Tag } from 'lucide-react';
import { blogs } from '../data/blogs';
import DOMPurify from 'dompurify';

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

  const createMarkup = (content: string) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <article className="pt-16 bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] md:h-[600px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sm text-blue-300 font-semibold mb-4">
                <Tag className="w-4 h-4" />
                {blog.category}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-200 text-sm sm:text-base">
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
      <div className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button
            onClick={() => navigate('/blog')}
            className="mb-8 inline-flex items-center text-[#142e84] hover:text-[#142e84]/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 font-light leading-relaxed border-b border-gray-100 pb-8">
              {blog.description}
            </p>
            
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={createMarkup(blog.content)}
            />
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{blog.author}</h3>
              <p className="text-gray-600">Technical Content Writer</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;