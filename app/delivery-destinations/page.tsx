"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

interface DeliveryDestination {
  id: string
  country: string
  code: string
  fee: number
  deliveryDays: string
  region: string
}

const destinations: DeliveryDestination[] = [
  { id: "1", country: "United States", code: "US", fee: 25, deliveryDays: "2-3", region: "North America" },
  { id: "2", country: "Canada", code: "CA", fee: 35, deliveryDays: "3-5", region: "North America" },
  { id: "3", country: "Mexico", code: "MX", fee: 30, deliveryDays: "3-4", region: "North America" },
  { id: "4", country: "United Kingdom", code: "GB", fee: 45, deliveryDays: "4-6", region: "Europe" },
  { id: "5", country: "Germany", code: "DE", fee: 42, deliveryDays: "4-6", region: "Europe" },
  { id: "6", country: "France", code: "FR", fee: 42, deliveryDays: "4-6", region: "Europe" },
  { id: "7", country: "Spain", code: "ES", fee: 40, deliveryDays: "4-6", region: "Europe" },
  { id: "8", country: "Italy", code: "IT", fee: 42, deliveryDays: "4-6", region: "Europe" },
  { id: "9", country: "Netherlands", code: "NL", fee: 40, deliveryDays: "3-5", region: "Europe" },
  { id: "10", country: "Japan", code: "JP", fee: 65, deliveryDays: "5-7", region: "Asia" },
  { id: "11", country: "South Korea", code: "KR", fee: 60, deliveryDays: "5-7", region: "Asia" },
  { id: "12", country: "China", code: "CN", fee: 55, deliveryDays: "6-8", region: "Asia" },
  { id: "13", country: "India", code: "IN", fee: 50, deliveryDays: "6-8", region: "Asia" },
  { id: "14", country: "Singapore", code: "SG", fee: 52, deliveryDays: "5-7", region: "Asia" },
  { id: "15", country: "Australia", code: "AU", fee: 75, deliveryDays: "7-10", region: "Oceania" },
  { id: "16", country: "New Zealand", code: "NZ", fee: 78, deliveryDays: "8-10", region: "Oceania" },
  { id: "17", country: "Brazil", code: "BR", fee: 55, deliveryDays: "6-8", region: "South America" },
  { id: "18", country: "Argentina", code: "AR", fee: 58, deliveryDays: "6-8", region: "South America" },
  { id: "19", country: "South Africa", code: "ZA", fee: 65, deliveryDays: "7-9", region: "Africa" },
  { id: "20", country: "Egypt", code: "EG", fee: 60, deliveryDays: "7-9", region: "Africa" },
  { id: "21", country: "United Arab Emirates", code: "AE", fee: 48, deliveryDays: "4-6", region: "Middle East" },
  { id: "22", country: "Saudi Arabia", code: "SA", fee: 50, deliveryDays: "5-7", region: "Middle East" },
]

export default function DeliveryDestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState<DeliveryDestination | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCreatePackage = () => {
    router.push("/support/contact-us?destination=" + (selectedDestination?.country || ""))
  }

  return (
    <div className="min-h-screen gradient-bg-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 text-purple-300 text-sm mb-6 border border-purple-500/20">
            <Globe className="w-4 h-4" />
            <span>Shipping to 200+ Countries</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Delivery Destinations</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our worldwide delivery network and check shipping fees to your preferred destination
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search by country, code, or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 border border-white/20 rounded-full focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Destinations Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination)}
                  className={`glass-card-dark cursor-pointer transition-all hover:scale-105 ${
                    selectedDestination?.id === destination.id
                      ? "border-purple-500 shadow-lg shadow-purple-500/50"
                      : "border-slate-700 hover:border-purple-500/50"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{destination.country}</h3>
                        <p className="text-sm text-slate-400">{destination.region}</p>
                      </div>
                      <span className="text-xs font-mono bg-purple-600 text-white px-2 py-1 rounded">
                        {destination.code}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Delivery Fee:</span>
                        <span className="font-bold text-green-400">${destination.fee}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Delivery Time:</span>
                        <span className="text-sm text-slate-300">{destination.deliveryDays} days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                <p className="text-slate-400">No destinations found matching your search</p>
              </div>
            )}
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-1">
            {selectedDestination ? (
              <Card className="glass-card-dark sticky top-8 border-purple-500/50">
                <CardHeader>
                  <CardTitle className="text-white">Destination Details</CardTitle>
                  <CardDescription className="text-slate-300">Selected for shipment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedDestination.country}</h3>
                    <p className="text-slate-400">{selectedDestination.region}</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Country Code:</span>
                      <span className="font-mono text-white font-bold">{selectedDestination.code}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Delivery Fee:</span>
                      <span className="text-xl font-bold text-green-400">${selectedDestination.fee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Est. Delivery:</span>
                      <span className="text-white">{selectedDestination.deliveryDays} business days</span>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-blue-200">
                      <strong>Note:</strong> To create a package to this destination, you'll need to contact our support
                      team. They'll help ensure your shipment is properly configured.
                    </p>
                  </div>

                  <Button
                    onClick={handleCreatePackage}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12"
                  >
                    Create Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/support/contact-us" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-slate-600 text-white hover:bg-white/10 bg-transparent"
                    >
                      Contact Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass-card-dark border-slate-700">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-400">Select a destination to view details and create a package</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
