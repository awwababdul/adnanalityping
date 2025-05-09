
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Document Services Blog | Typing & Translation Services Dubai | Adnan Ali Typing</title>
        <meta name="description" content="Explore helpful articles on document services, visa processes, business setup requirements, typing services and translation requirements in Dubai and the UAE." />
        <meta name="keywords" content="Typing Services Dubai, Document Services Blog, UAE Visa Process, Business Setup Guide Dubai, Translation Services UAE" />
        <link rel="canonical" href="https://adnanalityping.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Document Services Blog
              </h1>
              <p className="text-xl text-gray-300">
                Expert guides, tips and insights on document processing, visa requirements, and business services in the UAE
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} variant="fadeInUp" delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image || "/placeholder.svg"} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Need Professional Document Services?
              </h2>
              <p className="text-gray-600 mb-8">
                Contact our team of experts for all your document processing, typing, and translation needs in Dubai.
              </p>
              <Link to="/contact" className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Contact Us Today
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
