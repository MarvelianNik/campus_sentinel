"use client"

if (typeof window !== "undefined") {
    // Save original methods
    const originalLog = console.log
    const originalInfo = console.info
    const originalWarn = console.warn
    const originalError = console.error

    // Helper to check if we should suppress
    const shouldSuppress = (args: any[]) => {
        const msg = args[0]
        if (typeof msg === "string") {
            return (
                msg.includes("[HMR] connected") ||
                msg.includes("Download the React DevTools") ||
                msg.includes("[Fast Refresh]") ||
                msg.includes("Vercel Web Analytics")
            )
        }
        return false
    }

    // Override
    console.log = (...args) => {
        if (shouldSuppress(args)) return
        originalLog.apply(console, args)
    }

    console.info = (...args) => {
        if (shouldSuppress(args)) return
        originalInfo.apply(console, args)
    }

    // Optionally suppress warnings if needed, but be careful
    // console.warn = (...args) => { ... }
}

export function DebugSuppressor() {
    return null
}
