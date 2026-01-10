"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import type { VariantProps } from "class-variance-authority"

interface ContactSalesButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

export function ContactSalesButton({ children, onClick, ...props }: ContactSalesButtonProps) {
    const [showContactModal, setShowContactModal] = useState(false)

    return (
        <>
            <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <Button
                onClick={(e) => {
                    setShowContactModal(true)
                    if (onClick) onClick(e)
                }}
                {...props}
            >
                {children || "Contact Sales"}
            </Button>
        </>
    )
}
