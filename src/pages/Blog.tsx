import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { blogs } from '../data/blogs';

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = Array.from(new Set(blogs.map(blog => blog.category)));

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs[0];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#142e84] to-blue-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Insights & Resources
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Expert insights, industry trends, and practical guides on AI-powered testing and quality assurance
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                !selectedCategory 
                  ? 'bg-[#142e84] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#142e84] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {!searchTerm && !selectedCategory && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-[#142e84] font-semibold mb-4">
                    <Tag className="w-4 h-4" />
                    {featuredBlog.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredBlog.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredBlog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredBlog.readTime}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/blog/${featuredBlog.id}`)}
                    className="inline-flex items-center text-[#142e84] hover:text-[#142e84]/80 font-medium group"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory ? filteredBlogs : filteredBlogs.slice(1)).map((blog) => (
                <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#142e84]">
                        <Tag className="w-3 h-3" />
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-900">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <button
                      onClick={() => navigate(`/blog/${blog.id}`)}
                      className="inline-flex items-center text-[#142e84] hover:text-[#142e84]/80 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;