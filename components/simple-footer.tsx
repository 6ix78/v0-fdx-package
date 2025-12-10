"use client"

import Link from "next/link"

export function SimpleFooter() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-sm text-slate-400">
                Copyright© 2025{" "}
                <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                  FedEx
                </Link>
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
