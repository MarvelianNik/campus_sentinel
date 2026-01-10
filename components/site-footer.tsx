"use client"

import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

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
                                    <button onClick={() => setShowContactModal(true)} className="hover:text-gray-900 text-left">
                                        Contact
                                    </button>
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
        </>
    )
}
