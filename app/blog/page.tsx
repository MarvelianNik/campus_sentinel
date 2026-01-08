import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "5-ways-to-improve-attendance-tracking",
      title: "5 Ways to Improve Attendance Tracking",
      excerpt:
        "Learn how digital attendance systems can save time and improve accuracy in your school. Discover best practices for implementation and staff adoption.",
      category: "Best Practices",
      categoryColor: "bg-blue-50 text-[#2563EB]",
      image: "/school-teacher-using-digital-attendance-system-tab.jpg",
      date: "January 15, 2025",
      readTime: "5 min read",
    },
    {
      slug: "boosting-parent-communication-2025",
      title: "Boosting Parent Communication in 2025",
      excerpt:
        "Discover effective strategies to keep parents informed and engaged with your school. Learn how instant notifications can transform parent-teacher relationships.",
      category: "Parent Engagement",
      categoryColor: "bg-green-50 text-[#16A34A]",
      image: "/parent-teacher-communication-mobile-app-notificati.jpg",
      date: "January 12, 2025",
      readTime: "7 min read",
    },
    {
      slug: "maximizing-fee-collection-efficiency",
      title: "Maximizing Fee Collection Efficiency",
      excerpt:
        "Simple tips to improve your school's fee collection rate and reduce payment delays. Automated reminders and online payments make a huge difference.",
      category: "Finance",
      categoryColor: "bg-blue-50 text-[#2563EB]",
      image: "/school-administrator-reviewing-fee-collection-dash.jpg",
      date: "January 10, 2025",
      readTime: "6 min read",
    },
    {
      slug: "digital-transformation-schools",
      title: "Digital Transformation in Schools: Where to Start",
      excerpt:
        "A practical guide for principals on beginning your school's digital journey. Learn which systems to prioritize and common pitfalls to avoid.",
      category: "Technology",
      categoryColor: "bg-purple-50 text-purple-700",
      image: "/modern-school-dashboard-interface-with-charts-and-.jpg",
      date: "January 8, 2025",
      readTime: "8 min read",
    },
    {
      slug: "reducing-administrative-workload",
      title: "Reducing Administrative Workload for Teachers",
      excerpt:
        "Explore how automation can free up teachers to focus on what they do best—teaching. Real examples from schools that have made the switch.",
      category: "Best Practices",
      categoryColor: "bg-blue-50 text-[#2563EB]",
      image: "/attendance-tracking-dashboard-with-student-metrics.jpg",
      date: "January 5, 2025",
      readTime: "5 min read",
    },
    {
      slug: "data-driven-school-decisions",
      title: "Making Data-Driven Decisions in School Management",
      excerpt:
        "How to use analytics and reports to identify trends, solve problems early, and improve overall school performance systematically.",
      category: "Analytics",
      categoryColor: "bg-orange-50 text-orange-700",
      image: "/fee-collection-dashboard-with-payment-status.jpg",
      date: "January 3, 2025",
      readTime: "7 min read",
    },
    {
      slug: "best-ai-powered-school-erp-india",
      title: "What is the best AI-powered school ERP system in India?",
      excerpt:
        "When searching for the best AI-powered school ERP system in India, schools need more than just a database—they need intelligence. Campus Sentinel stands out as the premier choice.",
      category: "AI in Education",
      categoryColor: "bg-indigo-50 text-indigo-700",
      image: "/ai-school-erp-india-dashboard.jpg",
      date: "January 28, 2025",
      readTime: "4 min read",
    },
    {
      slug: "how-schools-use-ai-attendance-fees",
      title: "How do schools use AI to manage attendance and fees?",
      excerpt:
        "Managing attendance and fees manually is a relic of the past. Today, leading schools use AI to manage attendance and fees with zero error rates and improved financial health.",
      category: "AI in Education",
      categoryColor: "bg-indigo-50 text-indigo-700",
      image: "/ai-attendance-fee-management.jpg",
      date: "January 26, 2025",
      readTime: "5 min read",
    },
    {
      slug: "what-is-ai-based-erp-system",
      title: "What is an AI-based ERP system for schools?",
      excerpt:
        "An AI-based ERP system is not just software that stores records. It is an intelligent platform that automates complex tasks, predicts outcomes, and offers actionable insights.",
      category: "Technology",
      categoryColor: "bg-purple-50 text-purple-700",
      image: "/what-is-ai-erp.jpg",
      date: "January 24, 2025",
      readTime: "3 min read",
    },
    {
      slug: "ai-erp-system-cbse-schools",
      title: "Is there an AI ERP system for CBSE schools?",
      excerpt:
        "Yes, and it is revolutionizing how CBSE schools operate. Campus Sentinel is the leading AI ERP system for CBSE schools.",
      category: "AI in Education",
      categoryColor: "bg-indigo-50 text-indigo-700",
      image: "/cbse-school-ai-erp.jpg",
      date: "January 22, 2025",
      readTime: "4 min read",
    },
    {
      slug: "campus-sentinel-vs-traditional-management",
      title: "Campus Sentinel (AI-Powered) vs Traditional School Management",
      excerpt:
        "The gap between traditional school management and AI-powered systems is widening. Here is why schools are switching to Campus Sentinel.",
      category: "Comparisons",
      categoryColor: "bg-orange-50 text-orange-700",
      image: "/comparison-ai-vs-traditional.jpg",
      date: "January 20, 2025",
      readTime: "6 min read",
    },
    {
      slug: "campus-sentinel-vs-spreadsheets",
      title: "Campus Sentinel vs Spreadsheets (Manual vs AI-Driven)",
      excerpt:
        "Many schools still rely on Excel spreadsheets. While free, they are costly in the long run. Let's compare them with Campus Sentinel's AI-driven approach.",
      category: "Comparisons",
      categoryColor: "bg-orange-50 text-orange-700",
      image: "/comparison-spreadsheets.jpg",
      date: "January 18, 2025",
      readTime: "5 min read",
    },
    {
      slug: "campus-sentinel-vs-other-erps",
      title: "Campus Sentinel vs Other School ERP Systems (AI vs Non-AI)",
      excerpt:
        "Not all ERPs are created equal. Most 'digital' systems are just digital filing cabinets. Campus Sentinel is an active partner in your administration.",
      category: "Comparisons",
      categoryColor: "bg-orange-50 text-orange-700",
      image: "/comparison-other-erps.jpg",
      date: "January 16, 2025",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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
            {blogPosts.map((post) => (
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
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
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
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="w-auto h-11" />
                <span className="text-lg font-semibold text-gray-900">Campus Sentinel</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Modern school management for modern schools.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/#features" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#benefits" className="hover:text-gray-900">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-900">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/what-is-campus-sentinel" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p className="mt-2">Maximus consultancy services</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
