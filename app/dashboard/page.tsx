"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { MapPin, Clock, TrendingUp, Truck, CheckCircle, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import { generatePackageReceipt } from "@/lib/pdf-receipt"

export default function DashboardPage() {
  const { isAuthenticated, user } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  const stats = [
    {
      title: "Active Shipments",
      value: "3",
      icon: Truck,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-600/20",
    },
    {
      title: "Delivered This Month",
      value: "12",
      icon: CheckCircle,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-600/20",
    },
    {
      title: "Total Packages",
      value: "47",
      icon: TrendingUp,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-600/20",
    },
  ]

  const recentPackages = [
    {
      id: "FX847392156AF",
      status: "In Transit",
      from: "Kabul, Afghanistan",
      to: "Kampala, Uganda",
      date: "Sep 1, 2025",
      statusColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      sender: "Ahmad Khalil",
      receiver: "Moses Okello",
      service: "FedEx International Priority",
      weight: "5.2 kg",
      dimensions: "30x25x15 cm",
      cost: "$750.00",
    },
    {
      id: "FX123456789PE",
      status: "Delivered",
      from: "New York, USA",
      to: "Trujillo, Peru",
      date: "Aug 15, 2025",
      deliveredDate: "Aug 20, 2025",
      statusColor: "bg-green-600/20 text-green-300 border-green-500/30",
      sender: "John Smith",
      receiver: "Maria Garcia",
      service: "FedEx Express",
      weight: "2.8 kg",
      dimensions: "25x20x10 cm",
      cost: "$125.00",
    },
    {
      id: "FX987654321US",
      status: "Processing",
      from: "Los Angeles, USA",
      to: "Tokyo, Japan",
      date: "Sep 3, 2025",
      statusColor: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
      sender: "Sarah Johnson",
      receiver: "Yuki Tanaka",
      service: "FedEx International Priority",
      weight: "3.5 kg",
      dimensions: "28x22x12 cm",
      cost: "$185.00",
    },
  ]

  const handleDownloadReceipt = (pkg: (typeof recentPackages)[0]) => {
    generatePackageReceipt(pkg)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome Message */}
        <div className="mb-8 animate-slide-down">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back, {user?.fullName}</h1>
          <p className="text-purple-200">Here's an overview of your shipments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.title}
              className="glass-card-dark border-purple-500/30 hover:border-purple-500/50 hover-lift animate-slide-up transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1 font-medium">{stat.title}</p>
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card-dark border-purple-500/30 mb-8 animate-slide-up hover-lift">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-xl">Recent Packages</CardTitle>
                <CardDescription className="text-purple-200">Your latest shipments</CardDescription>
              </div>
              <Link href="/dashboard/packages">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 btn-smooth">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPackages.map((pkg, index) => (
                <Link key={pkg.id} href={`/dashboard/${pkg.id}`}>
                  <div
                    className="flex items-center justify-between p-4 glass-card-dark rounded-lg hover:bg-slate-700/50 hover-lift transition-all duration-200 border border-slate-700/50 hover:border-purple-500/30"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-2 bg-purple-600/20 rounded-lg">
                        <Truck className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{pkg.id}</p>
                        <p className="text-sm text-slate-400">
                          {pkg.from} → {pkg.to}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${pkg.statusColor}`}
                        >
                          {pkg.status}
                        </span>
                        <p className="text-xs text-slate-400 mt-1">{pkg.date}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.preventDefault()
                          handleDownloadReceipt(pkg)
                        }}
                        className="glass-card-dark border-slate-600 text-white hover:bg-slate-600/50 btn-smooth"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card-dark border-purple-500/30 hover:border-purple-500/50 hover-lift animate-slide-up transition-all">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                Track Package
              </CardTitle>
              <CardDescription className="text-purple-200">Find your shipment</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tracking">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 btn-smooth">
                  Track Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card
            className="glass-card-dark border-purple-500/30 hover:border-purple-500/50 hover-lift animate-slide-up transition-all"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-400" />
                View History
              </CardTitle>
              <CardDescription className="text-purple-200">Past shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/history">
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 btn-smooth">
                  View History
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
