"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Express Shipping", href: "/services/express" },
        { name: "Ground Shipping", href: "/services/ground" },
        { name: "International", href: "/services/international" },
        { name: "Same Day Delivery", href: "/services/same-day" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Track Package", href: "/tracking" },
        { name: "Customer Service", href: "/support" },
        { name: "Shipping Guide", href: "/support/shipping-guide" },
        { name: "FAQ", href: "/support/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About FedEx", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "FedEx Locations", href: "/locations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Developer APIs", href: "/developers" },
        { name: "Mobile Apps", href: "/mobile" },
        { name: "Business Solutions", href: "/business" },
        { name: "Small Business", href: "/small-business" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/fedex" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/fedex" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/fedex" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/fedex" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/fedex" },
  ]

  return (
    <footer className="bg-slate-900/50 text-white border-t border-purple-500/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Image src="/fedex-logo.png" alt="FedEx Logo" width={100} height={28} className="h-7 w-auto" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The world's largest express transportation company, delivering packages and freight to more than 220
                countries and territories around the globe.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  1-800-GO-FEDEX (1-800-463-3339)
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  support@fedex.com
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <MapPin className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  942 South Shady Grove Road, Memphis, TN 38120
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover-scale"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800/50">
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
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/cookies" className="hover:text-purple-400 transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link href="/accessibility" className="hover:text-purple-400 transition-colors">
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
