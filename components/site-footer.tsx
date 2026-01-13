"use client"

import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Linkedin } from "lucide-react"

export function SiteFooter() {
    const [showContactModal, setShowContactModal] = useState(false)

    return (
        <>
            <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="w-auto h-11" />
                                <span className="text-lg font-semibold text-gray-900">Campus Sentinel</span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Modern school management for modern schools.</p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://x.com/campussentinel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-900 transition-colors"
                                    aria-label="Follow us on X (Twitter)"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/campus-sentinel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-900 transition-colors"
                                    aria-label="Follow us on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
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
                                    <button onClick={() => setShowContactModal(true)} className="hover:text-gray-900 text-left">
                                        Contact
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setShowContactModal(true)} className="hover:text-gray-900 text-left">
                                        Support
                                    </button>
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
        </>
    )
}
