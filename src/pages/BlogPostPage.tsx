
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .filter(p => p.categories.some(cat => post?.categories.includes(cat)))
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Adnan Ali Typing</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.categories.join(', ')} />
        <link rel="canonical" href={`https://adnanalityping.com/blog/${post.slug}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://adnanalityping.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.image || "https://adnanalityping.com/og-image.png"} />
        
        {/* Article specific tags */}
        <meta property="article:published_time" content={post.publishedDate || post.date} />
        <meta property="article:author" content={post.author.name} />
        {post.categories.map((category, index) => (
          <meta key={index} property="article:tag" content={category} />
        ))}
      </Helmet>

      {/* Blog Post Hero */}
      <section className="pt-16 pb-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <AnimatedSection variant="fadeInUp">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex flex-wrap items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {post.categories.map((category, index) => (
                    <span key={category} className="text-sm">
                      {category}{index < post.categories.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
        <AnimatedSection variant="fadeInUp">
          <div className="max-w-4xl mx-auto">
            <div className="w-full rounded-xl overflow-hidden shadow-xl">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInUp">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={post.author.avatar || "/placeholder.svg"} 
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{post.author.name}</div>
                    <div className="text-gray-600">{post.author.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection variant="fadeInUp">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.slug} variant="fadeInUp" delay={index * 0.1}>
                  <Link to={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image || "/placeholder.svg"} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-1">{relatedPost.date}</div>
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-primary text-sm font-medium">
                          Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
