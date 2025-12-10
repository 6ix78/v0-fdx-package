"use client"

import { Package, Search, Filter, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generatePackageReceipt } from "@/lib/pdf-receipt"

export default function PackagesPage() {
  const packages = [
    {
      id: "FX847392156AF",
      status: "In Transit",
      from: "Kabul, Afghanistan",
      to: "Kampala, Uganda",
      date: "Sep 1, 2025",
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
      sender: "John Smith",
      receiver: "Maria Garcia",
      service: "FedEx Express",
      weight: "2.8 kg",
      dimensions: "25x20x10 cm",
      cost: "$125.00",
    },
  ]

  const handleDownloadReceipt = (pkg: (typeof packages)[0]) => {
    generatePackageReceipt(pkg)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Packages</h1>
          <p className="text-purple-200">View and manage all your shipments</p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by tracking number..."
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="bg-slate-800/50 backdrop-blur-md border-slate-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    {pkg.id}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={
                      pkg.status === "Delivered"
                        ? "bg-green-600/20 text-green-300 border-green-500/30"
                        : "bg-blue-600/20 text-blue-300 border-blue-500/30"
                    }
                  >
                    {pkg.status}
                  </Badge>
                </div>
                <CardDescription className="text-purple-200">Shipped on {pkg.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-slate-400">From</p>
                    <p className="text-white">{pkg.from}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">To</p>
                    <p className="text-white">{pkg.to}</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleDownloadReceipt(pkg)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
