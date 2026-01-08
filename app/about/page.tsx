import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Brain,
    Shield,
    MessageCircle,
    Bell,
    FileCheck,
    TrendingUp,
    School,
    Users,
    Calendar,
    Wallet,
    FileText,
    Menu,
    X,
    ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import React from "react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-12 w-auto" />
                            <span className="text-xl font-semibold text-secondary-foreground">Campus Sentinel</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                Features
                            </Link>
                            <Link href="/#benefits" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                Benefits
                            </Link>
                            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                Blogs
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-gray-900">
                                About
                            </Link>
                            <Button className="custom-contact-btn">
                                Contact Sales
                            </Button>
                        </nav>
                        <div className="md:hidden">
                            {/* Mobile menu would go here, skipping for simplicity in this static page but keeping layout consistent */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 bg-blue-100 text-[#2563EB] hover:bg-blue-100 border-0 text-sm py-1 px-4">
                            The World’s First AI-Powered School ERP
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold text-gray-900 mb-6 text-balance">
                            Transforming Schools with Intelligent Automation
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed text-pretty mb-8">
                            Campus Sentinel is the world’s first AI-powered School ERP system designed to transform how educational
                            institutions operate, monitor, and communicate—by combining intelligent automation with everyday school
                            management.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                            Built for modern schools, Campus Sentinel goes beyond traditional ERP software by embedding artificial
                            intelligence at the core of campus operations, enabling schools to save time, improve accuracy, enhance
                            safety, and deliver better outcomes for students, teachers, and parents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-[#25634A] to-[#1e4d3a] rounded-3xl p-8 md:p-12 text-center shadow-xl text-white">
                            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                            <p className="text-xl leading-relaxed text-blue-50">
                                "To create intelligent, secure, and data-driven school campuses where administrators focus on growth,
                                teachers focus on teaching, and students focus on learning—while AI handles the rest."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What Makes Campus Sentinel Different?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Unlike conventional school ERP systems that rely heavily on manual inputs and repetitive workflows, Campus
                            Sentinel uses AI-powered automation to manage critical academic and administrative functions with minimal
                            human intervention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                                <Brain className="h-6 w-6 text-[#2563EB]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Automatic Attendance</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Attendance is captured automatically using AI-enabled cameras, eliminating roll calls and proxy
                                attendance.
                            </p>
                        </Card>

                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Based Surveillance</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Real-time monitoring to enhance campus safety, detect anomalies, and maintain discipline automatically.
                            </p>
                        </Card>

                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                                <MessageCircle className="h-6 w-6 text-[#16A34A]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Automated Communication</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                AI-driven messages keep parents informed about attendance, academics, announcements, and emergencies.
                            </p>
                        </Card>

                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
                                <Bell className="h-6 w-6 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Fee Reminders</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Smart reminders for pending fees, reducing manual follow-ups and improving collection efficiency.
                            </p>
                        </Card>

                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                                <FileCheck className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Auto Answer Evaluation</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                AI-assisted evaluation of answer sheets for faster, consistent, and unbiased assessments.
                            </p>
                        </Card>

                        <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Student Evaluation</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Performance analysis using academic data and behavioral insights to support personalized development.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Complete ERP Platform Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Complete School ERP Platform</h2>
                        <p className="text-lg text-gray-600">
                            In addition to advanced AI capabilities, Campus Sentinel includes all essential school ERP features in a
                            single, unified platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Users, label: "Student & Teacher Management" },
                            { icon: Calendar, label: "Attendance & Timetable" },
                            { icon: Wallet, label: "Fee & Finance Management" },
                            { icon: FileText, label: "Exams, Results & Reports" },
                            { icon: MessageCircle, label: "Parent–Teacher Communication" },
                            { icon: TrendingUp, label: "Analytics & Dashboards" },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 border border-gray-100 text-center hover:bg-white hover:border-blue-200 hover:shadow-md transition-all"
                            >
                                <feature.icon className="h-8 w-8 text-gray-400 mb-3" />
                                <span className="font-semibold text-gray-900">{feature.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Indian Context & Commitment */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-[#25634A] to-[#1e4d3a] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Built for Indian Schools, Ready for the World</h2>
                            <p className="text-lg text-blue-50 leading-relaxed mb-8">
                                Campus Sentinel is designed with the realities of Indian schools in mind—scalable, affordable, and
                                adaptable—while meeting global standards in security, performance, and reliability.
                            </p>

                            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                            <p className="text-blue-50 mb-6">We are committed to helping schools:</p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Reduce administrative burden",
                                    "Improve operational transparency",
                                    "Enhance campus safety",
                                    "Enable data-driven academic decisions",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-[#16A34A] bg-white" />
                                        <span className="text-blue-50">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-xl font-semibold text-white">
                                With Campus Sentinel, schools don’t just adopt software—they adopt intelligence.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="aspect-video flex items-center justify-center text-center">
                                <div>
                                    <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-20 w-auto mx-auto mb-4 opacity-80" />
                                    <h4 className="text-2xl font-bold">Campus Sentinel</h4>
                                    <p className="mt-2 text-white/70">Empowering Education with AI</p>
                                </div>
                            </div>
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
