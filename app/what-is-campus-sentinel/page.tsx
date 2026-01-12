import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    CheckCircle2,
    XCircle,
    Brain,
    TrendingUp,
    Clock,
    Heart,
    MapPin,
    Menu,
    X,
    School,
    Wallet,
    FileCheck,
} from "lucide-react"
import Link from "next/link"
import React from "react"

export default function WhatIsCampusSentinel() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header - Keeping consistent with other pages */}
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
                            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </Link>
                            <Button className="custom-contact-btn">
                                Contact Sales
                            </Button>
                        </nav>
                        <div className="md:hidden">
                            {/* Mobile menu place holder */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 bg-blue-100 text-[#2563EB] hover:bg-blue-100 border-0 text-sm py-1 px-4">
                            Overview
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold text-gray-900 mb-6 text-balance">
                            What is Campus Sentinel?
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed text-pretty mb-8">
                            Campus Sentinel is the world’s first AI-powered school ERP system designed to help schools manage
                            academics, administration, and communication using artificial intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who should use it?</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {["CBSE schools", "ICSE schools", "State board schools", "Private & semi-private schools"].map(
                            (item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-all pt-8"
                                >
                                    <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <School className="h-5 w-5" />
                                    </div>
                                    <p className="font-semibold text-gray-900">{item}</p>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* Problems vs Solutions Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Problems it Solves</h2>
                        <p className="text-gray-600">Addressing the core challenges of school management.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-4">
                                <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Manual Processes</h3>
                                    <p className="text-sm text-gray-600">Manual and error-prone administrative workflows.</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-4">
                                <TrendingUp className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Lack of Data</h3>
                                    <p className="text-sm text-gray-600">No data-driven decision making capabilities.</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6 border-l-4 border-l-red-500 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">Communication Delays</h3>
                                    <p className="text-sm text-gray-600">Delayed parent communication and updates.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* AI Features Summary */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-0 mb-4">Capabilities</Badge>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Features Summary</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                            <Brain className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">AI Attendance Analysis</h3>
                            <p className="text-sm text-gray-600">Automated tracking and tracking insights.</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                            <Wallet className="h-8 w-8 text-green-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Smart Fee Tracking</h3>
                            <p className="text-sm text-gray-600">Predictions and automated reminders.</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl">
                            <FileCheck className="h-8 w-8 text-orange-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Exam Insights</h3>
                            <p className="text-sm text-gray-600">Automated exam performance analytics.</p>
                        </div>
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl">
                            <TrendingUp className="h-8 w-8 text-pink-600 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">AI Reports</h3>
                            <p className="text-sm text-gray-600">Generated reports for management.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Location */}
            <section className="py-16 lg:py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Why schools choose Campus Sentinel</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Saves administrative time", icon: Clock },
                                    { title: "Improves decision-making using AI", icon: Brain },
                                    { title: "Improves parent satisfaction", icon: Heart }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <item.icon className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <span className="text-lg font-medium">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1e4d3a] rounded-3xl p-8 lg:p-12 text-center border border-white/10">
                            <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Built in India</h3>
                            <p className="text-lg text-white/80">
                                Designed specifically for the realities and needs of Indian schools.
                            </p>
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
                        <p>© {new Date().getFullYear()} Maximus Consultancy Services Group. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
