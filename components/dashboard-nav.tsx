"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, History, Settings, User, Globe, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Packages",
    href: "/dashboard/packages",
    icon: Package,
  },
  {
    title: "Delivery Destinations",
    href: "/delivery-destinations",
    icon: Globe,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="glass-card-dark border-b border-purple-500/30 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 overflow-x-auto">
          <div className="flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 hover-lift"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.title}</span>
                </Link>
              )
            })}
          </div>
          <Link
            href="/testimonials"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ml-auto",
              pathname === "/testimonials"
                ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30"
                : "text-slate-300 hover:bg-slate-700/50 hover:text-white",
            )}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Reviews</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
