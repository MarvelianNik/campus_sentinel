"use client"

import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [showContactModal, setShowContactModal] = useState(false)

  const posts = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
    excerpt: post.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...'
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending

  return (
    <div className="min-h-screen bg-white">
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-12 w-auto" />
              <span className="text-xl font-semibold text-gray-900">Campus Sentinel</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-gray-300 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Insights for School Leaders
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Expert advice, best practices, and strategies to help you run your school more effectively. Stay updated
              with the latest trends in school management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
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
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
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
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your school?</h2>
            <p className="text-lg text-gray-600 mb-8">
              See how Campus Sentinel can help you save time and improve parent engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setShowContactModal(true)} size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
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
