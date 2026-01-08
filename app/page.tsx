"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Bell,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Menu,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Sales</h3>
              <p className="text-gray-600">Get in touch with our team to schedule a demo</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+917619107621"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#2563EB] hover:bg-blue-50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                  <Phone className="h-6 w-6 text-[#2563EB] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Phone Number</div>
                  <div className="font-semibold text-gray-900">+91 761 910 7621</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-background">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-900">maximusconsultancyservice@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-semibold text-gray-900">Available across India</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">Our team typically responds within 24 hours</div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-12 w-auto" />
              <span className="text-xl font-semibold text-secondary-foreground">Campus Sentinel</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#benefits" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Benefits
              </Link>
              <Link href="#blogs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Blogs
              </Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Button onClick={() => setShowContactModal(true)} className="custom-contact-btn">
                Contact Sales
              </Button>
            </nav>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#blogs"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button
                onClick={() => {
                  setShowContactModal(true)
                  setIsMobileMenuOpen(false)
                }}
                className="custom-contact-btn w-full"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:mt-8">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
                Campus Sentinel – AI Powered School ERP System for Indian Schools
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 text-pretty">
                An all-in-one AI-powered ERP software that automates attendance, fees, exams, parent communication, and delivers real-time analytics for schools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowContactModal(true)}
                  className="custom-contact-btn text-base"
                >
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="text-base border-gray-300 bg-transparent">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                  <span>Free training</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/modern-school-dashboard-interface-with-charts-and-.jpg"
                  alt="Principal Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Running a school shouldn't feel this complicated
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Paper registers, delayed fee collections, frustrated parents waiting for updates— you deserve better than
              juggling multiple systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
              <Clock className="h-10 w-10 text-[#2563EB] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Time-consuming tasks</h3>
              <p className="text-gray-600 leading-relaxed">
                Hours wasted on manual attendance, fee tracking, and generating reports.
              </p>
            </Card>
            <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
              <MessageSquare className="h-10 w-10 text-[#2563EB] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Poor communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Parents constantly calling for updates while important notices get missed.
              </p>
            </Card>
            <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
              <BarChart3 className="h-10 w-10 text-[#2563EB] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No clear insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Making decisions without real-time data on your school's performance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Your school's health at a glance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              See what matters most with clean, simple dashboards designed for principals— not software engineers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 glass-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="mb-4">
                <Badge className="bg-blue-50 text-[#25634A] border-0">Principal Overview</Badge>
              </div>
              <img
                src="/school-dashboard-with-attendance-and-fee-collectio.jpg"
                alt="Principal Overview Dashboard"
                className="w-full rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete overview</h3>
              <p className="text-sm text-gray-600">
                Key metrics like attendance rate, fee collection status, and student count—all in one view.
              </p>
            </Card>
            <Card className="p-6 glass-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="mb-4">
                <Badge className="bg-green-50 text-[#16A34A] border-0">Fees Management</Badge>
              </div>
              <img
                src="/fee-collection-dashboard-with-payment-status.jpg"
                alt="Fees Dashboard"
                className="w-full rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fee collection made easy</h3>
              <p className="text-sm text-gray-600">
                Track payments, send reminders, and generate receipts instantly without manual work.
              </p>
            </Card>
            <Card className="p-6 glass-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="mb-4">
                <Badge className="bg-blue-50 text-[#25634A] border-0">Attendance</Badge>
              </div>
              <img
                src="/attendance-tracking-dashboard-with-student-metrics.jpg"
                alt="Attendance Dashboard"
                className="w-full rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attendance tracking</h3>
              <p className="text-sm text-gray-600">
                Digital registers that teachers can mark in seconds, with instant parent notifications.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Powerful features that actually make your life easier—not more complicated.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-[#25634A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Send updates, notices, and announcements instantly. Parents stay informed without constant calls.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#25634A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Reports</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generate detailed reports in seconds. Get insights that help you make better decisions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#25634A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete student profiles with academic records, attendance history, and more in one place.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#16A34A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fee Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automated fee collection with payment reminders and instant receipt generation.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#25634A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-grade security with 99.9% uptime. Your data is always safe and accessible.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-[#25634A]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track student performance, identify trends, and make data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Transform how your school operates
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              See the real impact Campus Sentinel brings to your school—from saving time to improving parent
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 glass-card hover:border-[#16A34A] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-[#25634A]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Save 15+ hours weekly</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Automate repetitive tasks like attendance marking, fee tracking, and report generation. Your staff can
                focus on what matters—teaching and student care.
              </p>
              <div className="flex items-center gap-2 text-[#16A34A] font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Average time saved per school</span>
              </div>
            </Card>

            <Card className="p-8 glass-card hover:border-[#16A34A] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-[#16A34A]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">95% fee collection rate</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Automated payment reminders and easy online payment options ensure timely fee collection. No more
                chasing parents for payments.
              </p>
              <div className="flex items-center gap-2 text-[#16A34A] font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Average collection improvement</span>
              </div>
            </Card>

            <Card className="p-8 glass-card hover:border-[#16A34A] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-[#25634A]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Happier parents & better engagement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Keep parents informed with instant notifications about attendance, fees, and school updates. Reduce
                phone calls by 70% while improving communication.
              </p>
              <div className="flex items-center gap-2 text-[#16A34A] font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Measured parent satisfaction increase</span>
              </div>
            </Card>

            <Card className="p-8 glass-card hover:border-[#16A34A] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-[#25634A]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Make data-driven decisions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get real-time insights into attendance trends, fee collection, and student performance. Identify and
                address issues before they become problems.
              </p>
              <div className="flex items-center gap-2 text-[#16A34A] font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Actionable insights daily</span>
              </div>
            </Card>
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#25634A]" />
                </div>
                <h4 className="font-semibold text-gray-900">Reduced errors</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Eliminate manual data entry mistakes with automated systems and validation checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#16A34A]" />
                </div>
                <h4 className="font-semibold text-gray-900">Better staff productivity</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Teachers and staff spend less time on admin work and more time with students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-[#25634A]" />
                </div>
                <h4 className="font-semibold text-gray-900">Instant reports</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Generate comprehensive reports in seconds instead of hours of manual compilation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Insights for school leaders
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-pretty">
              Expert advice, best practices, and strategies to help you run your school more effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300">
              <img
                src="/school-teacher-using-digital-attendance-system-tab.jpg"
                alt="Digital attendance tracking"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-blue-50 text-[#2563EB] border-0">Best Practices</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Ways to Improve Attendance Tracking</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Learn how digital attendance systems can save time and improve accuracy in your school.
                </p>
                <Link
                  href="/blog/5-ways-to-improve-attendance-tracking"
                  className="text-[#2563EB] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300">
              <img
                src="/parent-teacher-communication-mobile-app-notificati.jpg"
                alt="Parent communication"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-green-50 text-[#16A34A] border-0">Parent Engagement</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Boosting Parent Communication in 2025</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover effective strategies to keep parents informed and engaged with your school.
                </p>
                <Link
                  href="/blog/boosting-parent-communication-2025"
                  className="text-[#2563EB] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Card>

            <Card className="overflow-hidden glass-card hover:shadow-xl transition-all duration-300">
              <img
                src="/school-administrator-reviewing-fee-collection-dash.jpg"
                alt="Fee collection strategies"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <Badge className="mb-3 bg-blue-50 text-[#2563EB] border-0">Finance</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximizing Fee Collection Efficiency</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Simple tips to improve your school's fee collection rate and reduce payment delays.
                </p>
                <Link
                  href="/blog/maximizing-fee-collection-efficiency"
                  className="text-[#2563EB] font-medium hover:underline inline-flex items-center gap-1"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">
                View all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#25634A] to-[#1e4d3a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to transform your school?</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 text-pretty">
              Join 500+ schools already using Campus Sentinel. Schedule a free demo and see how our platform works for
              your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowContactModal(true)}
                size="lg"
                className="bg-white text-[#25634A] hover:bg-gray-100 text-base"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download Brochure
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
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
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
