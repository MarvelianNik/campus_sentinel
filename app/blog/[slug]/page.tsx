import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ContactSalesButton } from "@/components/contact-sales-button"
import { Metadata } from 'next'
import Script from 'next/script'

import { blogPosts } from "@/lib/blog-data"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image || '/og-image.png', // Fallback to main OG image
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
      images: [post.image || '/og-image.png'],
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image ? [`https://campussentinel.com${post.image}`] : [],
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole
    },
    description: post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...',
  }

  // Get related posts (exclude current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="blog-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-12 w-auto" />
              <span className="text-xl font-semibold text-gray-900">Campus Sentinel</span>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-gray-300 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Articles
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#2563EB] hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>

            <Badge className={`mb-4 ${post.categoryColor} border-0`}>{post.category}</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">{post.title}</h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorRole}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full rounded-xl shadow-lg mb-12"
            />

            <div
              className="prose md:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: "var(--prose-font-size, 1.125rem)",
                lineHeight: "1.75",
                color: "#4b5563",
              }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(([slug, post]) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-xl transition-all h-full group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className={`mb-3 ${post.categoryColor} border-0`}>{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your school?</h2>
            <p className="text-lg text-blue-100 mb-8">
              See how Campus Sentinel can help you save time and improve parent engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactSalesButton size="lg" className="bg-white text-[#2563EB] hover:bg-gray-100">
                Contact Sales
              </ContactSalesButton>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
