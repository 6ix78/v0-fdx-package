"use client"

import { History, Package, Calendar, MapPin, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generatePackageReceipt } from "@/lib/pdf-receipt"

export default function PackageHistoryPage() {
  const historyPackages = [
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
    {
      id: "FX987654321US",
      status: "Delivered",
      from: "Los Angeles, USA",
      to: "Tokyo, Japan",
      date: "Jul 10, 2025",
      deliveredDate: "Jul 15, 2025",
      sender: "Sarah Johnson",
      receiver: "Yuki Tanaka",
      service: "FedEx International Priority",
      weight: "3.5 kg",
      dimensions: "28x22x12 cm",
      cost: "$185.00",
    },
    {
      id: "FX456789123UK",
      status: "Delivered",
      from: "London, UK",
      to: "Sydney, Australia",
      date: "Jun 5, 2025",
      deliveredDate: "Jun 12, 2025",
      sender: "David Brown",
      receiver: "Emma Wilson",
      service: "FedEx International Economy",
      weight: "4.1 kg",
      dimensions: "32x24x14 cm",
      cost: "$210.00",
    },
  ]

  const handleDownloadReceipt = (pkg: (typeof historyPackages)[0]) => {
    generatePackageReceipt(pkg)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <History className="h-8 w-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Package History</h1>
          </div>
          <p className="text-purple-200">View all your past shipments and deliveries</p>
        </div>

        <div className="space-y-4">
          {historyPackages.map((pkg) => (
            <Link key={pkg.id} href={`/dashboard/${pkg.id}`}>
              <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      {pkg.id}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
                      {pkg.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-purple-200">Shipped on {pkg.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-slate-400 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        From
                      </p>
                      <p className="text-white">{pkg.from}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        To
                      </p>
                      <p className="text-white">{pkg.to}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Delivered
                      </p>
                      <p className="text-white">{pkg.deliveredDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 text-slate-400 text-sm">Click to view details</div>
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        handleDownloadReceipt(pkg)
                      }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Receipt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
