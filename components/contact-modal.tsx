"use client"

import { Phone, Mail, MapPin, X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || !isOpen) return null

    // Prevent scrolling when modal is open
    if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden"
    }

    const handleClose = () => {
        document.body.style.overflow = "unset"
        onClose()
    }

    return createPortal(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={handleClose}
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

                    <a
                        href="mailto:maximusconsultancyservice@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:border-[#2563EB] hover:bg-blue-50 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-background group-hover:bg-[#2563EB] transition-colors">
                            <Mail className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-gray-600">Email</div>
                            <div className="font-semibold text-gray-900">maximusconsultancyservice@gmail.com</div>
                        </div>
                    </a>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:border-[#2563EB] hover:bg-blue-50 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                            <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-gray-600">Location</div>
                            <div className="font-semibold text-gray-900">Available across India</div>
                        </div>
                    </a>
                </div>

                <div className="mt-6 text-center text-sm text-gray-600">Our team typically responds within 24 hours</div>
            </div>
        </div>,
        document.body,
    )
}
