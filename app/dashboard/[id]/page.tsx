"use client"

import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Package, MapPin, Calendar, Truck, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { generatePackageReceipt } from "@/lib/pdf-receipt"

// Sample package data - in a real app, this would come from an API
const allPackages = [
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

export default function PackageDetailPage() {
  const router = useRouter()
  const params = useParams()
  const packageId = params.id as string

  const pkg = allPackages.find((p) => p.id === packageId)

  if (!pkg) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="mx-auto max-w-4xl">
          <Button onClick={() => router.back()} variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardContent className="p-8">
              <p className="text-white text-center">Package not found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-4xl">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mb-6 bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Packages
        </Button>

        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2 text-2xl">
                  <Package className="h-6 w-6" />
                  {pkg.id}
                </CardTitle>
                <CardDescription className="text-purple-200 mt-2">Package Details</CardDescription>
              </div>
              <Badge className={`${pkg.statusColor}`}>{pkg.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Shipping Route */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-700/20 rounded-lg">
              <div>
                <p className="text-slate-400 text-sm flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  From
                </p>
                <p className="text-white font-medium">{pkg.from}</p>
                <p className="text-slate-300 text-sm">{pkg.sender}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm flex items-center gap-2 mb-1">
                  <MapPin className="h-4 w-4" />
                  To
                </p>
                <p className="text-white font-medium">{pkg.to}</p>
                <p className="text-slate-300 text-sm">{pkg.receiver}</p>
              </div>
            </div>

            {/* Package Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-700/20 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Service Type</p>
                <p className="text-white font-medium">{pkg.service}</p>
              </div>
              <div className="p-4 bg-slate-700/20 rounded-lg">
                <p className="text-slate-400 text-sm flex items-center gap-2 mb-1">
                  <Truck className="h-4 w-4" />
                  Weight
                </p>
                <p className="text-white font-medium">{pkg.weight}</p>
              </div>
              <div className="p-4 bg-slate-700/20 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Dimensions</p>
                <p className="text-white font-medium">{pkg.dimensions}</p>
              </div>
              <div className="p-4 bg-slate-700/20 rounded-lg">
                <p className="text-slate-400 text-sm flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4" />
                  Shipping Date
                </p>
                <p className="text-white font-medium">{pkg.date}</p>
              </div>
            </div>

            {/* Delivery Status */}
            {pkg.deliveredDate && (
              <div className="p-4 bg-green-600/10 border border-green-600/30 rounded-lg">
                <p className="text-green-300 text-sm mb-1">Delivered On</p>
                <p className="text-white font-medium">{pkg.deliveredDate}</p>
              </div>
            )}

            {/* Cost Section */}
            <div className="p-4 bg-purple-600/10 border border-purple-600/30 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-slate-300">Shipping Cost</p>
                <p className="text-white text-2xl font-bold">{pkg.cost}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => generatePackageReceipt(pkg)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
